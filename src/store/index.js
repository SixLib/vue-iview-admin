import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import echarts from "./modules/echarts";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    echarts
  }
});
export default store;
