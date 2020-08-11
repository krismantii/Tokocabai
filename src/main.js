import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import jQuery from "jquery";
window.$ = window.e = window.jQuery = jQuery;
import "popper.js";
import "./plugins/bootstrap-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.config.productionTip = false;

//package untuk menampilkan graph
import VueGraph from "vue-graph";

import vuetify from "./plugins/vuetify";
Vue.use(VueGraph);

Vue.component("Navigasi", require("./components/Navigasi.vue").default);
Vue.component("Footer", require("./components/Footer.vue").default);

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + token;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
