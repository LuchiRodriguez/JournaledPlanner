import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/journaled-planner",
});

export const setAuth = async (email, password) => {
  const token = btoa(`${email}:${password}`);
  instance.defaults.headers.common.Authorization = `basic ${token}`;
};
