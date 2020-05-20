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
    {{ data_toko }}
    {{ deldataduplicate }}
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
          <div v-for="tok in uniqueArray" :key="tok.id">
            <h6 v-if="pro.product.shopID == tok.id" style="color: grey;">
              {{ tok.name }}
            </h6>
          </div>
        </td>
        <td class="ring-in t-data">
          <a class="at-in">
            <img :src="pro.product.photoURL" class="gambar" alt="" />
          </a>
          <div class="sed">
            <router-link
              :to="{
                name: 'Produk',
                params: {
                  slug: pro.product.slugName,
                  id: pro.product.id,
                  shopid: pro.product.shopID
                }
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
              v-on:input="updateCartQuantity(pro.id, pro.AmountKG)"
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
          <button class="btn btn-danger" v-b-modal.modal-prevent-closing>
            Check out
          </button>
        </td>
      </tr>
    </table>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Informasi pengiriman produk"
      @ok="handleOk"
    >
      <div>
        <b-alert show dismissible variant="danger">
          Pastikan informasi sudah benar sebelum check out <b>&rArr;</b>
        </b-alert>
      </div>
      <div>
        <h4 style="text-align:center; color:green;">
          Saldo : <i class="fas fa-credit-card"></i> Rp
          {{ this.user.saldo }}
        </h4>
      </div>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group id="input-group-1" label="Nama :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.name"
            type="text"
            required
            :readonly="user.id >= 1"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Provinsi :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.province"
            type="text"
            required
            :readonly="user.id >= 1"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Alamat Lengkap :"
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="user.addressDetail"
            type="text"
            rows="5"
            :readonly="user.id >= 1"
            required
            placeholder=""
          ></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-1" label="kode zip :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.zipCode"
            type="number"
            required
            :readonly="user.id >= 1"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="No. Hp :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.phone"
            type="text"
            required
            :readonly="user.id >= 1"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Pilih kurir pengiriman :">
          <b-form-radio name="some-radios" value="A">Kurir A</b-form-radio>
          <b-form-radio name="some-radios" value="B">Kurir B</b-form-radio>
        </b-form-group>
      </form>
    </b-modal>
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
      ids: [],
      clean: [],
      token,
      shop_id: null,
      harga_total: [],
      check: [],
      check_out: [],
      user: [],
      uniqueArray: []
    };
  },
  computed: {
    totalSumm: function() {
      return this.check.reduce(function(total, pro) {
        return total + pro.product.pricePerKG * pro.AmountKG;
      }, 0);
    },
    data_toko: function() {
      return this.loadToko(this.cart);
    },
    deldataduplicate: function() {
      return this.del(this.toko);
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
            carts(params:{
                  limit: 10
                  page: 1
                }){
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
      }).then(response => {
        console.log("Data cart:", response.data);
        this.cart = response.data.data.carts;
        this.loadData();
      });
    },
    del(event) {
      const jsonObject = event.map(JSON.stringify);
      console.log(jsonObject);
      const uniqueSet = new Set(jsonObject);
      this.uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      console.log(this.uniqueArray);
    },
    checkout() {
      var result = JSON.stringify(this.check.map(a => a.id));
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `mutation {
                checkout(params: {cartIDs: ${result}
                paymentAmount: "${this.totalSumm.toString()}"}) {
                  id
                  customerID
                  shopID
                  totalPrice
                  products {
                    id
                    name
                    quantity
                  }
                  status
                  payment {
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
          console.log(response.data);
          console.log(result);
          if (response.data.errors == null) {
            this.check_out = response.data.data.checkout;
            alert("Produk berhasil dibeli");
            this.$router.push(
              { name: "Keranjang", params: { token: token } },
              this.$router.go(0)
            );
          }
          alert("error");
        })
        .catch(function(error) {
          console.log(error);
          alert("Data tidak sesuai atau saldo tidak cukup");
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
      for (let i = 0; i < event.length; i++) {
        axios({
          method: "post",
          url: "http://localhost:4000/query",
          data: {
            query: `
            query{
                getUserByID(userID:
                  ${parseInt(event[i].product.shopID)}
                ){
                  id
                  name
                }
              }
        `
          }
        }).then(response => {
          this.toko.push(response.data.data.getUserByID);
        });
      }
    },
    loadData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            query{
                getUserInfo(token:
                  "${token}"
                ){
                  id
                  name
                  email
                  phone
                  type
                  addressDetail
                  province
                  zipCode
                  photoURL
                  saldo
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data user:", response.data);
          this.user = response.data.data.getUserInfo;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    updateCartQuantity(cartid, newquantity) {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
           mutation{
            updateCartQuantity(params:{
              cartID: ${parseInt(cartid)}
              newQuantityKG: ${parseFloat(newquantity)}
            }){
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
      }).then(response => {
        console.log("update quantity:", response.data);
        this.cart = response.data.data.updateCartQuantity;
        this.$router.push(
          { name: "Keranjang", params: { token: token } },
          this.$router.go(0)
        );
      });
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      this.checkout();
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
};
</script>
