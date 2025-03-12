/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gitIssuesModel } from "@/models/gitIssuesModel";
import { gitUserModel } from "@/models/gitUserModel";
import {
  setRepositoriosAction,
  setSelectedRepo,
  setUsuarioAction,
} from "@/reducer/gitUser/action";
import { gitUserReducer } from "@/reducer/gitUser/reducer";
import {
  getIssues,
  getRepo,
  getRepoIssue,
  getUser,
} from "@/services/gitServices";
import { ReactNode, useEffect, useReducer, useState } from "react";
import { createContext } from "use-context-selector";
interface GitProviderProps {
  children: ReactNode;
}

interface GitUserState {
  selectedUser: string;
  selectedRepo: string;
  repoNames: string[];
}

interface GitContextProviderContextData {
  gitUserInfo: GitUserState;
  issue: gitIssuesModel;
  loadingUser: boolean;
  gitUser: gitUserModel;
  issues: gitIssuesModel[];
  handleSetUsuario: (usuario: string) => void;
  handleGetIssues: (q?: string) => Promise<void>;
  handleGetUserRepo: (user: string) => Promise<void>;
  handleSetSelectedRepositorio: (repo: string) => void;
  handleGetRepoIssue: (number: string) => Promise<void>;
}

export const GitContextProviderContext =
  createContext<GitContextProviderContextData>(
    {} as GitContextProviderContextData
  );

export const GitProvider = ({ children }: GitProviderProps) => {
  const [gitUserInfo, dispatch] = useReducer(gitUserReducer, {
    selectedRepo: "Github-Blog",
    selectedUser: "Lehzinho",
    repoNames: [],
  });

  const [gitUser, setGitUser] = useState<gitUserModel>({} as gitUserModel);
  const [issues, setIssues] = useState<gitIssuesModel[]>([]);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [issue, setIssue] = useState<gitIssuesModel>({} as gitIssuesModel);

  const handleSetSelectedRepositorio = (repo: string) => {
    dispatch(setSelectedRepo(repo));
  };

  const handleGetUserRepo = async (user: string) => {
    handleGetUser(user);
    const { data } = await getRepo(user);
    const repoNamesArray = data.map((item: { name: string }) => item.name);
    dispatch(setRepositoriosAction(repoNamesArray));
  };

  const handleSetUsuario = (usuario: string) => {
    dispatch(setUsuarioAction(usuario));
  };

  const handleGetUser = async (user: string) => {
    try {
      const { data } = await getUser(user);
      setGitUser({ ...data });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleGetIssues = async (q?: string) => {
    try {
      const { data } = await getIssues(
        gitUserInfo.selectedUser,
        gitUserInfo.selectedRepo,
        q
      );
      setIssues([...data.items]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleGetRepoIssue = async (number: string) => {
    try {
      const { data } = await getRepoIssue(
        gitUserInfo.selectedUser,
        gitUserInfo.selectedRepo,
        number
      );
      setIssue({ ...data });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleGetUserInfo = async () => {
    setLoadingUser(true);
    try {
      await handleGetUser(gitUserInfo.selectedUser);
      await handleGetIssues();
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    handleGetUserRepo(gitUserInfo.selectedUser);
    handleGetUserInfo();
  }, []);

  useEffect(() => {
    handleGetIssues();
  }, [gitUserInfo.selectedRepo]);

  return (
    <GitContextProviderContext.Provider
      value={{
        issue,
        gitUserInfo,
        issues,
        gitUser,
        loadingUser,
        handleGetIssues,
        handleSetUsuario,
        handleGetUserRepo,
        handleGetRepoIssue,
        handleSetSelectedRepositorio,
      }}
    >
      {children}
    </GitContextProviderContext.Provider>
  );
};
