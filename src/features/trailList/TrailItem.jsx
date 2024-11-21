import Button from "../../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  showLoginModule,
  hideLoginModule,
  showForecast,
  hideForecast,
} from "../../ui/uiSlice";
import DeleteItem from "../favList/DeleteItem";
import { addItem, deleteItem } from "../favList/favTrailSlice";
import { useState } from "react";

function TrailItem({ trail }) {
  const dispatch = useDispatch();

  const { weatherData, weatherForecastData } = useSelector(
    (state) => state.trail,
  );
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isForecastWeatherVisible = useSelector(
    (state) => state.ui.isForecastWeatherVisible,
  );

  // const getIsInFavList = (id) =>
  //   useSelector(
  //     (state) =>
  //       (state.favTrail.favTrails &&
  //         state.favTrail.favTrails?.some((item) => item.TRAILID) === id) ||
  //       false,
  //   );
  const isInFavList = useSelector(
    (state) =>
      state.favTrail?.favTrails?.some(
        (favTrail) => favTrail.TRAILID === trail.TRAILID,
      ) || false,
  );
  const [isShowMemo, setIsShowMemo] = useState(false);
  const [isShowForecast, setIsShowForecast] = useState(false);
  function handleAddFavList() {
    if (!isAuthenticated) {
      dispatch(showLoginModule());
    } else {
      const newTrail = {
        TRAILID: trail.TRAILID,
      };
      dispatch(addItem(newTrail));
      alert("收藏成功！");
    }
  }
  function handleForecastWeather() {
    if (!isAuthenticated) {
      dispatch(showLoginModule());
    } else {
      dispatch(showForecast());
    }
  }
  function handleDeleteFavList() {
    dispatch(deleteItem(trail.TRAILID));
    alert("取消收藏！");
  }

  return (
    <div className="center m-auto my-1 max-w-screen-md rounded-md border-b bg-stone-50 bg-opacity-75 p-4">
      <h2 className="font-bold">{trail.TR_CNAME}</h2>
      <div className="flex">
        <div className="w-3/6 grid-flow-col">
          <p>長度: {trail.TR_LENGTH}</p>
          <p>位置: {trail.TR_POSITION}</p>
          <p>海拔: {trail.TR_ALT} 公尺</p>
          <p>特色: {trail.TR_SPECIAL}</p>
        </div>

        <div className="w-2/6">
          <p>難度：{trail.TR_DIF_CLASS}</p>
          <p>適宜季節：{trail.TR_BEST_SEASON}</p>
        </div>
        <div className="w-1/6">
          <p>氣溫: {weatherData[trail.TRAILID].main.temp}度</p>
          <p>天氣：{weatherData[trail.TRAILID].weather[0].description}</p>
          <p>天氣：{weatherData[trail.TRAILID].weather[0].main}</p>
        </div>
      </div>

      {isInFavList ? (
        <Button type="primary" onClick={() => handleDeleteFavList()}>
          取消收藏
        </Button>
      ) : (
        <Button type="primary" onClick={() => handleAddFavList()}>
          加入收藏
        </Button>
      )}

      <Button type="primary" onClick={() => handleForecastWeather()}>
        查詢未來五日天氣
      </Button>
      {isForecastWeatherVisible ? (
        <div>
          {" "}
          <Button
            type="small"
            onClick={() => {
              dispatch(hideForecast());
            }}
          >
            隱藏未來天氣
          </Button>
          {weatherForecastData[trail.TRAILID].list.map((data) => (
            <div key={data.dt} className="w-30 flex">
              <p>天氣： {data.weather[0].description}</p>
              <p>時間：{data.dt_txt}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {isAuthenticated ? (
        <Button onClick={() => setIsShowMemo(!isShowMemo)} type="small">
          {" "}
          備註{" "}
        </Button>
      ) : (
        ""
      )}
      {isShowMemo ? <div>備註欄位</div> : ""}
    </div>
  );
}

export default TrailItem;
