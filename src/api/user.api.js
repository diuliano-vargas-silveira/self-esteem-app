import { useMemo } from "react";
import { api } from "./axios";

export const useUserApi = () => {
  async function getUserByEmail(email) {
    const response = await api.get(`/users/${email}`);

    return response.data;
  }

  async function createUser(data) {
    const response = await api.post("/sing-up", data);

    return response;
  }

  async function login(data) {
    const response = await api.post("/login", data);

    return response;
  }

  return useMemo(
    () => ({
      getUserByEmail,
      createUser,
      login,
    }),
    []
  );
};
