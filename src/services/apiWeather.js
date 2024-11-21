import { createAsyncThunk } from "@reduxjs/toolkit";

// const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
// console.log("API Key: ", apiKey);
// console.log(import.meta.env);

const WEATHER_FORECAST_API_URL =
  "https://api.openweathermap.org/data/2.5/forecast";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

//https://api.openweathermap.org/data/2.5/weather?lat=24.018661761721184&lon=121.57659596623343&appid=ff5fcace7545789a0c64e858c89e6c0d&units=metric&lang=zh_cn
//https://api.openweathermap.org/data/2.5/forecast?lat=24.018661761721184&lon=121.57659596623343&appid=ff5fcace7545789a0c64e858c89e6c0d&units=metric&lang=zh_cn
export const fetchWeatherForecast = createAsyncThunk(
  "trail/fetchForeWeather",
  async ({ lat, lon, trailId }) => {
    const response = await fetch(
      `${WEATHER_FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=zh_tw`,
    );

    if (!response.ok) {
      throw new Error(`請求失敗，HTTP 狀態碼: ${response.status}`);
    }

    const data = await response.json();

    return { trailId, weatherInfo: data }; // 回傳 trailId 及對應的天氣資訊
  },
);

export const fetchWeather = createAsyncThunk(
  "trail/fetchWeather",
  async ({ lat, lon, trailId }) => {
    const response = await fetch(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=zh_tw`, // 使用攝氏單位
    );

    if (!response.ok) {
      throw new Error(`請求失敗，HTTP 狀態碼: ${response.status}`);
    }

    const data = await response.json();

    return { trailId, weatherInfo: data }; // 回傳 trailId 及對應的天氣資訊
  },
);
