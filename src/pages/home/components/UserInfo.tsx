import GitImg from "@/assets/link.svg?react";
import * as S from "./_styles";
import { NewInformation } from "./NewInformation";
import { useContextSelector } from "use-context-selector";
import { GitContextProviderContext } from "@/contexts/GitContext";
import { Link } from "react-router-dom";

export const UserInfo = () => {
  const { avatar_url, name, bio, company, followers, login, html_url } =
    useContextSelector(GitContextProviderContext, (context) => context.gitUser);

  return (
    <S.UserInfo>
      <img src={avatar_url} />
      <div>
        <div className="title">
          <p>{name}</p>
          <Link to={html_url} target="_blank">
            github <GitImg />
          </Link>
        </div>
        <p>{bio}</p>
        <NewInformation company={company} login={login} followers={followers} />
      </div>
    </S.UserInfo>
  );
};
