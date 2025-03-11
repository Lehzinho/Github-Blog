import * as S from "./_styles";
import { SearchComponent } from "./SearchComponent";
import { IssueCard } from "./IssueCard";

const tempCardArray = [
  {
    number: "5",
    title: "JavaScript data types and data structures",
    description:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
    time: "Há 1 dia",
  },
  {
    number: "5",
    title: "JavaScript data types and data structures",
    description:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
    time: "Há 1 dia",
  },
  {
    number: "5",
    title: "JavaScript data types and data structures",
    description:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
    time: "Há 1 dia",
  },
];

export const Publicacoes = () => {
  return (
    <S.Publicacoes>
      <SearchComponent />
      <div className="cardContainer">
        {tempCardArray.map((_card, index) => (
          <IssueCard key={index} />
        ))}
      </div>
    </S.Publicacoes>
  );
};
