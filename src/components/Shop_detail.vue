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
      <nav class="nav justify-content-center">
        <ul id="active-nav" class="nav tabs">
          <li class="">
            <a href="#tab1" class="nav-shop" data-toggle="tab"></a>
          </li>
        </ul>
      </nav>
      <hr />
      <div class="tab-content tab-content-t">
        <div class="tab-pane active text-style" id="tab1">
          <div class=" con-w3l">
            <div class="col-md-3 m-wthree" v-for="pro in produk" :key="pro.id">
              <div class="col-m">
                <p style="color: orange; ">Toko: {{ dataku.name }}</p>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#myModal7"
                  class="offer-img"
                >
                  <img :src="pro.photoURL" class="img-responsive" alt="" />
                  <div class="offer">
                    <p><span>Offer</span></p>
                  </div>
                </a>
                <div class="mid-1">
                  <div class="women">
                    <h6>
                      <a style="font-weight: bold;">{{ pro.name }}</a>
                    </h6>
                  </div>
                  <div class="mid-2">
                    <p>
                      Harga:
                      <em class="item_price">Rp. {{ pro.pricePerKG }}</em>
                    </p>
                    <div class="block">
                      <p style="color: red;">Stock : {{ pro.stockKG }} KG</p>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="add">
                    <button
                      class="btn btn-danger my-cart-btn my-cart-b"
                      data-id="7"
                      data-name="Popcorn"
                      data-summary="summary 7"
                      data-price="1.00"
                      data-quantity="1"
                      data-image="images/of6.png"
                    >
                      Detail
                    </button>
                  </div>
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
