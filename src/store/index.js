import Vue from "vue";
import Vuex from "vuex";
//import Axios from "axios";

Vue.use(Vuex);

import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
export default new Vuex.Store({
  state,
  getters,
  mutations
});
