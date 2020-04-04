<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Tambah Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>

    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        Produk berhasil ditambahkan!
      </b-alert>
      <b-form @submit="createData" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nama Produk:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="masukan nama produk"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Kategori:" label-for="input-3">
          <b-form-select
            v-model="form.slugName"
            :options="slugName"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Stock tersedia (KG):"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model.number="form.stockKG"
            type="number"
            min="1"
            required
            placeholder="masukan stock barang dalam KG"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Harga/KG:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model.number="form.pricePerKG"
            type="number"
            min="1"
            required
            placeholder="masukan harga barang per/KG"
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          @click="showDismissibleAlert = true"
          variant="success"
          class="m-1"
        >
          Tambah produk
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showDismissibleAlert: false,
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      form: {
        name: null,
        pricePerKG: null,
        stockKG: null
      },
      slugName: [
        { value: "Cabai Merah Keriting", text: "Cabai Merah Keriting" },
        { value: "Cabai Merah Besar", text: "Cabai Merah Besar" },
        { value: "Cabai rawit", text: "Cabai rawit" }
      ],
      show: true
    };
  },
  created() {
    this.createData();
  },
  methods: {
    createData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            mutation createProduct{
              createProduct(params:{
                name: "${this.form.name}",
                shopID: 1,
                slugName: "${this.form.slugName}",
                quantity: 1000,
                pricePerKG: ${this.form.pricePerKG},
                stockKG: ${this.form.stockKG},
              }){
                id
              }
            }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
