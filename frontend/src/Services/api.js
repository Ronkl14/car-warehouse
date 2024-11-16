import axios from "axios";

const END_POINT = "http://localhost:5000/api";

export async function getAllCars() {
  try {
    const response = await axios.get(`${END_POINT}/cars`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAllModels() {
  try {
    const response = await axios.get(`${END_POINT}/models`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAllFeatures() {
  try {
    const response = await axios.get(`${END_POINT}/features`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}