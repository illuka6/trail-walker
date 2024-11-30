import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchName, setSearchPosition } from "./trailSlice";
import Button from "../../ui/Button";
import LoginModule from "../../ui/LoginModule";
import { showLoginModule, hideLoginModule } from "../../ui/uiSlice";
import TrailItem from "./TrailItem";
import { fetchWeather, fetchWeatherForecast } from "../../services/apiWeather";
import { convertTWD97ToWGS84 } from "../../utils/helpers";
import { getTrail } from "../../services/apiTrail";
import { useLoaderData } from "react-router-dom";

function TrailsSearch() {
  const dispatch = useDispatch();
  const isLoginModuleVisible = useSelector(
    (state) => state.ui.isLoginModuleVisible,
  );
  const isLoading = useSelector((state) => state.trail.status == "loading");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // const trails = useSelector((state) => state.trail.trails);
  const trails = useLoaderData();
  const { weatherData, weatherForecastData } = useSelector(
    (state) => state.trail,
  );
  const filters = useSelector((state) => state.trail.filters);

  const [sortOption, setSortOption] = useState("length"); // 預設排序依據
  const [sortOrder, setSortOrder] = useState("desc"); // 預設降序
  console.log("isLoading", isLoading);
  useEffect(() => {
    if (trails.length !== 0) {
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
  const regionMap = {
    北部: ["台北", "新北", "宜蘭", "基隆", "桃園", "新竹"],
    中部: ["苗栗", "台中", "彰化", "南投", "雲林"],
    南部: ["高雄", "臺南", "嘉義", "屏東", "澎湖"],
    東部: ["花蓮", "台東"],
  };

  const filteredTrails = trails.filter((trail) => {
    const nameMatch = trail.TR_CNAME.includes(filters.searchName);

    let positionMatch = true; //預設為 true，代表不篩選位置（適用於 "all"）
    if (filters.searchPosition !== "全台灣") {
      const regions = regionMap[filters.searchPosition] || [
        filters.searchPosition,
      ];
      positionMatch = regions.some((region) =>
        trail.TR_POSITION.includes(region),
      );
    }

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
      <div
        className="min-h-screen w-screen bg-[url('https://images.unsplash.com/photo-1705498710905-5e5887e07e58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center pb-0 pt-[54px] md:px-0 md:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/public/img/bg1.jpeg')",
        }}
      >
        {isLoginModuleVisible && <LoginModule />}
        {/* 搜尋條件 */}
        <div className="md:center mb-6 bg-stone-50 bg-opacity-95 px-8 py-6 md:mx-auto md:max-w-lg md:rounded-2xl">
          <h1 className="text-green1-400 mb-4 mt-3 text-left text-sm font-bold">
            搜尋條件{" "}
          </h1>
          <input
            type="text"
            placeholder="步道名稱"
            value={filters.searchName}
            onChange={(e) => dispatch(setSearchName(e.target.value))}
            className="border-green1-400 focus:ring-green1-100 mb-2 w-full rounded-full border-2 px-4 py-2 focus:outline-none focus:ring-2"
            disabled={!isLoading}
          />
          <input
            type="text"
            placeholder="依縣市（鄉鎮）尋找"
            value={filters.searchPosition}
            onChange={(e) => dispatch(setSearchPosition(e.target.value))}
            className="border-green1-400 focus:ring-green1-100 mb-2 w-full rounded-full border-2 px-4 py-2 focus:outline-none focus:ring-2"
            disabled={!isLoading}
          />

          <Button
            type="small"
            onClick={() => dispatch(setSearchPosition("北部"))}
          >
            北部
          </Button>
          <Button
            type="small"
            onClick={() => dispatch(setSearchPosition("中部"))}
          >
            中部
          </Button>
          <Button
            type="small"
            onClick={() => dispatch(setSearchPosition("南部"))}
          >
            南部
          </Button>
          <Button
            type="small"
            onClick={() => dispatch(setSearchPosition("東部"))}
          >
            東部
          </Button>
          <Button
            type="small"
            onClick={() => dispatch(setSearchPosition("全台灣"))}
          >
            全台灣
          </Button>
        </div>

        {/* 排序條件選擇 */}
        {isSearched && filteredTrails.length > 0 && (
          <div className="center mx-auto mb-4 flex max-w-screen-md gap-4 text-stone-50">
            <div>
              <label className="mr-2">排序依據</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="text-green1-400 border p-2"
              >
                <option value="class">難度</option>
                <option value="length">步道長度</option>
              </select>
            </div>

            <div>
              <label className="mr-2">排序方式</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="text-green1-400 border p-2"
              >
                <option value="desc">降序</option>
                <option value="asc">升序</option>
              </select>
            </div>
          </div>
        )}

        {/* 渲染篩選結果 */}
        {isSearched && filteredTrails.length > 0 ? (
          <div className="rounded-[46px] bg-stone-50 bg-opacity-95 p-5">
            {sortedTrails.map((trail) => (
              <TrailItem trail={trail} key={trail.TRAILID} />
            ))}
          </div>
        ) : (
          <div className="m-8 text-center text-stone-50">尚無搜尋結果</div>
        )}
      </div>
    </>
  );
}

export default TrailsSearch;

export async function loader() {
  const trails = await getTrail();
  return trails;
}
