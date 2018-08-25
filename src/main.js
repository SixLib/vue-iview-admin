import Vue from "vue";
import iView from "iview";
import "iview/dist/styles/iview.css";
import { router } from "@/router";
import "@/mock";
import "@/permission";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
