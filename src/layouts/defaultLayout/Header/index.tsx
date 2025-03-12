import { useContextSelector } from "use-context-selector";
import * as S from "./_styles";
import { GitContextProviderContext } from "@/contexts/GitContext";
import { KeyboardEvent } from "react";

export const Header = () => {
  const {
    gitUserInfo,
    handleSetUsuario,
    handleGetUserRepo,
    handleSetSelectedRepositorio,
  } = useContextSelector(GitContextProviderContext, (context) => {
    return context;
  });
  const { repoNames, selectedRepo, selectedUser } = gitUserInfo;
  const handleGetUsuario = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGetUserRepo(e.currentTarget.value);
    }
  };
  return (
    <S.Header>
      <div>
        <label>
          <p>Git Usuario</p>
          <input
            value={selectedUser}
            onKeyDown={handleGetUsuario}
            onBlur={(e) => handleGetUserRepo(e.currentTarget.value)}
            onChange={(e) => handleSetUsuario(e.target.value)}
          />
        </label>
        <label>
          <p>Repositorio</p>
          <select
            disabled={repoNames.length <= 0}
            value={selectedRepo}
            onChange={(e) =>
              handleSetSelectedRepositorio(e.currentTarget.value)
            }
          >
            {repoNames.length <= 0 && (
              <option>Nenhum Repositorio encontrado</option>
            )}
            {repoNames.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
    </S.Header>
  );
};
