<template>
  <div class="single">
    <div class="spec">
      <h3>Detail Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <div class="container">
      <div class="mb-2">
        <b-avatar
          variant="success"
          :src="toko.photoURL || 'images/default.png'"
          size="4rem"
        ></b-avatar>
        <router-link
          :to="{
            name: 'Shop_detail',
            params: { id: produk.shopID }
          }"
        >
          <h4 class="inline">{{ toko.name }}</h4></router-link
        >
      </div>
      <div class="single-top-main">
        <div class="col-md-5 single-top">
          <div class="single-w3agile">
            <div id="picture-frame">
              <img
                :src="produk.photoURL"
                data-src="images/si-1.jpg"
                alt=""
                class="img-responsive"
              />
            </div>
          </div>
        </div>
        <div class="col-md-7 single-top-left ">
          <div class="single-right">
            <h3>{{ produk.name }}</h3>
            <div class="pr-single">
              <p class="reduced ">Rp {{ produk.pricePerKG }} per/KG</p>
            </div>
            <div class="Stock">
              <p>stock: {{ produk.stockKG }} KG</p>
            </div>
            <div class="block block-w3">
              <div class="starbox small ghosting"></div>
            </div>
            <p class="in-pa">deskripsi barang : {{ produk.description }}.</p>
            <div class="form-group row">
              <label for="inputNama3" class="col-sm-2 col-form-label"
                >Jumlah :</label
              >
              <div class="col-sm-3">
                <input
                  type="nama"
                  class="form-control"
                  id="inputNama3"
                  placeholder="Jumlah"
                />
              </div>
              <div class="col-sm-3">
                <select class="form-control" id="sel1">
                  <option>Kg</option>
                  <option>Ton</option>
                  <option>ons</option>
                </select>
              </div>
            </div>
            <span v-if="isLoggedIn == ''">
              <b-alert show variant="danger">Login sebagai pembeli</b-alert>
            </span>
            <span v-if="isLoggedIn && dataku.type == 1">
              <div class="add" style="float: left;">
                <button class="btn btn-danger my-cart-btn my-cart-b">
                  Add to Cart
                </button>
              </div>
            </span>

            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col-sm-3">
          <div class="rating-block">
            <h4>Average user rating</h4>
            <h2 class="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              aria-label="Left Align"
            >
              <span class="fas fa-star" aria-hidden="true"></span>
            </button>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              aria-label="Left Align"
            >
              <span class="fas fa-star" aria-hidden="true"></span>
            </button>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              aria-label="Left Align"
            >
              <span class="fas fa-star" aria-hidden="true"></span>
            </button>
            <button
              type="button"
              class="btn btn-default btn-grey btn-sm"
              aria-label="Left Align"
            >
              <span class="fas fa-star" aria-hidden="true"></span>
            </button>
            <button
              type="button"
              class="btn btn-default btn-grey btn-sm"
              aria-label="Left Align"
            >
              <span class="fas fa-star" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div class="col-sm-3">
          <h4>Rating breakdown</h4>
          <div class="pull-left">
            <div class="pull-left" style="width:35px; line-height:1;">
              <div style="height:9px; margin:5px 0;">
                5 <span class="fas fa-star"></span>
              </div>
            </div>
            <div class="pull-left" style="width:180px;">
              <div class="progress" style="height:9px; margin:8px 0;">
                <div
                  class="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="5"
                  style="width: 1000%"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="pull-right" style="margin-left:10px;">1</div>
          </div>
          <div class="pull-left">
            <div class="pull-left" style="width:35px; line-height:1;">
              <div style="height:9px; margin:5px 0;">
                4 <span class="fas fa-star"></span>
              </div>
            </div>
            <div class="pull-left" style="width:180px;">
              <div class="progress" style="height:9px; margin:8px 0;">
                <div
                  class="progress-bar progress-bar-primary"
                  role="progressbar"
                  aria-valuenow="4"
                  aria-valuemin="0"
                  aria-valuemax="5"
                  style="width: 80%"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="pull-right" style="margin-left:10px;">1</div>
          </div>
          <div class="pull-left">
            <div class="pull-left" style="width:35px; line-height:1;">
              <div style="height:9px; margin:5px 0;">
                3 <span class="fas fa-star"></span>
              </div>
            </div>
            <div class="pull-left" style="width:180px;">
              <div class="progress" style="height:9px; margin:8px 0;">
                <div
                  class="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow="3"
                  aria-valuemin="0"
                  aria-valuemax="5"
                  style="width: 60%"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="pull-right" style="margin-left:10px;">0</div>
          </div>
          <div class="pull-left">
            <div class="pull-left" style="width:35px; line-height:1;">
              <div style="height:9px; margin:5px 0;">
                2 <span class="fas fa-star"></span>
              </div>
            </div>
            <div class="pull-left" style="width:180px;">
              <div class="progress" style="height:9px; margin:8px 0;">
                <div
                  class="progress-bar progress-bar-warning"
                  role="progressbar"
                  aria-valuenow="2"
                  aria-valuemin="0"
                  aria-valuemax="5"
                  style="width: 40%"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="pull-right" style="margin-left:10px;">0</div>
          </div>
          <div class="pull-left">
            <div class="pull-left" style="width:35px; line-height:1;">
              <div style="height:9px; margin:5px 0;">
                1 <span class="fas fa-star"></span>
              </div>
            </div>
            <div class="pull-left" style="width:180px;">
              <div class="progress" style="height:9px; margin:8px 0;">
                <div
                  class="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="1"
                  aria-valuemin="0"
                  aria-valuemax="5"
                  style="width: 20%"
                >
                  <span class="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div class="pull-right" style="margin-left:10px;">0</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-7">
          <hr />
          <div class="review-block">
            <div class="row">
              <div class="col-sm-3">
                <img
                  src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                  class="img-rounded"
                />
                <div class="review-block-name">
                  <a href="#">nktailor</a>
                </div>
                <div class="review-block-date">
                  January 29, 2016<br />1 day ago
                </div>
              </div>
              <div class="col-sm-9">
                <div class="review-block-rate">
                  <button
                    type="button"
                    class="btn btn-warning btn-xs"
                    aria-label="Left Align"
                  >
                    <span class="fas fa-star" aria-hidden="true"></span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning btn-xs"
                    aria-label="Left Align"
                  >
                    <span class="fas fa-star" aria-hidden="true"></span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning btn-xs"
                    aria-label="Left Align"
                  >
                    <span class="fas fa-star" aria-hidden="true"></span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-default btn-grey btn-xs"
                    aria-label="Left Align"
                  >
                    <span class="fas fa-star" aria-hidden="true"></span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-default btn-grey btn-xs"
                    aria-label="Left Align"
                  >
                    <span class="fas fa-star" aria-hidden="true"></span>
                  </button>
                </div>
                <div class="review-block-title">this was nice in buy</div>
                <div class="review-block-description">
                  this was nice in buy. this was nice in buy. this was nice in
                  buy. this was nice in buy this was nice in buy this was nice
                  in buy this was nice in buy this was nice in buy
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    >
  </div>
</template>

<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  name: "Produk",
  data() {
    return {
      dataku: [],
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      toko: [],
      token,
      shop_id: null
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadProduk() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            {
            product(params: {
              id: ${this.$route.params.id}
            }) {
              shopID
              name
              pricePerKG
              stockKG
              description
              photoURL
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.produk = response.data.data.product;
          this.loadToko();
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
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
                  province
                  type
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data user:", response.data);
          this.dataku = response.data.data.getUserInfo;
          this.loadProduk();
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    loadToko() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            query{
                getUserByID(userID:
                  ${parseInt(this.produk.shopID)}
                ){
                  id
                  name
                  photoURL
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.toko = response.data.data.getUserByID;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
@import "../assets/Shop/css_tambahan.css";
</style>
