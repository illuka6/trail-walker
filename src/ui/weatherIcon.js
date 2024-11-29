// const weatherIcons = {
//   sunny: "/images/sunny.svg", // 晴天
//   cloudy: "/images/cloudy.svg", // 多雲
//   rain: "/images/rain.svg", // 下雨
//   snow: "/images/snow.svg", // 下雪
//   thunderstorm: "/images/thunderstorm.svg", // 雷雨
//   // 可以根據 API 返回的其他天氣描述繼續添加
// };

// export function getWeatherIcon(description) {
//   // 簡單地將 description 映射到對應的圖示
//   if (description.includes("晴")) return weatherIcons.sunny;
//   if (description.includes("雲")) return weatherIcons.cloudy;
//   if (description.includes("雨")) return weatherIcons.rain;
//   if (description.includes("雪")) return weatherIcons.snow;
//   if (description.includes("雷")) return weatherIcons.thunderstorm;

//   return "/images/default.svg"; // 預設圖示
// }
// const weatherIcons = {
//   01d: "/images/sunny.svg", // 晴天
//   02d: "/images/cloudy.svg", // 多雲
//   03d: "/images/rain.svg", // 下雨
//   04d: "/images/snow.svg", // 下雪
//   09d: "/images/thunderstorm.svg", // 雷雨
//   10d: "",
//   11d: "",

// };

export function getWeatherIcon(iconCode) {
  // return weatherIcons.iconCode;
  return `/img/icon-weather/${iconCode}.svg`;
}

// const weatherIcons = {
//   day: {
//     isThunderstorm: <DayThunderstorm />,
//     isClear: <DayClear />,
//     isCloudyFog: <DayCloudyFog />,
//     isCloudy: <DayCloudy />,
//     isFog: <DayFog />,
//     isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
//     isSnowing: <DaySnowing />,
//   },
//   night: {
//     isThunderstorm: <NightThunderstorm />,
//     isClear: <NightClear />,
//     isCloudyFog: <NightCloudyFog />,
//     isCloudy: <NightCloudy />,
//     isFog: <NightFog />,
//     isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
//     isSnowing: <NightSnowing />,
//   },
// };

// const weatherTypes = {
//   isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
//   isClear: [1],
//   isCloudyFog: [25, 26, 27, 28],
//   isCloudy: [2, 3, 4, 5, 6, 7],
//   isFog: [24],
//   isPartiallyClearWithRain: [
//     8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39,
//   ],
//   isSnowing: [23, 37, 42],
// };
