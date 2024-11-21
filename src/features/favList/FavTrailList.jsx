// import { useLoaderData } from "react-router-dom";
// import { getTrail } from "../../services/apiTrail";
import FavTrailItem from "./FavTrailItem";
import { useSelector } from "react-redux";

function FavTrailList() {
  // const trails = useLoaderData(); //ReactRouter自動知道這裡想讀取的是配置在route內的loader
  const favTrails = useSelector((state) => state.favTrail.favTrails);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {favTrails.map((favTrail) => (
        <FavTrailItem trail={favTrail} key={favTrail.TRAILID} />
      ))}
    </ul>
  );
}

// export async function loader() {
//   const trails = await getTrail();
//   return trails;
// }

export default FavTrailList;
