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

  return ( favTrailData?.length>0 ? <>
    <div
        className="min-h-screen w-screen bg-[url('https://images.unsplash.com/photo-1705498710905-5e5887e07e58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center pb-0 pt-[54px] md:px-0 md:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/img/bg1.jpeg')",
        }}
      >
        <div className=" center m-auto my-1 max-w-screen-md rounded-md border-b bg-stone-50 bg-opacity-75 p-4">
          
    <ul className=" divide-y divide-stone-200  ">
      {favTrailData.map((trail) => (
        <FavTrailItem
          trail={trail}
          key={trail.TRAILID}
        />
      ))}
    </ul>
    </div> </div></>:  (<div
        className="min-h-screen w-screen bg-[url('https://images.unsplash.com/photo-1705498710905-5e5887e07e58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center pb-0 pt-[54px] md:px-0 md:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/img/bg1.jpeg')",
        }}
      >
    <div className="align-middle  mt-20 p-6"><Link to="/trails" className="text-white">無收藏步道，
  去添加 →</Link></div></div>

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
