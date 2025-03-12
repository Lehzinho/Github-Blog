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
    return api.get(`/search/issues?q=${q} repo:${user}/${repo}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getRepoIssue = async (
  user: string,
  repo: string,
  number: string
) => {
  try {
    return api.get(`/repos/${user}/${repo}/issues/${number}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRepo = async (user: string) => {
  try {
    return api.get(`/users/${user}/repos`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
