import { API_URL } from "../config";

export interface Repo {
  name: string;
  url: string;
  description: string;
  primaryLanguage: { color: string; name: string };
}

export const getRepos = async (): Promise<Repo[]> => {
  const response = await fetch(`${API_URL}/api/repos`);

  if (response.status !== 200 || !response.ok) {
    throw new Error(await response.text());
  }

  const repos = (await response.json()) as Repo[];

  return repos;
};
