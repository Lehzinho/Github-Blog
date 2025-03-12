/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import * as S from "./_styles";
import { IssueInfo } from "./components/IssueInfo";
import { useContextSelector } from "use-context-selector";
import { GitContextProviderContext } from "@/contexts/GitContext";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Post = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const { handleGetRepoIssue, issue } = useContextSelector(
    GitContextProviderContext,
    (context) => {
      return context;
    }
  );

  useEffect(() => {
    const handleGetIssue = async () => {
      setLoading(true);
      try {
        if (id === undefined)
          throw new Error("Parametro '/:id' não encontrado ou undefined");

        await handleGetRepoIssue(id);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    handleGetIssue();
  }, []);

  if (loading || !issue.id) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div>
        <h1>{errorMessage}</h1>
      </div>
    );
  }

  const {
    comments,
    body,
    created_at,
    title,
    html_url,
    user: { login },
  } = issue;
  return (
    <S.Post>
      <IssueInfo
        comments={comments}
        created_at={created_at}
        title={title}
        url={html_url}
        login={login}
      />
      <div className="contentContainder">
        <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
      </div>
    </S.Post>
  );
};
