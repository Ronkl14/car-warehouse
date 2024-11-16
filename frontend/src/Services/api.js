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

export async function createCar(carData) {
  try {
    const response = await axios.post(`${END_POINT}/cars`, carData);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
  }
}

export async function updateCar(carData, id) {
  try {
    const response = await axios.put(`${END_POINT}/cars/${id}`, carData);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

export async function deleteCar(id) {
  try {
    const response = await axios.delete(`${END_POINT}/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

export async function createAccident(accidentData) {
  try {
    const response = await axios.post(`${END_POINT}/accidents`, accidentData);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
  }
}
