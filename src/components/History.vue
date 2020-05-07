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
              <a href="#tab1" class="nav-shop" data-toggle="tab"
                >Pemesanan cabai</a
              >
            </li>
            <li class="">
              <a href="#tab2" class="nav-shop" data-toggle="tab"
                >Pemesanan selesai</a
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
                      <img
                        :src="produk.photoURL || 'images/default.png'"
                        class="gambar"
                        alt=""
                      />
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
              <div class="card border-success">
                <h5 class="card-header border-success">Featured</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="tab-pane  text-style" id="tab3">
            <div class=" con-w3l">
              <div class="card border-success">
                <h5 class="card-header border-success">Featured</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-success" style="float: right;"
                    >Produk diterima</a
                  >
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    this.customerOrder();
  },
  methods: {
    customerOrder() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
           query{
            customerOrders(token: "${token}"){
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
