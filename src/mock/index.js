import Mock from "mockjs";
import loginAPI from "./login";
import echartsAPI from "./echarts";

// 登录相关
Mock.mock(/\/account\/login/, "post", loginAPI.loginByLoginname);
/**
 * Echarts
 */
Mock.mock(/\/echarts\/getdata/, "post", echartsAPI.getEchartsData);

export default Mock;
