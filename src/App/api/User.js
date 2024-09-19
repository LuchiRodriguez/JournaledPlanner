import axios from "axios";
import { setAuth, instance } from "./api";

// CREATE
export const createUser = async (obj) => {
  try {
    const response = await instance.post("/user/", obj);
    return response.data;
  } catch (error) {
    console.error("Error creando usuario:", error);
  }
};

// LOGIN
export const postUser = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/journaled-planner/login",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "basic " + btoa(email + ":" + password),
        },
      }
    );
    setAuth(email, password);
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.error("Error de autenticación:", response.data);
    }
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Email or password incorrect");
    }
    // Re-throw any other errors
    throw error;
  }
};
