import { useMemo } from "react";
import { api } from "./axios";

export const useUserApi = () => {
  async function getUserByEmail(email) {
    try {
      const response = await api.get(`/users/${email}`);

      return response.data;
    } catch (e) {
      alert("Erro, tente novamente mais tarde!");
    }
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

  async function adicionarRespostasQuiz(email, data) {
    try {
      const response = await api.post(`/users/${email}`, data);

      return response;
    } catch (e) {
      alert("Erro no servidor, tente novamente mais tarde.");
    }
  }

  async function editarUsuario(data) {
    try {
      const response = await api.put(`/users/${data.email}`, data);

      return response;
    } catch (e) {
      alert("Erro no servidor, tente novamente mais tarde.");
    }
  }

  return useMemo(
    () => ({
      getUserByEmail,
      createUser,
      login,
      adicionarRespostasQuiz,
      editarUsuario,
    }),
    []
  );
};
