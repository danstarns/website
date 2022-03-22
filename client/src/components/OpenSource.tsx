import { Section } from "./Section";
import * as Repo from "./Repo";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../config";

export function OpenSource() {
  const [repos, setRepos] = useState<Repo.Props[]>([]);

  const getRepos = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/repos`);

      if (response.status !== 200 || !response.ok) {
        throw new Error(await response.text());
      }

      setRepos(await response.json());
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Section id="open-source" header="Open Source">
      <div className="grid gap-4 grid-cols-2">
        {repos.map((repo) => (
          <Repo.Repo
            key={repo.name}
            name={repo.name}
            description={repo.description}
            primaryLanguage={repo.primaryLanguage}
            url={repo.url}
          ></Repo.Repo>
        ))}
      </div>
    </Section>
  );
}
