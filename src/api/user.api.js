import { useMemo } from "react";
import { api } from "./axios";

export const useUserApi = () => {
  async function getUserByEmail(email) {
    const response = await api.get(`/users/${email}`);

    return response.data;
  }

  async function createUser(data) {
    try {
      const response = await api.post("/sign-up", data);

      return response;
    } catch (e) {
      alert("Erro, tente novamente mais tarde!");
    }
  }

  async function login(data) {
    try {
      const response = await api.post("/login", data);

      return response;
    } catch (e) {
      alert("Usuário ou senha inválidos!");
    }
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
