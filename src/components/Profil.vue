<template>
  <div class="bodi">
    <span v-if="dataku.type == 1">
      <div class="contact">
        <div class="container">
          <div class="spec ">
            <h3>Profil Pribadi</h3>
            <div class="ser-t">
              <b></b>
              <span><i></i></span>
              <b class="line"></b>
            </div>
          </div>
          <div class=" contact-w3">
            <div class="col-md-5 contact-right">
              <img src="images/hello.jpg" class="img-responsive" alt="" />
            </div>
            <div class="col-md-7 contact-left">
              <h4>{{ dataku.name }}</h4>
              <p>
                <i class="fas fa-address-book" aria-hidden="true"></i>
                Alamat pengiriman : {{ dataku.address }}
              </p>
              <ul class="contact-list">
                <li>
                  <i class="fas fa-envelope" aria-hidden="true"></i
                  ><a>{{ dataku.email }}</a>
                </li>
                <li>
                  <i class="fas fa-phone" aria-hidden="true"></i
                  >{{ dataku.phone }}
                </li>
              </ul>
              <div>
                <br />
                <router-link
                  to="/edit_profil"
                  class="btn btn-outline-danger btn-xl"
                  style="float: right;"
                  @click.native="$router.go()"
                >
                  Edit Profil Pribadi</router-link
                >
              </div>
              <!--Plug-in Initialisation-->
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="spec ">
          <h3>History</h3>
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
                <a href="#tab1" class="nav-shop" data-toggle="tab"
                  >Barang Dikemas</a
                >
              </li>
              <li class="">
                <a href="#tab2" class="nav-shop" data-toggle="tab"
                  >Barang Dikirim</a
                >
              </li>
              <li class="">
                <a href="#tab3" class="nav-shop" data-toggle="tab"
                  >Barang Diterima</a
                >
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
                    <a class="dropdown-item" href="#">Terbaru</a>
                    <a class="dropdown-item" href="#">Terlama</a>
                  </div>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <div class="tab-content tab-content-t">
            <div class="tab-pane active text-style" id="tab1">
              <div class=" con-w3l">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama Barang</th>
                      <th scope="col">Toko</th>
                      <th scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cabe merah bekualitas</td>
                      <td>Petanilokal.id</td>
                      <td>Rp 10.000,00</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div class="clearfix"></div>
              </div>
            </div>

            <div class="tab-pane text-style" id="tab2">
              <div class=" con-w3l">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama Barang</th>
                      <th scope="col">Toko</th>
                      <th scope="col">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cabe keriting berkualitas</td>
                      <td>Otto</td>
                      <td>Rp 20.000,00</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="tab-pane  text-style" id="tab3">
              <div class=" con-w3l">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama Barang</th>
                      <th scope="col">Toko</th>
                      <th scope="col">Harga</th>
                      <th scope="col">Selesai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cabe ijo</td>
                      <td>Otto</td>
                      <td>Rp 5.000,00</td>
                      <td>
                        <button type="button" class="btn btn-danger float-left">
                          Barang diterima
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
    <br />
    <br />
    <br />
    <br />
    <span v-if="dataku.type == 2">
      <div class="container">
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Attention!</strong> Fitur toko hanya untuk petani cabai !
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="contact">
        <div class="container">
          <div class="spec ">
            <h3>Profil Toko</h3>
            <div class="ser-t">
              <b></b>
              <span><i></i></span>
              <b class="line"></b>
            </div>
          </div>
          <div class=" contact-w3">
            <div class="col-md-5 contact-right">
              <img src="images/cac.jpg" class="img-responsive" alt="" />
            </div>
            <div class="col-md-7 contact-left">
              <h4>{{ dataku.name }}</h4>
              <p>
                <i class="fas fa-address-book" aria-hidden="true"></i>
                Alamat pengiriman : {{ dataku.address }}
              </p>
              <ul class="contact-list">
                <li>
                  <i class="fas fa-envelope" aria-hidden="true"></i
                  ><a>{{ dataku.email }}</a>
                </li>
                <li>
                  <i class="fas fa-phone" aria-hidden="true"></i
                  >{{ dataku.phone }}
                </li>
              </ul>
              <div>
                <br />
                <br />
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic example"
                  style="float:right;"
                >
                  <router-link
                    to="/manajemen_produk"
                    class="btn btn-outline-success"
                    @click.native="$router.go()"
                  >
                    Manajemen Produk</router-link
                  >
                  <router-link
                    to="/manajemen_toko"
                    class="btn btn-outline-secondary"
                    @click.native="$router.go()"
                  >
                    Manajemen Transaksi</router-link
                  >
                  <router-link
                    to="/edit_toko"
                    class="btn btn-outline-danger"
                    @click.native="$router.go()"
                    >Edit Profil Toko</router-link
                  >
                </div>
              </div>
              <!--Plug-in Initialisation-->
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>
<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
@import "../assets/Shop/css_tambahan.css";
@import "../assets/produk/style.css";
</style>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  name: "Profil",
  data() {
    return {
      token,
      dataku: []
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
                getUserInfo(token:
                  "${token}"
                ){
                  id
                  name
                  email
                  phone
                  type
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
