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
            <div v-for="re in review" :key="re.id">
              <div>
                <div>
                  <div class="mb-2">
                    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                    <h5 class="inline">Blake Ruiz</h5>
                  </div>
                  <div class="media-body">
                    <star-rating
                      v-bind:read-only=true
                      inactive-color="#000"
                      active-color="yellow"
                      v-bind:star-size="15"
                      v-model="re.rating"
                    >
                    </star-rating>
                  </div>
                </div>
                <h5>{{ re.title }}</h5>
                <p>
                  {{ re.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  components: {
    StarRating
  },
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
      jumlah: null,
      review: []
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
          this.reviews();
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
    },
    reviews() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
          query{
          reviews(params:{
            shopID: "${this.$route.params.shopid}"
            productID: "${this.$route.params.id}"
          }){
            id
            title
            content
            photoURL
            rating
            createdAt
          }
        }
        `
        }
      })
        .then(response => {
          console.log("Data review:", response.data);
          this.review = response.data.data.reviews;
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
