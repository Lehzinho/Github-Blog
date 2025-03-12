import { formatDistanceToNow } from "date-fns";
import Git from "@/assets/iconGit.svg?react";
import Calendar from "@/assets/iconCalendar.svg?react";
import Comentario from "@/assets/iconComentario.svg?react";

import * as S from "./_styles";
import { ptBR } from "date-fns/locale";

interface NewInfoBarProps {
  comments: number;
  created_at: string;
  login: string;
}

export const NewInfoBar = ({
  comments,
  created_at,
  login,
}: NewInfoBarProps) => {
  return (
    <S.NewInfoBar>
      <p>
        <Git />
        {login}
      </p>
      <p>
        <Calendar />
        {formatDistanceToNow(new Date(created_at), {
          addSuffix: true,
          locale: ptBR,
        }).replace("cerca de ", "")}
      </p>
      <p>
        <Comentario />
        {`${comments} ${comments > 1 ? "comentários" : "comentário"}`}
      </p>
    </S.NewInfoBar>
  );
};
