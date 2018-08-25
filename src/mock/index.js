import Mock from "mockjs";
import loginAPI from "./login";

// 登录相关
Mock.mock(/\/account\/login/, 'post', loginAPI.loginByLoginname)

export default Mock;
