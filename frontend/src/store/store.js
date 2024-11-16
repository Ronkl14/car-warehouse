import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import staticDataReducer from "./slices/staticDataSlice";
import uiReducer from "./slices/uiSlice";
import employeesReducer from "./slices/employeesSlice"

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    staticData: staticDataReducer,
    ui: uiReducer,
    employees: employeesReducer
  },
});
