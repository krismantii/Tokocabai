<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Tata Cara Transaksi</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <div class="col text-right">
      <router-link to="/" type="button" class="btn btn-danger"
        >Kembali</router-link
      >
    </div>
    <br />
    <div class="alert alert-secondary" role="alert">
      <h4 class="alert-heading">Tata Cara Pembayaran</h4>
      <p>
        1. Pembeli perlu membayar ke rekening petani cabai dibawah ini.
      </p>
      <p>
        Toko :
      </p>
      <div class="col-sm-10">
        <input
          type="nama"
          class="form-control"
          id="inputNama3"
          placeholder="Atas Nama : "
          readonly
        />
        <input
          type="nama"
          class="form-control"
          id="inputNama3"
          placeholder="No. Rekening"
          readonly
        />
      </div>
      <p>
        2. Pembeli perlu membayar sesuai dengan dengan jumlah yang tertera
        dibawah ini.
      </p>
      <div class="col-sm-10">
        <input
          type="nama"
          class="form-control"
          id="inputNama3"
          placeholder="Total pembayaran :"
          readonly
        />
      </div>
      <p>3. Input bukti pembayaran disini</p>
      <input type="file" id="img" name="img" accept="image/*" />
      <hr />
      <div class="col text-center">
        <div class="mb-1">
          <b-button @click="showMsgBoxTwo">Selesai membayar</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxTwo: ""
    };
  },
  methods: {
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk(
          "Bukti pembayaran sudah tersampaikan, tunggu produk sampai di alamat ya!",
          {
            title: "Terimakasih!",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true
          }
        )
        .then(value => {
          this.boxTwo = value;
        });
    }
  }
};
</script>
