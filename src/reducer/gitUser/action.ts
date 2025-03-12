export enum ActionTypes {
  SET_USUARIO = "SET_USUARIO",
  SET_REPOS = "SET_REPOS",
  SET_SELECTED_REPO = "SET_SELECTED_REPO",
}

export const setUsuarioAction = (usuario: string) => {
  return { type: ActionTypes.SET_USUARIO, payload: { usuario } };
};
export const setSelectedRepo = (repo: string) => {
  return { type: ActionTypes.SET_SELECTED_REPO, payload: { repo } };
};

export const setRepositoriosAction = (repoArray: string[]) => {
  return { type: ActionTypes.SET_REPOS, payload: { repoArray } };
};
