import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "lodash";
import TrailItem from "./TrailItem";

function TrailList({ sortedTrails }) {
  const dispatch = useDispatch();

  //   const fetchWeatherThrottled = throttle((dispatch, lat, lon, trailId) => {
  //     dispatch(fetchWeather(lat, lon, trailId));
  //   }, 1000); // 每 1000ms 最多執行一次
  //   useEffect(() => {
  //     trails.forEach((trail) => {
  //       if (!weatherData[trail.id]) {
  //         fetchWeatherThrottled(
  //           dispatch,
  //           trail.TR_ENTRANCE.x,
  //           trail.TR_ENTRANCE.y,
  //           trail.id,
  //         );
  //       }
  //     });
  //   }, [trails, weatherData, dispatch]);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {sortedTrails.map((trail) => (
        <TrailItem trail={trail} key={trail.TRAILID} />
      ))}
    </ul>
  );
}

export default TrailList;
