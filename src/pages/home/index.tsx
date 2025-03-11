import { UserInfo } from "./components/UserInfo";
import * as S from "./_styles";
import { Publicacoes } from "./components/Publicacoes";

export const Home = () => {
  return (
    <S.Home>
      <UserInfo />
      <Publicacoes />
    </S.Home>
  );
};
