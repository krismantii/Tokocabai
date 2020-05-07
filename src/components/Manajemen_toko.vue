<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <div class="spec ">
        <h3>Manajemen Toko</h3>
        <div class="ser-t">
          <b></b>
          <span><i></i></span>
          <b class="line"></b>
        </div>
      </div>
      <div class="tab-head">
        <nav class="nav justify-content-center">
          <ul id="active-nav" class="nav tabs">
            <li class="">
              <a href="#tab1" class="nav-shop" data-toggle="tab"
                >Barang Di-request</a
              >
            </li>
            <li class="">
              <a href="#tab2" class="nav-shop" data-toggle="tab"
                >Barang Dikirim</a
              >
            </li>
            <li class="">
              <a href="#tab3" class="nav-shop" data-toggle="tab"></a>
            </li>
          </ul>
        </nav>
        <div class="tab-content tab-content-t">
          <div class="tab-pane active text-style" id="tab1">
            <div class=" con-w3l">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nama Barang - Jumlah diminta</th>
                    <th scope="col">Total Harga</th>
                    <th scope="col">Detail pengiriman</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(pro, index) in order" :key="index">
                    <div
                      style="font-size: 12px;"
                      v-for="(produk, index) in pro.products"
                      :key="index"
                    >
                      <td>{{ produk.name }}</td>
                      <td>Rp {{ produk.pricePerKG }}/KG</td>
                      <td>{{ produk.boughtKG }} KG</td>
                    </div>
                    <td style="font-size: 12px;">Rp {{ pro.totalPrice }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-secondary float-left"
                        v-b-modal.modal-prevent-closing
                        @click="loadData(pro.customerID)"
                      >
                        lihat alamat
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger float-left"
                        @click="shipOrder(pro.id, index)"
                      >
                        Produk dikirim
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="tab-pane text-style" id="tab2">
            <div class=" con-w3l">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nama Barang - Jumlah diminta</th>
                    <th scope="col">Total Harga</th>
                    <th scope="col">Detail pengiriman</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(pro, index) in order" :key="index">
                    <div
                      style="font-size: 12px;"
                      v-for="(produk, index) in pro.products"
                      :key="index"
                    >
                      <td>{{ produk.name }}</td>
                      <td>Rp {{ produk.pricePerKG }}/KG</td>
                      <td>{{ produk.boughtKG }} KG</td>
                    </div>
                    <td style="font-size: 12px;">Rp {{ pro.totalPrice }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-secondary float-left"
                        v-b-modal.modal-prevent-closing
                        @click="loadData(pro.customerID)"
                      >
                        lihat alamat
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger float-left"
                        @click="shipOrder(pro.id, index)"
                      >
                        Produk dikirim
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="tab-pane  text-style" id="tab3">
            <div class=" con-w3l">
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Informasi pengiriman produk"
      ok-only
      ok-variant="secondary"
      ok-title="Cancel"
    >
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
        <b-form-group id="input-group-1" label="Kurir :" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            :readonly="user.id >= 1"
            placeholder="Silambat"
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<style scoped>
@import "../assets/Shop/css_tambahan.css";
</style>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      token,
      order: [],
      user: []
    };
  },
  created() {
    this.shopOrder();
  },
  methods: {
    shopOrder() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
                  {
            shopOrders(token: "${token}") {
              id
              customerID
              totalPrice
              status
              products {
                id
                name
                boughtKG
                shopID
                pricePerKG
                photoURL
              }
              payment {
                createdAt
                amount
              }
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data order:", response.data);
          this.order = response.data.data.shopOrders;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    loadData(event) {
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
                  phone
                  addressDetail
                  province
                  zipCode
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.user = response.data.data.getUserByID;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    shipOrder(data, index) {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            mutation{
              shipOrder(orderID: ${data} ){
                id
                customerID
                status
                payment{
                  createdAt
                }
              }
            }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          alert("status berhasil dipindah");
          this.order.splice(index, 1);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
          alert("error");
        });
    }
  }
};
</script>
