import { useContextSelector } from "use-context-selector";
import * as S from "./_styles";
import { GitContextProviderContext } from "@/contexts/GitContext";
import { KeyboardEvent, useState } from "react";
export const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const handleGetIssues = useContextSelector(
    GitContextProviderContext,
    (context) => context.handleGetIssues
  );

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGetIssues(inputValue);
      setInputValue("");
    }
  };
  return (
    <S.SearchComponent>
      <div>
        <p>Publicações</p>
        <p>6 publicações</p>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={handleSearch}
      />
    </S.SearchComponent>
  );
};
