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
              berbagai produk cabai merah segar dari petani lokal ke konsumen.
              Aplikasi ini diharapkan mampu mensejahterakan petani lokal di
              Indonesia dengan memperpendek rantai distribusi produk cabai yang
              panjang.
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
              <h3 class="h4 mb-2">Segar</h3>
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
            <h3>Special Offers</h3>
            <div class="ser-t">
              <b></b>
              <span><i></i></span>
              <b class="line"></b>
            </div>
          </div>
          <div class="tab-head">
            <nav class="nav justify-content-center">
              <ul id="active-nav" class="nav tabs">
                <li class="nav-shop">
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
                    >Cabai Keriting</a
                  >
                </li>
              </ul>
            </nav>

            <div class="tab-content tab-content-t">
              <div class="tab-pane active text-style" id="tab1">
                <div class=" con-w3l">
                  <div class="col-md-3 m-wthree">
                    <div class="col-m">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal4"
                        class="offer-img"
                      >
                        <img
                          src="images/of3.png"
                          class="img-responsive"
                          alt=""
                        />
                        <div class="offer">
                          <p><span>Offer</span></p>
                        </div>
                      </a>
                      <div class="mid-1">
                        <div class="women">
                          <h6><a href="single.html">Soya Chunks</a>(1 kg)</h6>
                        </div>
                        <div class="mid-2">
                          <p>
                            <label>$4.00</label
                            ><em class="item_price">$3.50</em>
                          </p>
                          <div class="block">
                            <div class="starbox small ghosting"></div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="add">
                          <button
                            class="btn btn-danger my-cart-btn my-cart-b"
                            data-id="4"
                            data-name="Soya Chunks"
                            data-summary="summary 4"
                            data-price="3.50"
                            data-quantity="1"
                            data-image="images/of3.png"
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

              <div class="tab-pane  text-style" id="tab2">
                <div class=" con-w3l">
                  <div class="col-md-3 m-wthree">
                    <div class="col-m">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal6"
                        class="offer-img"
                      >
                        <img
                          src="images/of5.png"
                          class="img-responsive"
                          alt=""
                        />
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
                            <label>$1.00</label
                            ><em class="item_price">$0.70</em>
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
                        data-target="#myModal7"
                        class="offer-img"
                      >
                        <img
                          src="images/of6.png"
                          class="img-responsive"
                          alt=""
                        />
                        <div class="offer">
                          <p><span>Offer</span></p>
                        </div>
                      </a>
                      <div class="mid-1">
                        <div class="women">
                          <h6><a href="single.html">Popcorn</a>(250 g)</h6>
                        </div>
                        <div class="mid-2">
                          <p>
                            <label>$2.00</label
                            ><em class="item_price">$1.00</em>
                          </p>
                          <div class="block">
                            <div class="starbox small ghosting"></div>
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
                  <div class="col-md-3 m-wthree">
                    <div class="col-m">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal8"
                        class="offer-img"
                      >
                        <img
                          src="images/of7.png"
                          class="img-responsive"
                          alt=""
                        />
                        <div class="offer">
                          <p><span>Offer</span></p>
                        </div>
                      </a>
                      <div class="mid-1">
                        <div class="women">
                          <h6><a href="single.html">Nuts</a>(250 g)</h6>
                        </div>
                        <div class="mid-2">
                          <p>
                            <label>$4.00</label
                            ><em class="item_price">$3.50</em>
                          </p>
                          <div class="block">
                            <div class="starbox small ghosting"></div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="add">
                          <button
                            class="btn btn-danger my-cart-btn my-cart-b"
                            data-id="8"
                            data-name="Nuts"
                            data-summary="summary 8"
                            data-price="3.50"
                            data-quantity="1"
                            data-image="images/of7.png"
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
                        <img
                          src="images/of8.png"
                          class="img-responsive"
                          alt=""
                        />
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
                            <label>$2.00</label
                            ><em class="item_price">$1.50</em>
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
                  <div class="col-md-3 m-wthree">
                    <div class="col-m">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal10"
                        class="offer-img"
                      >
                        <img
                          src="images/of9.png"
                          class="img-responsive"
                          alt=""
                        />
                        <div class="offer">
                          <p><span>Offer</span></p>
                        </div>
                      </a>
                      <div class="mid-1">
                        <div class="women">
                          <h6><a href="single.html">Onion</a>(1 kg)</h6>
                        </div>
                        <div class="mid-2">
                          <p>
                            <label>$1.00</label
                            ><em class="item_price">$0.70</em>
                          </p>
                          <div class="block">
                            <div class="starbox small ghosting"></div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="add">
                          <button
                            class="btn btn-danger my-cart-btn my-cart-b"
                            data-id="10"
                            data-name="Onion"
                            data-summary="summary 10"
                            data-price="0.70"
                            data-quantity="1"
                            data-image="images/of9.png"
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
                        data-target="#myModal11"
                        class="offer-img"
                      >
                        <img
                          src="images/of10.png"
                          class="img-responsive"
                          alt=""
                        />
                        <div class="offer">
                          <p><span>Offer</span></p>
                        </div>
                      </a>
                      <div class="mid-1">
                        <div class="women">
                          <h6><a href="single.html"> Bitter Gourd</a>(1 kg)</h6>
                        </div>
                        <div class="mid-2">
                          <p>
                            <label>$2.00</label
                            ><em class="item_price">$1.00</em>
                          </p>
                          <div class="block">
                            <div class="starbox small ghosting"></div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="add">
                          <button
                            class="btn btn-danger my-cart-btn my-cart-b"
                            data-id="11"
                            data-name="Bitter Gourd"
                            data-summary="summary 11"
                            data-price="1.00"
                            data-quantity="1"
                            data-image="images/of10.png"
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
                        data-target="#myModal12"
                        class="offer-img"
                      >
                        <img
                          src="images/of11.png"
                          class="img-responsive"
                          alt=""
                        />
                        <div class="offer">
                          <p><span>Offer</span></p>
                        </div>
                      </a>
                      <div class="mid-1">
                        <div class="women">
                          <h6><a href="single.html">Apples</a>(1 kg)</h6>
                        </div>
                        <div class="mid-2">
                          <p>
                            <label>$4.00</label
                            ><em class="item_price">$3.50</em>
                          </p>
                          <div class="block">
                            <div class="starbox small ghosting"></div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="add">
                          <button
                            class="btn btn-danger my-cart-btn my-cart-b"
                            data-id="12"
                            data-name="Apples"
                            data-summary="summary 12"
                            data-price="3.50"
                            data-quantity="1"
                            data-image="images/of11.png"
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
    </section>
    <br />
    <br />
    <!-- Call to Action Section -->
    <section class="page-section bg-success text-white">
      <div class="container text-center">
        <h2 class="text-white mb-4">
          Cari Produk Cabai Merah Lebih Banyak di sini!
        </h2>
        <router-link to="/shop" class="btn btn-light btn-xl">
          see more -></router-link
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
            <a class="d-block" href="mailto:contact@yourwebsite.com"
              >Tokocabai@gmail.com</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  //name: "Home",
  //components: {
  //  HelloWorld
  //}
};
</script>

<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
@import "../assets/Shop/jstarbox.css";
@import "../assets/Shop/css_tambahan.css";
</style>
