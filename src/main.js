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
Vue.config.productionTip = false;

Vue.component("Navigasi", require("./components/Navigasi.vue").default);
Vue.component("Footer", require("./components/Footer.vue").default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
