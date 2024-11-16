import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFeatures, getAllModels } from "../../Services/api";

export const fetchStaticData = createAsyncThunk("staticData/fetchStaticData", async () => {
  const [features, models] = await Promise.all([getAllFeatures(), getAllModels()]);
  return { features, models };
});

const staticDataSlice = createSlice({
  name: "staticData",
  initialState: {
    features: [],
    models: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaticData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStaticData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.features = action.payload.features;
        state.models = action.payload.models;
      })
      .addCase(fetchStaticData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default staticDataSlice.reducer;
