import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {loadConfig} from "./utils/configLoader";
import Config from "./utils/config"

interface Props {
  children: ReactNode;
}

export const ConfigContext = createContext<{ config: Config | null }>({
  config: null,
});


export const ConfigProvider: React.FC<Props> = ({ children }) => {
  const [config, setConfig] = useState<Config | null>(null);
  useEffect(() => {
    loadConfig().then((result) => {
      setConfig(result);
    });
  }, []);

  return (
    <ConfigContext.Provider value={{ config }}>
      {children}
    </ConfigContext.Provider>
  );
};
