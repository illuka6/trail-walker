import React from "react";
import { useSelector } from "react-redux";
import { getWeatherIcon } from "./weatherIcon";

const TrailWeather = ({ TRAILID }) => {
  const weatherData = useSelector((state) => state.trail.weatherData);
  const weather = weatherData[TRAILID]?.weather[0].description || "未知天氣";

  // 根據 weather.description 獲取對應圖片
  const weatherIcon = getWeatherIcon(weather);

  return (
    <div className="w-3/6 rounded-lg border-2 p-4">
      <div className="flex">
        <div className="w-1/2">
          <div className="flex items-baseline">
            <div className="flex w-fit">
              <p className="text-3xl">{weatherData[TRAILID].main.temp}</p>
              <p>°C </p>
            </div>
            <p className="ml-5">
              {weatherData[TRAILID].weather[0].description}
            </p>{" "}
          </div>
          <div>
            <p>風速: {weatherData[TRAILID].wind.speed}m/s</p>
            <p>濕度: {weatherData[TRAILID].main.humidity}%</p>
            <p>天氣：{weatherData[TRAILID].weather[0].main}</p>
          </div>
        </div>
        <img
          className="h-28 w-1/2 bg-green-100"
          src={weatherIcon}
          alt={weather}
        />
      </div>{" "}
    </div>
  );
};

export default TrailWeather;
