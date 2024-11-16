import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import staticDataReducer from "./slices/staticDataSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    staticData: staticDataReducer,
  },
});
