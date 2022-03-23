import { Section } from "./Section";
import { Repo as RepoComponent } from "./Repo";
import { useCallback, useEffect, useState } from "react";
import { getRepos, Repo as IRepo } from "../api/get-repos";

export function OpenSource() {
  const [repos, setRepos] = useState<IRepo[]>([]);

  const init = useCallback(async () => {
    try {
      const r = await getRepos();
      setRepos(r);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    init();
  }, []);

  return (
    <Section id="open-source" header="Open Source">
      <div className="grid gap-4 grid-cols-2">
        {repos.map((repo) => (
          <RepoComponent
            key={repo.name}
            name={repo.name}
            description={repo.description}
            primaryLanguage={repo.primaryLanguage}
            url={repo.url}
          ></RepoComponent>
        ))}
      </div>
    </Section>
  );
}
