<template>
  <div>
    <br />
    <br />
    <div class="content-top">
      <div class="container">
        <div class="spec">
          <h3>Tokocabai</h3>
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
                  class="font"
                  data-toggle="tab"
                  v-on:click="filterCategory('Cabai Merah Besar')"
                  >Cabai Merah Besar</a
                >
              </li>
              <li class="">
                <a
                  href="#tab2"
                  class="font"
                  data-toggle="tab"
                  v-on:click="filterCategory('Cabai Merah Keriting')"
                  >Cabai Merah Keriting</a
                >
              </li>
              <li class="">
                <a
                  href="#tab3"
                  class="font"
                  data-toggle="tab"
                  v-on:click="filterCategory('Cabai Rawit')"
                  >Cabai Rawit</a
                >
              </li>
            </ul>
          </nav>
          <div>
            <b-navbar toggleable="lg" type="dark" variant="success">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item-dropdown text="Filter pencarian" right>
                    <b-dropdown-item v-on:click="filterHarga('asc', kategori)"
                      >Harga Termurah</b-dropdown-item
                    >
                    <b-dropdown-item v-on:click="filterHarga('desc', kategori)"
                      >Harga Termahal</b-dropdown-item
                    >
                    <span v-if="isLoggedIn">
                      <b-dropdown-item
                        v-on:click="filterProvince(dataku.province, kategori)"
                        >Provinsi user</b-dropdown-item
                      >
                    </span>
                  </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                    <b-form-input
                      v-model="search"
                      size="sm"
                      class="mr-sm-2"
                      placeholder="Search"
                    ></b-form-input>
                    <b-button
                      size="sm"
                      class="my-2 my-sm-0"
                      v-on:click="filterSearch(search, kategori)"
                      >Search</b-button
                    >
                  </b-nav-form>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
          <div></div>
          <br />
          <div class="tab-content tab-content-t">
            <div class="tab-pane active text-style" id="tab1">
              <div class=" con-w3l">
                <div
                  class="col-md-3 m-wthree"
                  v-for="pro in produk"
                  :key="pro.id"
                >
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
                          class="text-truncate font"
                          style="font-weight: bold; max-width: 150px;"
                        >
                          {{ pro.name }}
                        </div>
                      </router-link>
                    </h6>

                    <div>
                      Harga :
                      <div class="text-truncate inline" style="color: green;">
                        Rp {{ pro.pricePerKG }}
                      </div>
                    </div>

                    <div>
                      Stock :
                      <div class="text-truncate inline" style="color: red;">
                        {{ pro.stockKG }} KG
                      </div>
                    </div>

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

            <div class="tab-pane text-style" id="tab2">
              <div class=" con-w3l">
                <div
                  class="col-md-3 m-wthree"
                  v-for="pro in produk"
                  :key="pro.id"
                >
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
                          class="text-truncate font"
                          style="font-weight: bold; max-width: 150px;"
                        >
                          {{ pro.name }}
                        </div>
                      </router-link>
                    </h6>

                    <div>
                      Harga :
                      <div class="text-truncate inline" style="color: green;">
                        Rp {{ pro.pricePerKG }}
                      </div>
                    </div>

                    <div>
                      Stock :
                      <div class="text-truncate inline" style="color: red;">
                        {{ pro.stockKG }} KG
                      </div>
                    </div>

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
            <div class="tab-pane  text-style" id="tab3">
              <div class=" con-w3l">
                <div
                  class="col-md-3 m-wthree"
                  v-for="pro in produk"
                  :key="pro.id"
                >
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
                          class="text-truncate font"
                          style="font-weight: bold; max-width: 150px;"
                        >
                          {{ pro.name }}
                        </div>
                      </router-link>
                    </h6>

                    <div>
                      Harga :
                      <div class="text-truncate inline" style="color: green;">
                        Rp {{ pro.pricePerKG }}
                      </div>
                    </div>

                    <div>
                      Stock :
                      <div class="text-truncate inline" style="color: red;">
                        {{ pro.stockKG }} KG
                      </div>
                    </div>

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
    </div>
  </div>
</template>
<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
@import "../assets/Shop/jstarbox.css";
@import "../assets/Shop/css_tambahan.css";
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
  name: "Produk",
  data() {
    return {
      search: "",
      token,
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      dataku: [],
      barang: [],
      shop: [],
      kategori: "",
      category: [
        { value: "Cabai Merah Keriting", text: "Berdasarkan provinsi" },
        { value: "Cabai Merah Besar", text: "Harga termurah" },
        { value: "Cabai Rawit", text: "Produk terbanyak dibeli" }
      ]
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    data_user: function() {
      return this.$store.state.data_id;
    }
  },
  created() {
    this.loadProduk();
  },
  methods: {
    loadProduk() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                searchProducts(params:{
                  category: "Cabai Merah Besar"
                }
                ){
                  id
                  shopID
                  name
                  pricePerKG
                  photoURL
                  stockKG
                  category
                  slugName
                  averageRating
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data produk :", response.data);
          this.produk = response.data.data.searchProducts;
          this.kategori = "Cabai Merah Besar";
          console.log("kategori:", this.kategori);
          this.loadData();
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    filterCategory(event) {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                searchProducts(params:{
                  category: "${event}"
                }
                ){
                  id
                  shopID
                  name
                  pricePerKG
                  photoURL
                  stockKG
                  category
                  slugName
                  averageRating
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data filter category :", response.data);
          this.produk = response.data.data.searchProducts;
          this.kategori = event;
          console.log("kategori:", this.kategori);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    filterSearch(event, event1) {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                searchProducts(params:{
                  search: "${event}"
                  category:  "${event1}"
                }
                ){
                  id
                  shopID
                  name
                  pricePerKG
                  photoURL
                  stockKG
                  category
                  slugName
                  averageRating
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data search :", event1);
          this.produk = response.data.data.searchProducts;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    filterProvince(event, kategori) {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                searchProducts(params:{
                  province: "${event}"
                  category: "${kategori}"
                }
                ){
                  id
                  shopID
                  name
                  pricePerKG
                  photoURL
                  stockKG
                  category
                  averageRating
                  slugName
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data produk provinsi :", response.data);
          this.produk = response.data.data.searchProducts;
          console.log("kategori:", this.kategori);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    filterHarga(event, kategori) {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            {
            searchProducts(params: { orderType: "${event}"
            orderBy: "price_per_kg"
            category:"${kategori}"}) {
              id
              shopID
              name
              pricePerKG
              photoURL
              stockKG
              category
              slugName
              averageRating
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data filter harga:", response.data);
          this.produk = response.data.data.searchProducts;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    loadData() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                getUserInfo(token:
                  "${token}"
                ){
                  id
                  province
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
    }
  }
};
</script>
