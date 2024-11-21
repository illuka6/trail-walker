import Button from "../../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { showLoginModule, hideLoginModule } from "../../ui/uiSlice";
import DeleteItem from "./DeleteItem";
import { addItem, deleteItem } from "./favTrailSlice";

function FavTrailItem({ trail }) {
  const dispatch = useDispatch();

  const weatherData = useSelector((state) => state.trail.weatherData);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // function handleAddFavList() {
  //   if (!isAuthenticated) {
  //     dispatch(showLoginModule());
  //   } else {
  //     dispatch(deleteItem(trail.TRAILID));
  //     alert("收藏成功！");
  //   }
  // }
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
        {/* <div className="w-1/6">
          <p>氣溫: {weatherData[trail.TRAILID].main.temp}度</p>
          <p>天氣：{weatherData[trail.TRAILID].weather[0].main}</p>
        </div> */}
      </div>

      <Button type="primary" onClick={() => handleAddFavList()}>
        加入收藏
      </Button>

      <Button type="primary">查詢天氣</Button>
      <DeleteItem TRAILID={trail.TRAILID} />
      {console.log("trail.TRAILID", trail.TRAILID)}
    </div>
  );
}

export default FavTrailItem;
