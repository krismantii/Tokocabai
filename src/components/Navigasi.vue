<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container">
      <router-link to="/" class="navbar-brand js-scroll-trigger">
        Tokocabai</router-link
      >
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <span v-if="isLoggedIn">
            <li class="nav-item">
              <button @click="logout" class="set">Logout</button>
            </li>
          </span>
          <span v-if="isLoggedIn">
            <li class="nav-item">
              <button>
                <router-link
                  class="set font"
                  to="/about"
                  @click.native="$router.go()"
                >
                  About</router-link
                >
              </button>
            </li>
          </span>
          <span v-if="isLoggedIn == ''">
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
                @click.native="$router.go()"
              >
                Masuk</router-link
              >
            </li>
          </span>
          <span v-if="isLoggedIn == ''">
            <li class="nav-item">
              <router-link
                to="/register"
                class="nav-link"
                @click.native="$router.go()"
              >
                Daftar</router-link
              >
            </li>
          </span>
          <span v-if="isLoggedIn">
            <li class=" nav-item">
              <router-link
                :to="{
                  name: 'Profil',
                  params: { token: token }
                }"
                @click.native="$router.go()"
                class="fas fa-user set"
              >
              </router-link>
            </li>
          </span>
          <span v-if="isLoggedIn && dataku.type == 1">
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'Keranjang',
                  params: { token: token }
                }"
                @click.native="$router.go()"
                class="fas fa-shopping-cart set"
              ></router-link>
              <span class="badge badge-light posisi">{{
                count_cart.length
              }}</span>
            </li>
          </span>
        </ul>
      </div>
    </div>
    {{ data_keranjang }}
  </nav>
</template>

<style scoped>
@import "../assets/Shop/font-awesome.css";
@import "../assets/navigasi.css";
.set {
  padding: 0px 10px;
}
.set:hover {
  color: red;
}
.posisi {
  position: absolute;
  margin-left: -10px;
  margin-top: -10px;
}
</style>

<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      //dataku merupakan variabel yg menampung data array JSON
      dataku: [],
      token,
      count_cart: []
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    data_keranjang: function() {
      return this.jumlah_cart();
    }
  },
  created() {
    this.DataUser();
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    jumlah_cart() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
            carts(params:{
                  userID: ${this.dataku.id}
                }){
              id
            }
          }
        `
        }
      }).then(response => {
        console.log("Data cart:", response.data);
        this.count_cart = response.data.data.carts;
      });
    },
    DataUser() {
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
                  type
                }
              }
        `
        }
      })
        .then(response => {
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
