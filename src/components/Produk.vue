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
              <p class="reduced ">Harga: Rp {{ produk.pricePerKG }} per/KG</p>
            </div>
            <div class="Stock">
              <p>Stock: {{ produk.stockKG }} KG</p>
            </div>
            <div class="block block-w3">
              <div class="starbox small ghosting"></div>
            </div>
            <p class="in-pa">{{ produk.description }}.</p>
            <div class="form-group row">
              <p for="inputNama3" style="margin-left:15px;">Pesan :</p>
              <div class="col-sm-3">
                <b-form-input
                  id="input-1"
                  v-model="jumlah"
                  type="number"
                  min="0"
                  step="any"
                  placeholder=""
                ></b-form-input>
              </div>
              <p>KG</p>
            </div>
            <span v-if="isLoggedIn == ''">
              <b-alert show variant="danger">Login sebagai pembeli</b-alert>
            </span>
            <span v-if="isLoggedIn && dataku.type == 1">
              <div class="add" style="float: left;">
                <button
                  class="btn btn-danger my-cart-btn my-cart-b"
                  v-on:click="createCart()"
                >
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
      <div
        class="tab-pane fade show active"
        id="review"
        role="tabpanel"
        aria-labelledby="review-tab"
      >
        <div class="row">
          <div class="col-lg-6">
            <div class="row total_rate">
              <div class="col-6">
                <div class="box_total">
                  <h5>Overall</h5>
                  <h4>4.0</h4>
                  <h6>(03 Reviews)</h6>
                </div>
              </div>
              <div class="col-6">
                <div class="rating_list">
                  <h3>Based on 3 Reviews</h3>
                  <ul class="list">
                    <li>
                      <a href="#"
                        >5 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> 01</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >4 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> 01</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >3 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> 01</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >2 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> 01</a
                      >
                    </li>
                    <li>
                      <a href="#">1 Star <i class="fas fa-star"></i> 01</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="review_list">
              <div>
                <div>
                  <div class="d-flex">
                    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                  </div>
                  <div class="media-body">
                    <h4>Blake Ruiz</h4>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="review_box">
              <h4>Add a Review</h4>
              <p>Your Rating:</p>
              <ul class="list">
                <li>
                  <a href="#">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
              </ul>
              <p>Outstanding</p>
              <form
                class="row contact_form"
                action="contact_process.php"
                method="post"
                novalidate="novalidate"
              >
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Your Full name"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="1"
                      placeholder="Review"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12 text-right">
                  <button type="submit" value="submit" class="btn_3">
                    Submit Now
                  </button>
                </div>
              </form>
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
  name: "Produk",
  data() {
    return {
      dataku: [],
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      toko: [],
      token,
      shop_id: null,
      cart: [],
      jumlah: null
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
    },
    createCart() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
          mutation{
            createCart(params:{
              productID: ${parseInt(this.$route.params.id)}
              quantityKG: ${parseFloat(this.jumlah)}
            }){
              id
              product{
                id
                photoURL
                pricePerKG
                stockKG
                name
                category
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
          this.cart = response.data.data.createCart;
          alert("Produk berhasil masuk keranjang");
        })
        .catch(function(error) {
          alert("Data tidak sesuai");
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
