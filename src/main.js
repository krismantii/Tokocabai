import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import jQuery from "jquery";
window.$ = window.e = window.jQuery = jQuery;
import "popper.js";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.config.productionTip = false;

Vue.component("Navigasi", require("./components/Navigasi.vue").default);
Vue.component("Footer", require("./components/Footer.vue").default);

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
