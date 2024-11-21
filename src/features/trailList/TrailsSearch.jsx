import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrails, setSearchName, setSearchPosition } from "./trailSlice";
import Button from "../../ui/Button";
import LoginModule from "../../ui/LoginModule";
import { showLoginModule, hideLoginModule } from "../../ui/uiSlice";
import TrailItem from "./TrailItem";
import { fetchWeather, fetchWeatherForecast } from "../../services/apiWeather";
import { convertTWD97ToWGS84 } from "../../utils/helpers";

function TrailsSearch() {
  const dispatch = useDispatch();
  const isLoginModuleVisible = useSelector(
    (state) => state.ui.isLoginModuleVisible,
  );
  const isLoading = useSelector((state) => state.trail.status == "loading");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const trails = useSelector((state) => state.trail.trails);
  const { weatherData, weatherForecastData } = useSelector(
    (state) => state.trail,
  );
  const filters = useSelector((state) => state.trail.filters);

  const [sortOption, setSortOption] = useState("length"); // 預設排序依據
  const [sortOrder, setSortOrder] = useState("desc"); // 預設降序
  console.log("isLoading", isLoading);
  useEffect(() => {
    if (trails.length === 0) {
      dispatch(fetchTrails());
    } else {
      trails.forEach((trail) => {
        // 確保 TR_ENTRANCE 存在
        try {
          const entrances = JSON.parse(trail.TR_ENTRANCE);
          console.log(`解析成功，步道 ID: ${trail.TRAILID}`, entrances);
          // 確保解析後有資料且包含 x 和 y
          if (
            Array.isArray(entrances) &&
            entrances.length > 0 &&
            entrances[0]?.x &&
            entrances[0]?.y
          ) {
            const firstEntrance = entrances[0];
            // 轉換二度分帶座標到經緯度
            const { lat, lon } = convertTWD97ToWGS84(
              firstEntrance.x,
              firstEntrance.y,
            );
            dispatch(
              fetchWeather({
                lat,
                lon,
                trailId: trail.TRAILID,
              }),
            );
            dispatch(
              fetchWeatherForecast({
                lat,
                lon,
                trailId: trail.TRAILID,
              }),
            );
            console.log(lat, lon, trail.TRAILID);
          }
        } catch (error) {
          console.error(
            `TR_ENTRANCE 解析失敗，步道 ID: ${trail.TRAILID}, 原始資料: ${trail.TR_ENTRANCE}`,
            error,
          );
        }
      });
    }
  }, [trails, dispatch]);

  console.log("weatherData", weatherData);

  // 篩選資料
  const filteredTrails = trails.filter((trail) => {
    const nameMatch = trail.TR_CNAME.includes(filters.searchName);
    const positionMatch = trail.TR_POSITION.includes(filters.searchPosition);
    return nameMatch && positionMatch;
  });
  const isSearched = filters.searchName || filters.searchPosition;

  // 排序的處理

  const sortedTrails = [...filteredTrails]
    .map((trail) => {
      // 防禦性解析數字長度，避免 match 返回 null
      const lengthMatch = trail.TR_LENGTH?.match(/[\d.]+/);
      const numericLength = lengthMatch ? parseFloat(lengthMatch[0]) : 0; // 如果無法提取，預設為 0
      return { ...trail, numericLength }; // 將數值存入 trail 的新屬性
    }) // 要先將數值存入 trail 的新屬性，才能使用陣列方法

    .sort((a, b) => {
      const fieldA = sortOption === "length" ? a.numericLength : a.TR_DIF_CLASS;
      const fieldB = sortOption === "length" ? b.numericLength : b.TR_DIF_CLASS;

      if (sortOrder === "asc") {
        return fieldA - fieldB; // 升序
      } else {
        return fieldB - fieldA; // 降序
      }
    });

  // 監聽 isAuthenticated 的變化
  useEffect(() => {
    if (isAuthenticated && isLoginModuleVisible) {
      dispatch(hideLoginModule()); // 登入後自動關閉模組
    }
  }, [isAuthenticated, isLoginModuleVisible, dispatch]);

  console.log("weatherForecastData", weatherForecastData);
  return (
    <>
      <div className="w-screen bg-[url('https://images.unsplash.com/photo-1705498710905-5e5887e07e58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center p-6 md:p-20">
        <h1 className="mb-4 mt-10 text-center text-2xl font-bold">
          台灣步道搜尋{" "}
        </h1>
        {isLoginModuleVisible && <LoginModule />}
        {/* 搜尋條件 */}
        <div className="md:center mb-6 rounded-2xl bg-stone-50 bg-opacity-75 p-6 md:mx-auto md:max-w-96">
          <input
            type="text"
            placeholder="步道名稱"
            value={filters.searchName}
            onChange={(e) => dispatch(setSearchName(e.target.value))}
            className="mb-2 w-full border p-2"
            disabled={!isLoading}
          />
          <input
            type="text"
            placeholder="依縣市（鄉鎮）尋找"
            value={filters.searchPosition}
            onChange={(e) => dispatch(setSearchPosition(e.target.value))}
            className="w-full border p-2"
            disabled={!isLoading}
          />
        </div>

        {/* 排序條件選擇 */}
        {isSearched && filteredTrails.length > 0 && (
          <div className="center mx-auto mb-4 flex max-w-screen-md gap-4">
            <div>
              <label className="mr-2">排序依據:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border p-2"
              >
                <option value="class">難度</option>
                <option value="length">步道長度</option>
              </select>
            </div>

            <div>
              <label className="mr-2">排序方式:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border p-2"
              >
                <option value="desc">降序</option>
                <option value="asc">升序</option>
              </select>
            </div>
          </div>
        )}

        {/* 渲染篩選結果 */}
        {isSearched && filteredTrails.length > 0 ? (
          sortedTrails.map((trail) => (
            <TrailItem trail={trail} key={trail.TRAILID} />
          ))
        ) : (
          <div>尚無搜尋結果</div>
        )}
      </div>
    </>
  );
}

export default TrailsSearch;
