<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Manajemen Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
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
        <router-link
          to="/tambah_produk"
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Tambah Produk
        </router-link>
      </div>
    </nav>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Foto barang</th>
          <th scope="col">Nama Barang</th>
          <th scope="col">Kategori</th>
          <th scope="col">Stock (KG)</th>
          <th scope="col">Harga/KG</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ produk.id }}</th>
          <td><img src="images/of9.png" alt="" /></td>
          <td>{{ produk.name }}</td>
          <td>{{ produk.slugName }}</td>
          <td>{{ produk.stockKG }}</td>
          <td>Rp {{ produk.pricePerKG }}</td>
          <td>
            <router-link
              to="/edit_produk"
              type="button"
              class="btn btn-secondary float-left"
            >
              Edit Produk
            </router-link>
          </td>
          <td>
            <router-link
              to="/edit_produk"
              type="button"
              class="btn btn-danger float-left"
            >
              Hapus
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //dataku merupakan variabel yg menampung data array JSON
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
            {
            product(params: {
              id:1
            }) {
              id
              name
              quantity
              pricePerKG
              stockKG
              slugName
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
    }
  }
};
</script>
