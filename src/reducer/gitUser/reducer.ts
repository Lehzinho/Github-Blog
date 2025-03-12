/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from "./action";
import { produce } from "immer";

interface GitUserState {
  selectedUser: string;
  selectedRepo: string;
  repoNames: string[];
}
export const gitUserReducer = (state: GitUserState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USUARIO: {
      return produce(state, (draft) => {
        draft.selectedUser = action.payload.usuario;
      });
    }
    case ActionTypes.SET_SELECTED_REPO: {
      return produce(state, (draft) => {
        draft.selectedRepo = action.payload.repo;
      });
    }
    case ActionTypes.SET_REPOS: {
      return produce(state, (draft) => {
        draft.repoNames = [...action.payload.repoArray];
      });
    }
    default:
      return state;
  }
};
