import { Link } from "react-router-dom";
import * as S from "./_styles";
import { NewInfoBar } from "./NewInfoBar";
import LinkUrl from "@/assets/link.svg?react";
import LeftArrow from "@/assets/leftArrow.svg?react";

interface IssueInfoProps {
  title: string;
  login: string;
  comments: number;
  created_at: string;
  url: string;
}

export const IssueInfo = ({
  comments,
  created_at,
  title,
  url,
  login,
}: IssueInfoProps) => {
  return (
    <S.IssueInfo>
      <div className="navContainer">
        <Link to="/">
          <LeftArrow />
          voltar
        </Link>
        <Link to={url} target="_blank">
          ver no github
          <LinkUrl />
        </Link>
      </div>
      <h1>{title}</h1>
      <NewInfoBar comments={comments} created_at={created_at} login={login} />
    </S.IssueInfo>
  );
};
