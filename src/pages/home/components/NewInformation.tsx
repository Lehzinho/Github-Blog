import * as S from "./_styles";
import Git from "@/assets/iconGit.svg?react";
import Issue from "@/assets/iconIssue.svg?react";
import User from "@/assets/iconUser.svg?react";

export const NewInformation = () => {
  return (
    <S.NewInformation>
      <div>
        <Git />
        <p>cameronwll</p>
      </div>
      <div>
        <Issue />
        <p>Rocketseat</p>
      </div>
      <div>
        <User />
        <p>32 seguidores</p>
      </div>
    </S.NewInformation>
  );
};
