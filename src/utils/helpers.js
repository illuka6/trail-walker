import proj4 from "proj4";

// 定義二度分帶座標系 (TWD97 TM2) 和 WGS84
const twd97TM2 =
  "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs";
const wgs84 = "+proj=longlat +datum=WGS84 +no_defs";

export function convertTWD97ToWGS84(x, y) {
  const [lon, lat] = proj4(twd97TM2, wgs84, [x, y]);
  return { lat, lon };
}
