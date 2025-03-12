/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gitIssuesModel } from "@/models/gitIssuesModel";
import { gitUserModel } from "@/models/gitUserModel";
import { getIssues, getRepoIssue, getUser } from "@/services/gitServices";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
interface GitProviderProps {
  children: ReactNode;
}

interface GitContextProviderContextData {
  issue: gitIssuesModel;
  loadingUser: boolean;
  gitUser: gitUserModel;
  issues: gitIssuesModel[];
  handleGetIssues: (q?: string) => Promise<void>;
  handleGetRepoIssue: (number: string) => Promise<void>;
}

export const GitContextProviderContext =
  createContext<GitContextProviderContextData>(
    {} as GitContextProviderContextData
  );

export const GitProvider = ({ children }: GitProviderProps) => {
  const [gitUser, setGitUser] = useState<gitUserModel>({} as gitUserModel);
  const [issues, setIssues] = useState<gitIssuesModel[]>([]);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [issue, setIssue] = useState<gitIssuesModel>({} as gitIssuesModel);

  const handleGetUser = async () => {
    try {
      const { data } = await getUser("Lehzinho");
      setGitUser({ ...data });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleGetIssues = async (q?: string) => {
    try {
      const { data } = await getIssues("Lehzinho", "Github-Blog", q);
      setIssues([...data.items]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleGetRepoIssue = async (number: string) => {
    try {
      const { data } = await getRepoIssue("Lehzinho", "Github-Blog", number);
      setIssue({ ...data });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleGetUserInfo = async () => {
    setLoadingUser(true);
    try {
      await handleGetUser();
      await handleGetIssues();
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <GitContextProviderContext.Provider
      value={{
        gitUser,
        issue,
        issues,
        loadingUser,
        handleGetIssues,
        handleGetRepoIssue,
      }}
    >
      {children}
    </GitContextProviderContext.Provider>
  );
};
