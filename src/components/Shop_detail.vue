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
          <a class="font-weight-bold"> Deskripsi toko:</a>
          <a style="color:green;"> {{ dataku.description }} </a>
        </b-card-text>
        <b-card-text>
          <i class="fas fa-map-marked-alt"></i>
          <a class="font-weight-bold"> Alamat toko:</a>
          {{ dataku.addressDetail }}
        </b-card-text>
      </b-card>
      <b-card header-tag="header" footer-tag="footer">
        <b-card-text><i class="fas fa-store"></i> 100 produk</b-card-text>
        <b-card-text>
          <i class="fas fa-user-check"></i> Bergabng : {{ dataku.createdAt }}
        </b-card-text>
        <b-card-text
          ><i class="fas fa-grin-hearts"></i> 10000 disukai</b-card-text
        >
        <template v-slot:footer>
          <a href="#" class="fab fa-facebook-f "></a>
          <a href="#" class="fab fa-instagram margin"></a>
          <a href="#" class="fab fa-twitter margin"></a>
        </template>
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
                <div class="mid-1">
                  <div class="women">
                    <h6>
                      <router-link
                        :to="{
                          name: 'Produk',
                          params: { slug: pro.slugName, id: pro.id }
                        }"
                      >
                        <a style="font-weight: bold;">{{ pro.name }}</a>
                      </router-link>
                    </h6>
                  </div>

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
                    <b-alert show variant="danger"
                      >Login sebagai pembeli</b-alert
                    >
                  </span>
                  <span v-if="isLoggedIn">
                    <div class="add">
                      <router-link
                        :to="{
                          name: 'Produk',
                          params: { slug: pro.slugName, id: pro.id }
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
export default {
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
        url: "http://localhost:4000/query",
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
        url: "http://localhost:4000/query",
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
