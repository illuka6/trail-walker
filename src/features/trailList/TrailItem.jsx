import Button from "../../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  showLoginModule,
  hideLoginModule,
  showForecast,
  hideForecast,
} from "../../ui/uiSlice";
import { addItem, deleteItem } from "../favList/favTrailSlice";
import { useState } from "react";
import Difficulty from "../../ui/Difficulty";
import TrailWeather from "../../ui/TrailWeather";
import WeatherForecast from "../../ui/WeatherForecast";

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

  function handleAddFavList() {
    if (!isAuthenticated) {
      dispatch(showLoginModule());
    } else {
      const newTrail = {
        TRAILID: trail.TRAILID,
      };
      dispatch(addItem(newTrail));
      // alert("收藏成功！");
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
    // alert("取消收藏！");
  }
  function toPercentage(decimal) {
    return (decimal * 100).toFixed(0) + "%";
  }

  return (
    <div className="center m-auto my-1 max-w-screen-md rounded-md border-b bg-stone-50 bg-opacity-75 p-4">
      <div className="flex min-w-full items-center justify-between border-b-2">
        <h2 className="p-3 font-extrabold text-green1-600 md:text-lg">
          {trail.TR_CNAME}
        </h2>
        <div className="flex items-center">
          <div className="mr-1 flex w-48 items-baseline md:mr-20">
            {" "}
            <p className="mr-2 text-sm text-green1-500">難度</p>
            <Difficulty trail={trail} />
            {/* <p className="text-green1-500">{trail.TR_DIF_CLASS}</p> */}
          </div>
          {isInFavList ? (
            <Button type="dfav" onClick={() => handleDeleteFavList()}>
              <img
                className="absolute left-2 top-2.5 h-5 w-5"
                src="/public/img/icon/heart-pink.svg"
                alt=""
              />
            </Button>
          ) : (
            <Button type="afav" onClick={() => handleAddFavList()}>
              <img
                className="absolute left-2 top-2.5 h-5 w-5"
                src="/public/img/icon/heart-white.svg"
                alt=""
              />
            </Button>
          )}
        </div>
      </div>
      <div className="flex p-2">
        <div className="w-3/6 grid-flow-col">
          <div className="my-1 flex items-center">
            <img
              src="/public/img/icon/"
              alt="length-icon"
              className="mx-1 h-6 w-6"
            />
            <p>位置： {trail.TR_POSITION} </p>
          </div>
          <div className="my-1 flex items-center py-1">
            <img
              src="/public/img/icon/travel.png"
              alt="length-icon"
              className="m-1 h-6 w-6 p-[2px]"
            />
            <p>長度： {trail.TR_LENGTH} </p>
          </div>

          <div className="my-1 flex items-center">
            <img
              src="/public/img/icon/altitude.png"
              alt="length-icon"
              className="m-1 h-6 w-6"
            />
            <p>海拔： {trail.TR_ALT}公尺 </p>
          </div>
          <div className="my-1 flex items-center">
            <img
              src="/public/img/icon/hiker.png"
              alt="length-icon"
              className="m-1 h-6 w-6"
            />
            <p>日程： {trail.TR_TOUR} </p>
          </div>
          <div className="my-1 flex items-center">
            <img
              src="/public/img/icon/hiker.png"
              alt="length-icon"
              className="m-1 h-6 w-6"
            />
            <p>適宜季節：{trail.TR_BEST_SEASON}</p>
          </div>
          {/* <div className="my-1 flex items-center">
            <img src="/public/img/" alt="length-icon" className="m-1 h-6 w-6" />
            <p>特色 {trail.TR_SPECIAL} </p>
          </div> */}
        </div>

        {weatherData[trail.TRAILID] ? (
          <TrailWeather TRAILID={trail.TRAILID} />
        ) : (
          <div>正在載入天氣資料...</div>
        )}
      </div>
      {/* {isForecastWeatherVisible ? (
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
      )} */}
      {weatherForecastData[trail.TRAILID] && (
        <div>
          {isForecastWeatherVisible ? (
            <div>
              {" "}
              <WeatherForecast TRAILID={trail.TRAILID}></WeatherForecast>
              {/* {weatherForecastData[trail.TRAILID].list.map((data) => (
                <div key={data.dt} className="w-30 flex">
                  <p>時間：{data.dt_txt}</p>
                  <p>天氣： {data.weather[0].description}_</p>
                  <p>濕度：{data.main.humidity} ％</p>
                  <p>風速：{data.wind.speed}_m/s_</p>
                  <p>降雨率： {toPercentage(data.pop)} _</p>
                </div>
              ))} */}
            </div>
          ) : (
            ""
          )}{" "}
        </div>
      )}
      {/* {isAuthenticated ? (
        <Button onClick={() => setIsShowMemo(!isShowMemo)} type="text">
          {" "}
          備註🔽{" "}
        </Button>
      ) : (
        ""
      )}
      {isShowMemo ? (
        <div>
          特色：<p> {trail.TR_SPECIAL} </p>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default TrailItem;
