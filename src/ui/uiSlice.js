// uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModuleVisible: false,
  isForecastWeatherVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoginModule: (state) => {
      state.isLoginModuleVisible = true;
    },
    hideLoginModule: (state) => {
      state.isLoginModuleVisible = false;
    },
    showForecast: (state) => {
      state.isForecastWeatherVisible = true;
    },
    hideForecast: (state) => {
      state.isForecastWeatherVisible = false;
    },
  },
});

export const { showLoginModule, hideLoginModule, showForecast, hideForecast } =
  uiSlice.actions;

export default uiSlice.reducer;
