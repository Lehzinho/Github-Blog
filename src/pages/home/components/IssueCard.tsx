import { useNavigate } from "react-router-dom";
import * as S from "./_styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
interface IssueCardProps {
  title: string;
  body: string;
  number: number;
  created_at: string;
}

export const IssueCard = ({
  body,
  created_at,
  number,
  title,
}: IssueCardProps) => {
  const navigate = useNavigate();
  return (
    <S.IssueCard onClick={() => navigate(`/post/${number}`)}>
      <div>
        <p>{title}</p>{" "}
        <p>
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          }).replace("cerca de ", "")}
        </p>
      </div>
      <p>{body}</p>
    </S.IssueCard>
  );
};
