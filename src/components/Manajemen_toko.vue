<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <div class="spec ">
        <h3>Manajemen Toko</h3>
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
                >Barang Di-request</a
              >
            </li>
            <li class="">
              <a href="#tab2" class="nav-shop" data-toggle="tab"
                >Barang Diproses</a
              >
            </li>
            <li class="">
              <a href="#tab3" class="nav-shop" data-toggle="tab"
                >Barang Dikirim</a
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
                    <th scope="col">Jumlah diminta(KG)</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Bukti Transfer</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cabe merah bekualitas</td>
                    <td>10KG</td>
                    <td>Rp 20.000,00</td>
                    <td><img src="images/of9.png" alt="" /></td>
                    <td>
                      <button type="button" class="btn btn-danger float-left">
                        Pindah status "diproses"
                      </button>
                    </td>
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
                    <th scope="col">Nama</th>
                    <th scope="col">Jumlah diminta(KG)</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Alamat pembeli</th>
                    <th scope="col">kode pos</th>
                    <th scope="col">No. HP pembli</th>
                    <th scope="col">Status Pengiriman</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cabe keriting berkualitas</td>
                    <td>10KG</td>
                    <td>Rp 20.000,00</td>
                    <td>Perumahan BCE blok B10 no.25,kec-cibinong</td>
                    <td>19613</td>
                    <td>081383385553</td>
                    <td>
                      <button type="button" class="btn btn-danger float-left">
                        Barang dikirim
                      </button>
                    </td>
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
                    <th scope="col">Jumlah diminta(KG)</th>
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
                        Uang diterima
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
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<style scoped>
@import "../assets/Shop/css_tambahan.css";
</style>
