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
            src="https://placekitten.com/300/300"
            size="4rem"
          ></b-avatar>
          <router-link to="/shop_detail">
            <h4 class="inline">Pokikik_Store</h4></router-link
          >
        </div>
        <b-card-text>
          <a class="font-weight-bold"> Deskripsi toko: </a>
        </b-card-text>
        <b-card-text>
          <i class="fas fa-map-marked-alt"></i>
          <a class="font-weight-bold"> Alamat toko:</a>
          asljaksdakjhsfjhaslfkhlakshflkashfksfalhlkfhsakfhalhfl
        </b-card-text>
      </b-card>
      <b-card header-tag="header" footer-tag="footer">
        <b-card-text><i class="fas fa-store"></i> 100 produk</b-card-text>
        <b-card-text>
          <i class="fas fa-user-check"></i> Bergabng :
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter Pencarian
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Harga termurah</a>
                <a class="dropdown-item" href="#">Harga termahal</a>
                <a class="dropdown-item" href="#">Produk terpopuler</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div class="tab-content tab-content-t">
        <div class="tab-pane active text-style" id="tab1">
          <div class=" con-w3l">
            <div class="col-md-3 m-wthree" v-for="pro in produk" :key="pro.id">
              <div class="col-m">
                <p style="color: orange; ">Toko:</p>
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
                      <a href="single.html" style="font-weight: bold;">{{
                        pro.name
                      }}</a>
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
                      Add to Cart
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
    this.loadProduk();
  },
  methods: {
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
                  name
                  email
                  phone
                  type
                  addressDetail
                  province
                  zipCode
                  photoURL
                  description
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.dataku = response.data.data.getUserInfo;
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
                shopID: 6
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
