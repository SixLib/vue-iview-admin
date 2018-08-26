import axios from "@/utils/axios";
export async function getEchartsData(key, type) {
  const res = await axios.post("/api/echarts/getdata", {
    key: key,
    type: type
  });
  return res.data;
}
