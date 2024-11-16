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

