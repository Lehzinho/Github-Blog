import GitImg from "@/assets/github.svg?react";
import * as S from "./_styles";
import { NewInformation } from "./NewInformation";
export const UserInfo = () => {
  return (
    <S.UserInfo>
      <img src="https://avatars.githubusercontent.com/u/99737712?v=4" />
      <div>
        <div className="title">
          <p>Cameron Williamson</p>
          <GitImg />
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <NewInformation />
      </div>
    </S.UserInfo>
  );
};
