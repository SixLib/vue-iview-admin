import axios from "@/utils/axios";
export async function getDocumentData() {
  const res = await axios.post("/api/document/getdata");
  return res.data;
}
