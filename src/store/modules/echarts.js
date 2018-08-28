import { getEchartsData } from "@/api/echarts";
const echarts = {
  state: {
    lineData: []
  },
  mutations: {
    SET_TOKEN: (state, obj) => {
      state.lineData = obj;
    }
  },
  actions: {
    getEchartsData: async ({ commit }, key, type) => {
      const res = await getEchartsData(key, type);
      if (res.code == 200) {
        commit("SET_TOKEN", res.data);
      }
    }
  }
};
export default echarts;
