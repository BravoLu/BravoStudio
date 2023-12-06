declare module 'crypto-js'
import { useEffect, useState } from "react";
import { GetAllPublicRepos } from "../api/githubApi";
import useConfig from "../useConfig";
import * as CryptoJS from "crypto-js";

function decryptAES(encryptedText: string, key: string, iv: string): string {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, key, { iv: CryptoJS.enc.Utf8.parse(iv) });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

const useProjects = () => {
  const [repos, setRepos] = useState<object | undefined | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const Config = useConfig();

  useEffect(() => {
    setIsLoading(true);
    const auth = Config.config?.githubAuth || "";
    // GetAllPublicRepos(atob(auth))
    GetAllPublicRepos(decryptAES(auth, "key", "1"))
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
