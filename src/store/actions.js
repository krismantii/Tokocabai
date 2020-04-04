import axios from "axios";
export default {
  loadtoko({ commit }) {
    axios({
      method: "post",
      url: "http://localhost:4000/query",
      data: {
        query: `
              query {
              shop(params:{id:1}) {
                id,
                name
              }
            }
          `
      }
    }).then(response => {
      commit("data_toko", response.data.data.shop);
    });
  }
};
