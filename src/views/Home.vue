/* eslint-disable prettier/prettier */
<template>
  <div>
    <!-- Masthead -->
    <header class="masthead">
      <div class="container h-100">
        <div
          class="row h-100 align-items-center justify-content-center text-center"
        >
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">
              Cabai Merah Asli Indonesia
            </h1>
          </div>
          <div class="col-lg-8 align-self-baseline">
            <br />
            <a class="btn btn-success btn-xl js-scroll-trigger" href="#about"
              >Introduction</a
            >
          </div>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section class="page-section bg-success" id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">Apa itu "Tokocabai"?</h2>
            <hr class="mx-auto divider light my-4" />
            <p class="text-white-50 mb-4">
              Tokocabai merupakan e-commerce pertama di Indoensia yang menjual
              berbagai produk cabai merah segar langsung dari petani lokal.
              Aplikasi ini diharapkan mampu mensejahterakan petani lokal di
              Indonesia dengan memperpendek rantai distribusi produk cabai yang
              panjang. Hal tersebut dapat memberikan kesempatan petani untuk
              mendapat harga jual yang lebih bagus. Ayo ikut andil dalam
              mensejahterakan petani lokal di Indonesia!
            </p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="#services"
              >Ayo mulai sekarang!</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="page-section" id="services">
      <div class="container">
        <h2 class="text-center mt-0">Keunggulan Aplikasi Tokocabai</h2>
        <hr class="mx-auto divider my-4" />
        <div class="row">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-thumbs-up text-danger mb-4"></i>
              <h3 class="h4 mb-2">Terpercaya</h3>
              <p class="text-muted mb-0">
                Produk petani lokal asli Indonesia
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-globe text-danger mb-4"></i>
              <h3 class="h4 mb-2">Mudah</h3>
              <p class="text-muted mb-0">
                Bisa di akses di mana saja dan kapan saja
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-fighter-jet text-danger mb-4"></i>
              <h3 class="h4 mb-2">Cepat</h3>
              <p class="text-muted mb-0">
                Pengiriman di seluruh Indonesia
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <i class="fas fa-4x fa-heart text-danger mb-4"></i>
              <h3 class="h4 mb-2">Berkualitas</h3>
              <p class="text-muted mb-0">
                Cabai di produksi sepenuh hati oleh petani lokal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section>
      <div class="content-top">
        <div class="container">
          <div class="spec">
            <h3>Shop</h3>
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
                            <button
                              class="btn btn-danger my-cart-btn my-cart-b"
                            >
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

              <div class="tab-pane  text-style" id="tab2">
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
                            <button
                              class="btn btn-danger my-cart-btn my-cart-b"
                            >
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
                            <button
                              class="btn btn-danger my-cart-btn my-cart-b"
                            >
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
    </section>
    <br />
    <br />
    <!-- Call to Action Section -->
    <section class="page-section bg-success text-white">
      <div class="container text-center">
        <h2 class="text-white mb-4">
          Cari lebih banyak produk
        </h2>
        <router-link to="/shop" class="btn btn-light btn-xl">
          see more</router-link
        >
      </div>
    </section>

    <!-- Contact Section -->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Let's Get In Touch!</h2>
            <hr class="mx-auto divider my-4" />
            <p class="text-muted mb-5">
              Bila ada kritik dan saran, bisa menghubungi kontak di bawah ini :
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
            <div>+62 813 8338 5553</div>
          </div>
          <div class="col-lg-4 mr-auto text-center">
            <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <!-- Make sure to change the email address in anchor text AND the link below! -->
            <a class="d-block">tokocabai2020@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
const token = localStorage.getItem("token");
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      produk: [],
      token,
      dataku: []
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
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
                  limit: 4
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
                  totalReviews
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data produk :", response.data);
          this.produk = response.data.data.searchProducts;
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
                  limit: 4
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
                  totalReviews
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data filter category :", response.data);
          this.produk = response.data.data.searchProducts;
          this.kategori = event;
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
