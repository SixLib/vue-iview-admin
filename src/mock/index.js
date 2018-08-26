import Mock from "mockjs";
import loginAPI from "./login";
import echartsAPI from "./echarts";
import documentationAPI from "./documentation";

// 登录相关
Mock.mock(/\/account\/login/, "post", loginAPI.loginByLoginname);
/**
 * Echarts
 */
Mock.mock(/\/echarts\/getdata/, "post", echartsAPI.getEchartsData);

/**
 * MarkDown documentation
 */
Mock.mock(/\/document\/getdata/, "post", documentationAPI.getDocunentData);

export default Mock;
