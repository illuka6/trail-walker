import React from "react";
import { useSelector } from "react-redux";

const TrailWeather = ({ trailId }) => {
  const weatherData = useSelector((state) => state.weatherData);
  const weather = weatherData[trailId]?.description || "未知天氣";

  // 根據 weather.description 獲取對應圖片
  const weatherIcon = getWeatherIcon(weather);

  return (
    <div className="trail-weather">
      <h3>步道天氣</h3>
      <img src={weatherIcon} alt={weather} />
      <p>{weather}</p>
    </div>
  );
};

export default TrailWeather;
