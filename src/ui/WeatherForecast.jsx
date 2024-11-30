import { useSelector } from "react-redux";
import { toPercentage } from "../utils/helpers";

function WeatherForecast({ TRAILID }) {
  const weatherData = useSelector(
    (state) => state.trail.weatherForecastData[TRAILID].list || [],
  );
  const filteredData = filterWeatherData(weatherData);

  return (
    <div className="weather-forecast flex justify-evenly">
      {filteredData.map((day, index) => (
        <>
          <div className="">
            <h3 className="text-green1-600 flex w-full items-center justify-center">
              {formatDate(day.date)} {formatDayOfWeek(day.date)}
            </h3>
            <div key={index} className="flex p-2">
              <div className="day h-30 bg-green1-100 rounded-l-md bg-opacity-5 p-2 text-sm">
                {day.morning ? (
                  <>
                    {/* <p>天氣：{day.morning.weather[0].description}</p> */}
                    <h4>06:00</h4>
                    <img
                      className="h-10 w-10"
                      src={`/img/icon-weather/${day.morning.weather[0].icon}.svg`}
                      alt={day.morning.weather[0].description}
                    />

                    <div className="flex w-full items-center justify-center">
                      {/* {Math.round(day.morning.main.temp_min)}°/ */}
                      {Math.round(day.morning.main.temp_max)}°
                    </div>
                    <div className="flex">
                      <img
                        className="h-4 w-4"
                        src="/img/icon-weather/pop.svg"
                        alt="pop"
                      />
                      <p>{toPercentage(day.morning.pop)}</p>
                    </div>
                  </>
                ) : (
                  <div className=""></div>
                )}
              </div>
              <div className="night h-30 border-1 bg-green1-900 rounded-r-md bg-opacity-65 p-2 text-sm text-slate-50">
                {day.evening ? (
                  <>
                    {/* <p>天氣：{day.morning.weather[0].description}</p> */}
                    <h4>18:00</h4>
                    <img
                      className="h-10 w-10"
                      src={`/img/icon-weather/${day.evening.weather[0].icon}.svg`}
                      alt={day.evening.weather[0].description}
                    />
                    <div className="flex w-full items-center justify-center">
                      {/* {Math.round(day.morning.main.temp_min)}°/ */}
                      {Math.round(day.evening.main.temp_max)}°
                    </div>

                    <div className="flex">
                      <img
                        className="h-4 w-4"
                        src="/img/icon-weather/pop.svg"
                        alt="pop"
                      />
                      <p>{toPercentage(day.evening.pop)}</p>
                    </div>
                  </>
                ) : (
                  <div className=""></div>
                  // <p>尚無資料</p>
                )}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default WeatherForecast;

function filterWeatherData(list) {
  function getDateTimeParts(dtTxt) {
    const dateTimeParts = dtTxt.split(" ");
    return {
      date: dateTimeParts[0], // 日期部分 YYYY-MM-DD
      time: dateTimeParts[1].slice(0, 5), // 時間部分 HH:mm
    };
  }

  // 初始化資料結構
  const groupedByDate = {};

  // 分組資料
  list.forEach((item) => {
    const { date, time } = getDateTimeParts(item.dt_txt);

    // 僅處理早上 06:00 和晚上 18:00 的資料
    if (time === "06:00" || time === "18:00") {
      if (!groupedByDate[date]) {
        groupedByDate[date] = { morning: null, evening: null };
      }
      if (time === "06:00") groupedByDate[date].morning = item;
      if (time === "18:00") groupedByDate[date].evening = item;
    }
  });

  // 過濾掉無效日期（早上和晚上資料都為 null）
  return Object.keys(groupedByDate)
    .filter(
      (date) => groupedByDate[date].morning || groupedByDate[date].evening,
    )
    .map((date) => ({
      date,
      morning: groupedByDate[date].morning,
      evening: groupedByDate[date].evening,
    }));
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // 月份從 0 開始，需加 1
  const day = date.getDate();

  return `${month}/${day}`;
}

function formatDayOfWeek(dateString) {
  const daysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
}
