import { Octokit } from "octokit";

const useOctokit = (githubAuth: string) => {
  const cli = new Octokit({
    auth: githubAuth,
  });
  return cli;
};

interface Props {
  owner: string;
  repo: string;
  auth: string;
}

export async function GetRepoInfo({ owner, repo, auth }: Props) {
  try {
    const response = await useOctokit(auth).rest.repos.get({ owner, repo });
    const repoInfo = response.data;
    return { name: repoInfo.name };
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function GetAllPublicRepos(auth: string) {
  try {
    const response = await useOctokit(
      auth
    ).rest.repos.listForAuthenticatedUser();
    const publicRepos = response.data;
    return publicRepos;
  } catch (error) {
    console.error("Error:", error);
  }
}
