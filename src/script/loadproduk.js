import axios from "axios";
export default {
  name: "Produk",
  data() {
    return {
      //dataku merupakan variabel yg menampung data array JSON
      dataku: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            {
            product(params: {
              id:1
            }) {
              shopID
              name
              quantity
              pricePerKG
              stockKG
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.dataku = response.data.data.product;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
