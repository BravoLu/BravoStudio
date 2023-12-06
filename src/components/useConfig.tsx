import { useContext } from "react";
import { ConfigContext } from "./configContext";

const useConfig = () => {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error(
      "ChakraConfigProvider not found. Make sure to use ChakraConfigProvider at the root of your app."
    );
  }
  return config;
};

export default useConfig;
