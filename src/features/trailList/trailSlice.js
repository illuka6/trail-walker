import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather, fetchWeatherForecast } from "../../services/apiWeather";

// 異步獲取資料
// export const fetchTrails = createAsyncThunk("trail/fetchTrails", async () => {
//   const response = await fetch(TRAIL_API_URL);
//   const data = await response.json();
//   return data;
// });

const initialState = {
  trails: [], // 全部步道資料
  filters: {
    searchName: "",
    searchPosition: "", //依縣市篩選
  },
  weatherData: {},
  weatherForecastData: {},
  state: "idle",
};

const trailSlice = createSlice({
  name: "trail",
  initialState,
  reducers: {
    setSearchName(state, action) {
      state.filters.searchName = action.payload;
    },
    setSearchPosition(state, action) {
      state.filters.searchPosition = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchTrails.fulfilled, (state, action) => {
      //   state.trails = action.payload;
      // })
      .addCase(fetchWeather.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const { trailId, weatherInfo } = action.payload;
        if (!trailId) {
          console.error("trailId is undefined in action.payload");
          return;
        }
        state.weatherData[trailId] = weatherInfo; // 以 trailId 為 key 儲存天氣資料
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
        const { trailId, weatherInfo } = action.payload;
        if (!trailId) {
          console.error("trailId is undefined in action.payload");
          return;
        }
        state.weatherForecastData[trailId] = weatherInfo; // 以 trailId 為 key 儲存天氣資料
      });
  },
});

// export const { addItem, deleteItem, clearList } = trailSlice.actions;
export const { setSearchName, setSearchPosition } = trailSlice.actions;

export default trailSlice.reducer;
