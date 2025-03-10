import { createContext, ReactNode, useState } from "react";
interface GitProviderProps {
  children: ReactNode;
}

interface GitContextProviderContextData {
  gitUser: object;
  issues: never[];
  issue: object;
}

const GitContextProviderContext = createContext<GitContextProviderContextData>(
  {} as GitContextProviderContextData
);

export const GitProvider = ({ children }: GitProviderProps) => {
  const [gitUser] = useState({});
  const [issues] = useState([]);
  const [issue] = useState({});
  return (
    <GitContextProviderContext.Provider value={{ gitUser, issue, issues }}>
      {children}
    </GitContextProviderContext.Provider>
  );
};
