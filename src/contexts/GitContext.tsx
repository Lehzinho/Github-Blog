import { gitIssuesModel } from "@/models/gitIssuesModel";
import { gitUserModel } from "@/models/gitUserModel";
import { getIssues, getUser } from "@/services/gitServices";
import { createContext, ReactNode, useEffect, useState } from "react";
interface GitProviderProps {
  children: ReactNode;
}

interface GitContextProviderContextData {
  gitUser: gitUserModel;
  issues: gitIssuesModel[];
  issue: object;
}

const GitContextProviderContext = createContext<GitContextProviderContextData>(
  {} as GitContextProviderContextData
);

export const GitProvider = ({ children }: GitProviderProps) => {
  const [gitUser, setGitUser] = useState<gitUserModel>({} as gitUserModel);
  const [issues, setIssues] = useState<gitIssuesModel[]>([]);
  const [issue] = useState<gitIssuesModel>({} as gitIssuesModel);

  const handleGetUser = async () => {
    const { data } = await getUser("Lehzinho");
    setGitUser({ ...data });
  };

  const handleGetIssues = async (q?: string) => {
    const { data } = await getIssues("Lehzinho", "Github-Blog", q);
    setIssues([...data.items]);
  };

  useEffect(() => {
    handleGetUser();
    handleGetIssues();
  }, []);
  return (
    <GitContextProviderContext.Provider value={{ gitUser, issue, issues }}>
      {children}
    </GitContextProviderContext.Provider>
  );
};
