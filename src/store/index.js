import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    data_user: []
  },
  mutations: {
    simpan_data(state, data_user) {
      state.data_user.push(data_user);
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.data_user = [];
      state.token = "";
    }
  },
  actions: {
    login({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:4000/query",
          data: {
            query: `
            query{
              login(params:{
                userNameOrEmail: "${user.email}"
                password :"${user.password}"
              }){
                token
              }
            }
        `
          },
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.login.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit("auth_success", token);
            dispatch("data_user", token);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    data_user({ commit }, token) {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:4000/query",
          data: {
            query: `
            {
              getUserInfo(token: "${token}") {
                id
                name
                userName
                email
                phone
                type
                photoURL
                city
                province
                zipCode
                addressDetail
                description
                createdAt
                updatedAt
              }
            }
        `
          },
          method: "POST"
        })
          .then(resp => {
            const data_user = resp.data.data.getUserInfo;
            commit("simpan_data", data_user);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
