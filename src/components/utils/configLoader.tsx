import yaml from "js-yaml";
import Config from "./config"

export const loadConfig = async (): Promise<Config | null> => {
  try {
    const resp = await fetch("/config.yaml");
    const fileContents = await resp.text();
    const data = yaml.load(fileContents) as Config;
    return data;
  } catch (error) {
    console.error("Error loading config.yaml:", error);
    return null;
  }
};

// export default loadConfig;
