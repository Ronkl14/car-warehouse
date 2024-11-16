import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEmployees } from "../../Services/api.js"

export const fetchEmployees = createAsyncThunk("employees/fetchEmployees", async () => {
  const response = await getAllEmployees();
  return response;
});

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default employeesSlice.reducer;
