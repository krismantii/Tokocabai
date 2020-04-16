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
                <a href="#tab1" class="nav-shop" data-toggle="tab"
                  >Cabai Merah Besar</a
                >
              </li>
              <li class="">
                <a href="#tab2" class="nav-shop" data-toggle="tab"
                  >Cabai Merah Keriting</a
                >
              </li>
              <li class="">
                <a href="#tab3" class="nav-shop" data-toggle="tab"
                  >Cabai Rawit</a
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
                <div class="col-md-3 m-wthree">
                  <div class="col-m">
                    <p style="color: orange; ">Toko: {{ shop.name }}</p>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#myModal7"
                      class="offer-img"
                    >
                      <img src="images/of6.png" class="img-responsive" alt="" />
                      <div class="offer">
                        <p><span>Offer</span></p>
                      </div>
                    </a>
                    <div class="mid-1">
                      <div class="women">
                        <h6>
                          <a href="single.html" style="font-weight: bold;">{{
                            produk.name
                          }}</a>
                        </h6>
                      </div>
                      <div class="mid-2">
                        <p>
                          Harga:
                          <em class="item_price"
                            >Rp. {{ produk.pricePerKG }}</em
                          >
                        </p>
                        <div class="block">
                          <p style="color: red;">
                            Stock : {{ produk.stockKG }} KG
                          </p>
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

            <div class="tab-pane text-style" id="tab2">
              <div class=" con-w3l">
                 <div class="col-md-3 m-wthree">
                  <div class="col-m">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#myModal6"
                      class="offer-img"
                    >
                      <img src="images/of5.png" class="img-responsive" alt="" />
                      <div class="offer">
                        <p><span>Offer</span></p>
                      </div>
                    </a>
                    <div class="mid-1">
                      <div class="women">
                        <h6><a href="single.html">Kurkure</a>(100 g)</h6>
                      </div>
                      <div class="mid-2">
                        <p>
                          <label>$1.00</label><em class="item_price">$0.70</em>
                        </p>
                        <div class="block">
                          <div class="starbox small ghosting"></div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="add">
                        <button
                          class="btn btn-danger my-cart-btn my-cart-b"
                          data-id="6"
                          data-name="Kurkure"
                          data-summary="summary 6"
                          data-price="0.70"
                          data-quantity="1"
                          data-image="images/of5.png"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 m-wthree">
                  <div class="col-m">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#myModal6"
                      class="offer-img"
                    >
                      <img src="images/of5.png" class="img-responsive" alt="" />
                      <div class="offer">
                        <p><span>Offer</span></p>
                      </div>
                    </a>
                    <div class="mid-1">
                      <div class="women">
                        <h6><a href="single.html">Kurkure</a>(100 g)</h6>
                      </div>
                      <div class="mid-2">
                        <p>
                          <label>$1.00</label><em class="item_price">$0.70</em>
                        </p>
                        <div class="block">
                          <div class="starbox small ghosting"></div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="add">
                        <button
                          class="btn btn-danger my-cart-btn my-cart-b"
                          data-id="6"
                          data-name="Kurkure"
                          data-summary="summary 6"
                          data-price="0.70"
                          data-quantity="1"
                          data-image="images/of5.png"
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
            <div class="tab-pane  text-style" id="tab3">
              <div class=" con-w3l">
                <div class="col-md-3 m-wthree">
                  <div class="col-m">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#myModal9"
                      class="offer-img"
                    >
                      <img src="images/of8.png" class="img-responsive" alt="" />
                      <div class="offer">
                        <p><span>Offer</span></p>
                      </div>
                    </a>
                    <div class="mid-1">
                      <div class="women">
                        <h6><a href="single.html">Banana</a>(6 pcs)</h6>
                      </div>
                      <div class="mid-2">
                        <p>
                          <label>$2.00</label><em class="item_price">$1.50</em>
                        </p>
                        <div class="block">
                          <div class="starbox small ghosting"></div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="add">
                        <button
                          class="btn btn-danger my-cart-btn my-cart-b"
                          data-id="9"
                          data-name="Banana"
                          data-summary="summary 9"
                          data-price="1.50"
                          data-quantity="1"
                          data-image="images/of8.png"
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
    </div>
  </div>
</template>
<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
@import "../assets/Shop/jstarbox.css";
@import "../assets/Shop/css_tambahan.css";
</style>

<script>
import axios from "axios";
export default {
  name: "Produk",
  data() {
    return {
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      shop: []
    };
  },
  created() {
    this.loadData();
    this.loadData2();
  },
  methods: {
    loadData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            {
            product(params: {
              id:1
            }) {
              shopID
              name
              quantity
              pricePerKG
              stockKG
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.produk = response.data.data.product;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    loadData2() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            {
              shop(params: {
                id:1
              }) {
                name
              }
            }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.shop = response.data.data.shop;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
