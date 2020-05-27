<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <div class="spec ">
        <h3>History</h3>
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
              <a
                href="#tab1"
                class="nav-shop"
                data-toggle="tab"
                v-on:click="customerOrder('waiting_for_seller')"
                >Pemesanan diproses</a
              >
            </li>
            <li class="">
              <a
                href="#tab2"
                class="nav-shop"
                data-toggle="tab"
                v-on:click="customerOrder('on_shipment')"
                >Pemesanan dikirim</a
              >
            </li>
            <li class="">
              <a
                href="#tab3"
                class="nav-shop"
                data-toggle="tab"
                v-on:click="customerOrder('fulfilled')"
                >Pemesanan selesai</a
              >
            </li>
            <li class="">
              <a
                href="#tab4"
                class="nav-shop"
                data-toggle="tab"
                v-on:click="customerOrder('rejected_by_shop')"
                >Pemesanan dibatalkan</a
              >
            </li>
          </ul>
        </nav>
        <div class="tab-content tab-content-t">
          <div class="tab-pane active text-style" id="tab1">
            <div class=" con-w3l">
              <span v-for="(pro, index) in order" :key="index">
                <div class="card border-success">
                  <h5 class="card-header border-success">
                    <i class="fas fa-dolly"></i>Status : {{ pro.status }}
                  </h5>
                  <div class="card-body">
                    <span v-for="(produk, index) in pro.products" :key="index">
                      <router-link
                        :to="{
                          name: 'Produk',
                          params: {
                            slug: produk.slugName,
                            id: produk.id,
                            shopid: produk.shopID
                          }
                        }"
                      >
                        <img
                          :src="produk.photoURL || 'images/default.png'"
                          class="gambar"
                          alt=""
                        />
                      </router-link>
                      <h5
                        class="card-text"
                        style="margin-top: -100px; margin-left:110px; color:green;"
                      >
                        {{ produk.name }} X {{ produk.boughtKG }}KG
                      </h5>
                      <p class="card-text" style=" margin-left:110px">
                        <i class="fas fa-tag"></i>harga produk : Rp
                        {{ produk.pricePerKG }}
                      </p>
                      <br />
                      <br />
                      <br />
                    </span>
                    <b-button
                      pill
                      variant="danger"
                      style="margin-left: 10%"
                      @click="fulfillOrder(pro.id, index)"
                      v-if="pro.status == 'on_shipment'"
                      >Produk telah sampai</b-button
                    >
                    <h5 style="text-align: right; color:green;">
                      Total Bayar: Rp {{ pro.totalPrice }}
                    </h5>
                    <p style="text-align: right">
                      Waktu transaksi: {{ pro.payment.createdAt }}
                    </p>
                  </div>
                </div>
                <br />
              </span>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="tab-pane text-style" id="tab2">
            <div class=" con-w3l">
              <span v-for="(pro, index) in order" :key="index">
                <div class="card border-success">
                  <h5 class="card-header border-success">
                    <i class="fas fa-dolly"></i>Status : {{ pro.status }}
                  </h5>
                  <div class="card-body">
                    <span v-for="(produk, index) in pro.products" :key="index">
                      <router-link
                        :to="{
                          name: 'Produk',
                          params: {
                            slug: produk.slugName,
                            id: produk.id,
                            shopid: produk.shopID
                          }
                        }"
                      >
                        <img
                          :src="produk.photoURL || 'images/default.png'"
                          class="gambar"
                          alt=""
                        />
                      </router-link>
                      <h5
                        class="card-text"
                        style="margin-top: -100px; margin-left:110px; color:green;"
                      >
                        {{ produk.name }}

                        X {{ produk.boughtKG }}KG
                      </h5>
                      <p class="card-text" style=" margin-left:110px">
                        <i class="fas fa-tag"></i>harga produk : Rp
                        {{ produk.pricePerKG }}
                      </p>
                      <p class="card-text" style=" margin-left:110px">
                        No resi : XXXXXXXXXX
                      </p>
                      <br />
                      <br />
                      <br />
                    </span>
                    <b-button
                      pill
                      variant="secondary"
                      style="margin-left: 10%"
                      v-b-modal.modal-center
                      v-if="pro.status == 'on_shipment'"
                      >Tracking</b-button
                    >
                    <b-button
                      pill
                      variant="danger"
                      style="margin-left: 2%"
                      @click="fulfillOrder(pro.id, index)"
                      v-if="pro.status == 'on_shipment'"
                      >Produk telah sampai</b-button
                    >
                    <h5 style="text-align: right; color:green;">
                      Total Bayar: Rp {{ pro.totalPrice }}
                    </h5>
                    <p style="text-align: right">
                      Waktu transaksi: {{ pro.payment.createdAt }}
                    </p>
                  </div>
                </div>
                <br />
              </span>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="tab-pane  text-style" id="tab3">
            <div class=" con-w3l">
              <span v-for="(pro, index) in order" :key="index">
                <div class="card border-success">
                  <h5 class="card-header border-success">
                    <i class="fas fa-dolly"></i>Status : {{ pro.status }}
                  </h5>
                  <div class="card-body">
                    <span v-for="(produk, index) in pro.products" :key="index">
                      <router-link
                        :to="{
                          name: 'Produk',
                          params: {
                            slug: produk.slugName,
                            id: produk.id,
                            shopid: produk.shopID
                          }
                        }"
                      >
                        <img
                          :src="produk.photoURL || 'images/default.png'"
                          class="gambar"
                          alt=""
                        />
                      </router-link>
                      <h5
                        class="card-text"
                        style="margin-top: -100px; margin-left:110px; color:green;"
                      >
                        {{ produk.name }}
                        X {{ produk.boughtKG }}KG
                      </h5>
                      <p class="card-text" style=" margin-left:110px">
                        <i class="fas fa-tag"></i>harga produk : Rp
                        {{ produk.pricePerKG }}
                      </p>
                      <router-link
                        :to="{
                          name: 'Review',
                          params: {
                            produkid: produk.id,
                            shopid: produk.shopID,
                            token: token
                          }
                        }"
                        @click.native="$router.go()"
                      >
                        <b-button
                          pill
                          variant="danger"
                          style="margin-left: 10%"
                          v-if="pro.status == 'fulfilled'"
                          >Review produk</b-button
                        >
                      </router-link>
                      <br />
                      <br />
                      <br />
                    </span>
                    <h5 style="text-align: right; color:green;">
                      Total Bayar: Rp {{ pro.totalPrice }}
                    </h5>
                    <p style="text-align: right">
                      Waktu transaksi: {{ pro.payment.createdAt }}
                    </p>
                  </div>
                </div>
                <br />
              </span>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="tab-pane  text-style" id="tab4">
            <div class=" con-w3l">
              <span v-for="(pro, index) in order" :key="index">
                <div class="card border-success">
                  <h5 class="card-header border-success">
                    <i class="fas fa-dolly"></i>Status : {{ pro.status }}
                  </h5>
                  <div class="card-body">
                    <span v-for="(produk, index) in pro.products" :key="index">
                      <router-link
                        :to="{
                          name: 'Produk',
                          params: {
                            slug: produk.slugName,
                            id: produk.id,
                            shopid: produk.shopID
                          }
                        }"
                      >
                        <img
                          :src="produk.photoURL || 'images/default.png'"
                          class="gambar"
                          alt=""
                        />
                      </router-link>

                      <h5
                        class="card-text"
                        style="margin-top: -100px; margin-left:110px; color:green;"
                      >
                        {{ produk.name }}
                        X {{ produk.boughtKG }}KG
                      </h5>
                      <p class="card-text" style=" margin-left:110px">
                        <i class="fas fa-tag"></i>harga produk : Rp
                        {{ produk.pricePerKG }}
                      </p>
                      <br />
                      <br />
                      <br />
                    </span>
                    <b-button
                      pill
                      variant="danger"
                      style="margin-left: 10%"
                      @click="fulfillOrder(pro.id, index)"
                      v-if="pro.status == 'on_shipment'"
                      >Produk telah sampai</b-button
                    >
                    <h5 style="text-align: right; color:green;">
                      Total Bayar: Rp {{ pro.totalPrice }}
                    </h5>
                    <p style="text-align: right">
                      Waktu transaksi: {{ pro.payment.createdAt }}
                    </p>
                  </div>
                </div>
                <br />
              </span>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-center" centered title="Kurir A">
    <p class="my-4">Nomor Resi : XXXXXXXXXX</p>
  </b-modal>
  </div>
</template>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  name: "History",
  data() {
    return {
      token,
      order: [],
      produk: []
    };
  },
  created() {
    this.customerOrder("waiting_for_seller");
  },
  methods: {
    customerOrder(event) {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
           query{
            customerOrders(params: {status: "${event}"}){
              id
              customerID
              totalPrice
              status
              products{
                id
                name
                shopID
                boughtKG
                photoURL
                pricePerKG
                slugName
              }
              payment{
                createdAt
              }
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data order:", response.data);
          this.order = response.data.data.customerOrders;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    fulfillOrder(data, index) {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            mutation{
              fulfillOrder(orderID: ${data} ){
                success
              }
            }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          alert("Terimakasih sudah berbelanja di Tokocabai!");
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
<style scoped>
.gambar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
