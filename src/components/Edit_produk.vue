<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Edit Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        Produk berhasil diedit!
      </b-alert>
      <b-form @submit="updateData" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nama Produk: "
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="produk.name"
            type="text"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Kategori:" label-for="input-3">
          <b-form-select
            v-model="produk.slugName"
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
            v-model="produk.stockKG"
            type="number"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Harga/KG:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="produk.pricePerKG"
            type="number"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          @click="showDismissibleAlert = true"
          variant="success"
          class="m-1"
        >
          Edit Produk
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
      form: [],
      slugName: [
        { value: "a", text: "Cabai Merah Keriting" },
        { value: "b", text: "Cabai Merah Besar" },
        { value: "c", text: "Cabai rawit" }
      ],
      show: true
    };
  },
  created() {
    this.loadData();
    this.updateData();
  },
  methods: {
    updateData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            mutation{
                updateProduct(params: {
                  id: 4
                  shopID: 1
                  quantity: 1000
                  name : "${this.produk.name}"
                  pricePerKG: ${this.produk.pricePerKG}
                  stockKG : ${this.produk.stockKG}
                  slugName : "${this.produk.slugName}"
                }) {
                  id
                  shopID
                  quantity
                  name
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
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    loadData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            {
            product(params: {
              id:4
            }) {
              shopID
              name
              pricePerKG
              stockKG
            }
          }
        `
        }
      }).then(response => {
        console.log("Data :", response.data);
        this.produk = response.data.data.product;
      });
    }
  }
};
</script>
