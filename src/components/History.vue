<template>
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
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
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
</template>
<script>
export default {
  name: "History"
};
</script>
