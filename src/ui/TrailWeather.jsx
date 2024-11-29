import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherIcon } from "./weatherIcon";
import { hideForecast, showForecast, showLoginModule } from "./uiSlice";
import Button from "./Button";

const TrailWeather = ({ TRAILID }) => {
  const weatherData = useSelector((state) => state.trail.weatherData);
  const weather = weatherData[TRAILID]?.weather[0].description || "未知天氣";
  const iconCode = weatherData[TRAILID]?.weather[0].icon;
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isForecastWeatherVisible = useSelector(
    (state) => state.ui.isForecastWeatherVisible,
  );

  function handleForecastWeather() {
    if (!isAuthenticated) {
      dispatch(showLoginModule());
    } else {
      dispatch(showForecast());
    }
  }
  return (
    <div className="border-1 bg-green1-100 w-3/6 rounded-lg bg-opacity-5 p-4">
      <div className="flex">
        <img
          className="h-32 w-2/5"
          src={`/img/icon-weather/${iconCode}.svg`}
          alt={weather}
        />
        <div className="w-3/5">
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
            <div className="my-2 flex">
              <img
                className="h-6 w-6"
                src="/img/icon-weather/speed.svg"
                alt="humidity"
              />
              <p>風速: {weatherData[TRAILID].wind.speed}m/s</p>
            </div>

            <div className="flex">
              <img
                className="h-6 w-6"
                src="/img/icon-weather/humidity.svg"
                alt="humidity"
              />
              <p>濕度: {weatherData[TRAILID].main.humidity}%</p>
            </div>
            {/* <p>天氣：{weatherData[TRAILID].weather[0].main}</p> */}
          </div>
        </div>
      </div>{" "}
      <div className="flex w-full items-center justify-end">
        {isForecastWeatherVisible ? (
          <Button
            type="small"
            onClick={() => {
              dispatch(hideForecast());
            }}
          >
            隱藏未來天氣
          </Button>
        ) : (
          <Button type="round" onClick={() => handleForecastWeather()}>
            查詢未來五日天氣
          </Button>
        )}
      </div>
    </div>
  );
};

export default TrailWeather;
