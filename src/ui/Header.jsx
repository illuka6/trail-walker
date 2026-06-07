import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import SearchOrder from "../features/order/SearchOrder";
// import UserName from "../features/user/UserName";

function Header({ scrolled }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  console.log("import.meta.env", import.meta.env);
  // const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  // console.log("API Key: ", apiKey);
  // const WEATHER_FORECAST_API_URL =
  //   "https://api.openweathermap.org/data/2.5/forecast";
  // const api_url = `${WEATHER_FORECAST_API_URL}?lat={lat}&lon={lon}&appid=${apiKey}&units=metric&lang=zh_tw`;
  // console.log("api_url", api_url);
  const isHaveFavList = useSelector(
    (state) => state.favTrail.favTrails.length !== 0,
  );


  return (
    <header className={`
  z-50 fixed top-0 left-0 w-screen
  flex h-8 items-center justify-between
  px-4 py-7 uppercase text-stone-50
  transition-all duration-300

  ${scrolled
    ? "bg-green1-400 shadow-lg"
    : "bg-transparent bg-opacity-80 md:bg-opacity-0"}
`}>
      <Link to="/" className="h-8tracking-widest">
        山裡走走
      </Link>
      <div className="mr-20 flex h-8 w-auto items-center justify-center">
        <Link to="/trails" className="mx-2">
          尋找適合步道
        </Link>
        {isHaveFavList ? (
          <Link to="/favList" className="mx-2">
            收藏清單
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="absolute right-2 mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-stone-50 hover:transition-all">
        {isAuthenticated ? (
          <>
            <div className="flex flex-col items-center">
              <div className="  flex flex-col items-center w-fit">
                <img className="h-6 w-6 rounded-full" src={user.avatar}></img>
                <p className="text-sm text-green1-500">{user.name}</p>{" "}
              </div>
              <Button type="logout" onClick={() => dispatch(logout()) }>
                登出
              </Button>
            </div>
          </>
        ) : (
          <Button type="text" to="/login">
            登入
          </Button>
        )}
      </div>

      {/* <SearchOrder /> */}
      {/* <UserName /> */}
    </header>
  );
}

export default Header;
