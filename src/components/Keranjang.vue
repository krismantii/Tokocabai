<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>My Cart</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <table class="table ">
      <tr>
        <th class="t-head head-it "></th>
        <th class="t-head  ">Toko</th>
        <th class="t-head  ">Produk</th>
        <th class="t-head">Harga/Kg</th>
        <th class="t-head">Quantity</th>
        <th class="t-head">Total</th>
      </tr>
      <tr class="cross" v-for="(pro, index) in cart" :key="pro.id">
        {{
          loadToko(pro.product.shopID)
        }}
        <td class="t-data">
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              :value="pro"
              v-model="check"
            />
            <label class="form-check-label" for="exampleCheck1">Pilih</label>
          </div>
        </td>
        <td class="t-data">
          <h6 style="color: grey;">toko : {{ toko }}</h6>
        </td>
        <td class="ring-in t-data">
          <a class="at-in">
            <img :src="pro.product.photoURL" class="gambar" alt="" />
          </a>
          <div class="sed">
            <router-link
              :to="{
                name: 'Produk',
                params: { slug: pro.product.slugName, id: pro.product.id }
              }"
            >
              <h5>{{ pro.product.name }}</h5>
            </router-link>
          </div>
          <div class="clearfix"></div>
          <div class="close1">
            <button class="btn btn-danger" @click="deleteData(pro.id, index)">
              x
            </button>
          </div>
        </td>
        <td class="t-data">Rp {{ pro.product.pricePerKG }}</td>
        <td class="t-data">
          <div class="col-sm-10">
            <b-form-input
              v-model="pro.AmountKG"
              type="number"
              min="0"
              step="any"
              placeholder=""
            ></b-form-input>
          </div>
        </td>

        <td class="t-data">Rp {{ pro.product.pricePerKG * pro.AmountKG }}</td>
      </tr>
    </table>

    <table class="table">
      <tr>
        <th class="t-head head-it "></th>
        <th class="t-head"></th>
      </tr>
      <tr class="cross">
        <td class="ring-in t-data" style="text-align: right; ">
          <h4 style="color: green;">Total bayar :</h4>
        </td>
        <td class="t-data" style="text-align: center; ">
          <h5>Rp {{ totalSumm }}</h5>
        </td>
      </tr>
      <tr class="cross">
        <td class="ring-in t-data" style="text-align: right; "></td>
        <td class="t-data" style="text-align: center; ">
          <button v-on:click="checkout()" class="btn btn-danger">
            Check out
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
th.t-head {
  background: #f1f1f1;
  color: green;
  font-size: 1em !important;
  padding: 1em !important;
  border: 1px solid #d2d2d2 !important;
}
.gambar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      dataku: [],
      //dataku merupakan variabel yg menampung data array JSON
      cart: [],
      toko: [],
      token,
      shop_id: null,
      harga_total: [],
      check: [],
      check_out: []
    };
  },
  computed: {
    totalSumm: function() {
      return this.check.reduce(function(total, pro) {
        return total + pro.product.pricePerKG * pro.AmountKG;
      }, 0);
    }
  },
  created() {
    this.Cart_user();
  },
  methods: {
    Cart_user() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            query{
            carts(token:"${token}" ){
              id
              product{
                id
                photoURL
                pricePerKG
                name
                shopID
                slugName
              }
              userID
              AmountKG
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data cart:", response.data);
          this.cart = response.data.data.carts;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    checkout() {
      var result = this.check.map(a => a.id);
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
           mutation{
            checkout(params:{
              cartIDs: "${result}"
              paymentAmount: "${this.totalSumm.toString()}"
            }){
              id
              customerID
              shopID
              totalPrice
              products{
                id
                name
                quantity
              }
              status
              payment{
                id
                amount
                status
                method
              }
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data check out:", response.data);
          this.check_out = response.data.data.checkout;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error check");
        });
    },
    deleteData(event, index) {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
           mutation{
              deleteCart(cartID: ${event}){
              success
              }
            }
        `
        }
      })
        .then(response => {
          alert("Data berhasil dihapus");
          this.cart.splice(index, 1);
          console.log("Data hapus :", response.data);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
          alert("error");
        });
    },
    loadToko(event) {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            query{
                getUserByID(userID:
                  ${parseInt(event)}
                ){
                  id
                  name
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data toko:", response.data);
          this.toko = response.data.data.getUserByID.name;
          return this.toko;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
