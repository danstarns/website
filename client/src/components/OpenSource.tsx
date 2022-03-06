import { Section } from "./Section";
import GitHubCalendar from "react-github-calendar";
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
      <h3>Pinned Projects</h3>
      <div className="grid gap-4 grid-cols-2">
        {repos.map((repo) => (
          <Repo.Repo
            key={repo.name}
            name={repo.name}
            description={repo.description}
            primaryLanguage={repo.primaryLanguage}
            forkCount={repo.forkCount}
            stargazerCount={repo.stargazerCount}
            url={repo.url}
          ></Repo.Repo>
        ))}
      </div>
      <h3>Contributions</h3>
      <div className="pt-5">
        <GitHubCalendar username="danstarns" />
      </div>
    </Section>
  );
}
