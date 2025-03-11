/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from "@/config/axios";

export const getUser = async (user: string) => {
  try {
    return api.get(`/users/${user}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getIssues = async (
  user: string,
  repo: string,
  q: string | undefined = ""
) => {
  try {
    return api.get(`/search/issues?q=${q}repo:${user}/${repo}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
