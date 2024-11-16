import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import staticDataReducer from "./slices/staticDataSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    staticData: staticDataReducer,
    ui: uiReducer,
  },
});
