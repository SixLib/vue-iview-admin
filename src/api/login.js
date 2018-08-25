import axios from "@/utils/axios";
export async function login(loginInfo) {
  const res = await axios.post("/api/account/login", {
    loginname: loginInfo.loginname,
    password: loginInfo.password
  });
  return res.data;
}
