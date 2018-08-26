import { getEchartsData } from "@/api/echarts";
const echarts = {
  state: {
    token: false
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    getEchartsData: async ({ commit }, key, type) => {
      const res = await getEchartsData(key, type);
      if (res.code == 200) {
        commit("SET_TOKEN", true);
      }
      return res.data;
    }
  }
};
export default echarts;
