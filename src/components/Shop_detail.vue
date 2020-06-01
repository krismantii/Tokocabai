<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <b-card-group deck>
      <b-card>
        <div class="mb-2">
          <b-avatar
            variant="success"
            :src="dataku.photoURL || 'images/default.png'"
            size="4rem"
          ></b-avatar>
          <h4 class="inline">{{ dataku.name }}</h4>
        </div>
        <b-card-text>
          <a style="color:green;"> {{ dataku.description }} </a>
        </b-card-text>
      </b-card>
      <b-card header-tag="header" footer-tag="footer">
       <b-card-text>
          <i class="fas fa-map-marked-alt"></i>
          {{ dataku.addressDetail }}
        </b-card-text>
        <b-card-text style="margin-left:20px"> Provinsi : {{ dataku.province }} | zipcode : {{dataku.zipCode}} </b-card-text>
        <b-card-text>
          <i class="fas fa-user-check"></i> Bergabung : {{ dataku.createdAt }}
        </b-card-text>
      </b-card>
    </b-card-group>
    <br />
    <br />
    <div class="spec">
      <h3>Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <div class="tab-head">
      <hr />
      <div class="tab-content tab-content-t">
        <div class="tab-pane active text-style" id="tab1">
          <div class=" con-w3l">
            <div class="col-md-3 m-wthree" v-for="pro in produk" :key="pro.id">
              <div class="col-m">
                <a class="center">
                  <img :src="pro.photoURL" class="gambar" alt="" />
                </a>
                <br />
                <div style="float:right;">
                  <star-rating
                    v-bind:increment="0.5"
                    v-bind:show-rating="false"
                    v-bind:read-only="true"
                    inactive-color="#000"
                    active-color="yellow"
                    v-bind:star-size="10"
                    v-model="pro.averageRating"
                  >
                  </star-rating>
                </div>
                <h6>
                  <router-link
                    :to="{
                      name: 'Produk',
                      params: {
                        slug: pro.slugName,
                        id: pro.id,
                        shopid: pro.shopID
                      }
                    }"
                  >
                    <div
                      class="text-truncate"
                      style="font-weight: bold; max-width: 150px;"
                    >
                      {{ pro.name }}
                    </div>
                  </router-link>
                </h6>

                <p>
                  Harga:
                  <a style="color: green;"> Rp {{ pro.pricePerKG }} </a>
                </p>

                <p>
                  Stock :
                  <a style="color: red;">{{ pro.stockKG }} KG </a>
                </p>

                <div class="clearfix"></div>

                <span v-if="isLoggedIn == ''">
                  <b-alert show variant="danger">Login sebagai pembeli</b-alert>
                </span>
                <span v-if="isLoggedIn">
                  <div class="add">
                    <router-link
                      :to="{
                        name: 'Produk',
                        params: {
                          slug: pro.slugName,
                          id: pro.id,
                          shopid: pro.shopID
                        }
                      }"
                    >
                      <button class="btn btn-danger my-cart-btn my-cart-b">
                        Detail
                      </button>
                    </router-link>
                  </div>
                </span>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
@import "../assets/Shop/jstarbox.css";
@import "../assets/Shop/css_tambahan.css";
.margin {
  margin-left: 10 px;
}
.gambar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      token,
      dataku: [],
      produk: []
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
    loadData() {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
            query{
                getUserByID(userID:
                  ${parseInt(this.$route.params.id)}
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
                  description
                  createdAt
                  photoURL
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.dataku = response.data.data.getUserByID;
          this.loadProduk();
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    loadProduk() {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
            query{
              productsByShop(params:{
                shopID:  ${parseInt(this.$route.params.id)}
              }
              ){
                id
                name
                pricePerKG
                photoURL
                category
                stockKG
                shopID
                slugName
                averageRating
                totalReviews
              }
            }
        `
        }
      }).then(response => {
        console.log("Data produk :", response.data);
        this.produk = response.data.data.productsByShop;
      });
    }
  }
};
</script>
