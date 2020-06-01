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
        <router-link
          to="/tambah_produk"
          @click.native="$router.go()"
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
          <th scope="col">Dibuat</th>
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
        <tr v-for="(pro, index) in produk" :key="pro.id">
          <td>{{ pro.createdAt }}</td>
          <td><img :src="pro.photoURL" class="gambar" alt="" /></td>
          <td>
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
              <a style="font-weight: bold;">{{ pro.name }}</a>
            </router-link>
          </td>
          <td>{{ pro.category }}</td>
          <td>{{ pro.stockKG }}</td>
          <td>Rp {{ pro.pricePerKG }}</td>
          <td>
            <router-link
              :to="{
                name: 'Edit_produk',
                params: { slug: pro.slugName, id: pro.id }
              }"
              type="button"
              class="btn btn-secondary float-left"
            >
              Edit
            </router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteData(pro.id, index)">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      produk: [],
      user: [],
      token
    };
  },
  created: function() {
    this.loadUser();
  },
  methods: {
    loadData() {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
            query productsByShop($shopID: Int!){
            productsByShop(params:{
              shopID: $shopID
            }){
              id
              name
              shopID
              pricePerKG
              stockKG
              category
              photoURL
              createdAt
              slugName   
            }
          }
        `,
          variables: {
            shopID: parseInt(this.user.id)
          }
        }
      })
        .then(response => {
          console.log("Data produk :", response.data);
          this.produk = response.data.data.productsByShop;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    deleteData(data, index) {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
            mutation deleteProduct(){
              deleteProduct(params: {
                id: ${data}
              }) {
                success
              }
            }
        `
        }
      })
        .then(response => {
          alert("Data berhasil dihapus");
          this.produk.splice(index, 1);
          console.log("Data :", response.data);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
          alert("error");
        });
    },
    loadUser() {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
            query{
                getUserInfo(token:
                  "${token}"
                ){
                  id
                }
              }
        `
        }
      })
        .then(response => {
          this.user = response.data.data.getUserInfo;
          this.loadData();
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
.gambar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
