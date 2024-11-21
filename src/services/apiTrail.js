const TRAIL_API_URL =
  "https://data.moa.gov.tw/Service/OpenData/ForestRtBasic.aspx?IsTransData=1&UnitId=D51";

// 異步獲取資料
// export const fetchTrails = createAsyncThunk("trail/fetchTrails", async () => {
//   const res = await fetch(TRAIL_API_URL);
//   const data = await res.json();
//   return data;
// });

export async function getTrail() {
  const res = await fetch(TRAIL_API_URL);
  if (!res.ok) throw Error("Failed getting trails");
  const data = await res.json();
  return data;
}
