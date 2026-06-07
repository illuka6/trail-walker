// import { useLoaderData } from "react-router-dom";
// import { getTrail } from "../../services/apiTrail";
import { Link, useLoaderData } from "react-router-dom";
import FavTrailItem from "./FavTrailItem";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function FavTrailList() {
  // const trails = useLoaderData(); //ReactRouter自動知道這裡想讀取的是配置在route內的loader
  const favTrails = useSelector((state) => state.favTrail.favTrails);

//  const trails =  useLoaderData(); loader太慢，改用redux
const trails = useSelector(state => state.trail.trails);

console.log(`trails`,trails);
  // ⭐ 核心：用 ID 去找完整資料
  const favTrailData = useMemo(()=>{ return (favTrails
    .map((fav) =>
      trails.find(
        (t) =>
          String(t.TRAILID) === String(fav.TRAILID))
      )
    )
    .filter(Boolean); // 防 undefined
    
},[trails,favTrails])

    console.log(`favTrailData`,favTrailData);
    console.log("favTrails:", favTrails);
console.log("trails sample:", trails[0]);
console.log("trails", trails);
console.log("favTrailData", favTrailData);

  return ( favTrailData?.length>0 ?
    <ul className="divide-y divide-stone-200 px-2">
      {favTrailData.map((trail) => (
        <FavTrailItem
          trail={trail}
          key={trail.TRAILID}
        />
      ))}
    </ul> :  (
    <div className="align-middle  mt-20 p-6"><Link to="/trails">無收藏步道，
  去添加 →</Link></div>

  )
  );
  
  // return (
  //   <ul className="divide-y divide-stone-200 px-2">
  //     {favTrails.map((favTrail) => (
  //       <FavTrailItem trail={favTrail} key={favTrail.TRAILID} />
  //     ))}
  //   </ul>
  // );
}

// export async function loader() {
//   const trails = await getTrail();
//   return trails;
// }

export default FavTrailList;
