import { instance } from "./api";

// CREATE
export const createDay = async (obj) => {
  try {
    const response = await instance.post("/day/", obj);
    return response.data;
  } catch (error) {
    console.error("Error creando día:", error);
  }
};

// CONTENT
export const createDayContent = async (obj) => {
  try {
    const response = await instance.post("/day_content/", obj);
    return response.data;
  } catch (error) {
    console.error("Error creando contenido de día:", error);
  }
};
