import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import echarts from "./modules/echarts";
import document from "./modules/document";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    echarts,
    document
  },
  getters
});
export default store;
