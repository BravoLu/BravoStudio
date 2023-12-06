import { useEffect, useState } from "react";
import { GetAllPublicRepos } from "../api/githubApi";
import useConfig from "../useConfig";

const useProjects = () => {
  const [repos, setRepos] = useState<object | undefined | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const Config = useConfig();

  useEffect(() => {
    setIsLoading(true);
    const auth = Config.config?.githubAuth || "";
    GetAllPublicRepos(atob(auth))
      .then((result) => {
        setRepos(
          result?.filter(
            (item) =>
              item.private === false &&
              item.owner.login === Config.config?.githubUser
          )
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error: ", error);
        setIsLoading(false);
      });
  }, [Config]);
  const repoNum =
    repos === null || repos === undefined
      ? 0
      : Object.values(repos).length % 10 === 0
      ? Object.values(repos).length
      : Object.values(repos).length + 1;
  return { repos, repoNum, isLoading };
};

export default useProjects;
