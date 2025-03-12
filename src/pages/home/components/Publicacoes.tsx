import * as S from "./_styles";
import { SearchComponent } from "./SearchComponent";
import { IssueCard } from "./IssueCard";
import { useContextSelector } from "use-context-selector";
import { GitContextProviderContext } from "@/contexts/GitContext";

export const Publicacoes = () => {
  const issues = useContextSelector(
    GitContextProviderContext,
    (context) => context.issues
  );
  return (
    <S.Publicacoes>
      <SearchComponent />
      <div className="cardContainer">
        {issues.map((card) => (
          <IssueCard
            key={card.created_at}
            body={card.body}
            created_at={card.created_at}
            number={card.number}
            title={card.title}
          />
        ))}
      </div>
    </S.Publicacoes>
  );
};
