import * as S from "./_styles";
import Git from "@/assets/iconGit.svg?react";
import Issue from "@/assets/iconIssue.svg?react";
import User from "@/assets/iconUser.svg?react";

interface NewInformationProps {
  login: string;
  company: string | undefined;
  followers: number;
}

export const NewInformation = ({
  company,
  login,
  followers,
}: NewInformationProps) => {
  return (
    <S.NewInformation>
      <div>
        <Git />
        <p>{login}</p>
      </div>
      <div>
        <Issue />
        <p>{company || "N/A"}</p>
      </div>
      <div>
        <User />
        <p>{followers} seguidores</p>
      </div>
    </S.NewInformation>
  );
};
