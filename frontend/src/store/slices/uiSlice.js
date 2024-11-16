import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    selectedCar: null,
    modals: {
      showAccidentModal: false,
      showCreateCarModal: false,
      showCreateAccidentModal: false,
    },
  },
  reducers: {
    setSelectedCar(state, action) {
      state.selectedCar = action.payload;
    },
    showModal(state, action) {
      state.modals[action.payload] = true;
    },
    hideModal(state, action) {
      state.modals[action.payload] = false;
    },
  },
});

export const { setSelectedCar, showModal, hideModal } = uiSlice.actions;
export default uiSlice.reducer;
