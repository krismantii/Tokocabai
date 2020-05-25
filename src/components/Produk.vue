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
      <span v-if="isLoggedIn == ''">
        <b-alert show dismissible>
          Login untuk bisa akses semua fitur di website Tokocabai~
          <b>&rArr;</b>
        </b-alert>
      </span>
      <div class="mb-2">
        <b-avatar
          variant="success"
          :src="toko.photoURL || 'images/default.png'"
          size="4rem"
        ></b-avatar>
        <router-link
          :to="{
            name: 'Shop_detail',
            params: { id: toko.id }
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
            <star-rating
              v-bind:read-only="true"
              v-bind:increment="0.5"
              v-bind:show-rating="false"
              inactive-color="#000"
              active-color="yellow"
              v-bind:star-size="20"
              v-model="produk.averageRating"
            >
            </star-rating>
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
            <span v-if="isLoggedIn && dataku.type == 1">
              <div class="form-group row">
                <p for="inputNama3" style="margin-left:15px;">Pesan :</p>
                <div class="col-sm-3">
                  <b-form-input
                    id="input-1"
                    v-model="jumlah"
                    type="number"
                    min="0"
                    step="any"
                    required
                    placeholder=""
                  ></b-form-input>
                </div>
                <p>KG</p>
              </div>
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
      {{ data_review_user }}
      {{ jumlah_review }}
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
                  <h4>{{ produk.averageRating }}</h4>
                  <h6>({{ produk.totalReviews }} Reviews)</h6>
                </div>
              </div>
              <div class="col-6">
                <div class="rating_list">
                  <h3>Based on {{ produk.totalReviews }} Reviews</h3>
                  <ul class="list">
                    <li>
                      <a href="#"
                        >5 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> ({{ count.count5 }})</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >4 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> ({{ count.count4 }})</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >3 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> ({{ count.count3 }})</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >2 Star
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i> ({{ count.count2 }})</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        >1 Star <i class="fas fa-star"></i> ({{
                          count.count1
                        }})</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {{ deldataduplicate }}
            <div v-for="re in review" :key="re.id">
              <div>
                <div>
                  <div class="mb-2" v-for="rev in uniqueArray" :key="rev.id">
                    <div v-if="rev.id === re.userID">
                      <b-avatar :src="rev.photoURL"></b-avatar>
                      <h5 class="inline">{{ rev.name }}</h5>
                      <router-link
                        :to="{
                          name: 'Edit_review',
                          params: {
                            id: re.id,
                            shopid: $route.params.shopid,
                            produkid: $route.params.id,
                            token: token
                          }
                        }"
                        @click.native="$router.go()"
                        class="fas fa-edit"
                        style="color: grey; margin-left: 10px;"
                        v-if="dataku.id === re.userID"
                      ></router-link>
                    </div>
                  </div>
                </div>
                <div class="media-body">
                  <star-rating
                    v-bind:read-only="true"
                    inactive-color="#000"
                    active-color="yellow"
                    v-bind:star-size="10"
                    v-model="re.rating"
                  >
                  </star-rating>
                </div>
                <h5>{{ re.title }}</h5>
                <p>
                  {{ re.content }}
                </p>
                <a style="font-size:11px;"> {{ re.createdAt }}</a>
              </div>
              <div v-if="re.photoURL !== null">
                <img style="width:100px; height:100px" :src="re.photoURL" />
              </div>
              <br />
              <br />
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
      nama: "",
      shop_id: null,
      cart: [],
      jumlah: null,
      review: [],
      reviewers: [],
      uniqueArray: [],
      count: {
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        count5: 0
      }
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    data_review_user: function() {
      return this.user_review(this.review);
    },
    deldataduplicate: function() {
      return this.del(this.reviewers);
    },
    jumlah_review: function() {
      return this.review_count(this.review);
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
              totalReviews
              averageRating
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data produk:", response.data);
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
    user_review(event) {
      for (let i = 0; i < event.length; i++) {
        axios({
          method: "post",
          url: "http://localhost:4000/query",
          data: {
            query: `
            query{
                getUserByID(userID:
                  ${parseInt(event[i].userID)}
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
            this.reviewers.push(response.data.data.getUserByID);
          })
          .catch(function(error) {
            console.log(error);
            console.log("error");
          });
      }
    },
    review_count(event) {
      for (let i = 0; i < event.length; i++) {
        if (event[i].rating == 5) {
          this.count.count5++;
        } else if (event[i].rating == 4) {
          this.count.count4++;
        } else if (event[i].rating == 3) {
          this.count.count3++;
        } else if (event[i].rating == 2) {
          this.count.count2++;
        } else if (event[i].rating == 1) {
          this.count.count1++;
        }
      }
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
    del(event) {
      const jsonObject = event.map(JSON.stringify);
      console.log(jsonObject);
      const uniqueSet = new Set(jsonObject);
      this.uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      console.log(this.uniqueArray);
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
            userID
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
img[src=""],
img:not([src]) {
  display: none;
}

img[src="*"] {
  opacity: 1;
}
</style>
