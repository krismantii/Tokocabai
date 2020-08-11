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
          <div>
            <b-card-group>
              <b-card title="Saldo Tokocabai">
                <b-card-text>
                  <p style="color:green;">
                    <i class="fas fa-credit-card"></i> Rp {{ dataku.saldo }}
                  </p>
                </b-card-text>
              </b-card>
              <b-card title="Top up saldo">
                <b-card-text>
                  <b-button
                    class="mr-1 warna"
                    pill
                    variant="primary"
                    v-b-modal.modal-prevent-closing
                    >Topup</b-button
                  >
                  <router-link
                    :to="{
                      name: 'Topup_history',
                      params: { token: token }
                    }"
                  >
                    <b-button class="mr-1 warna" pill variant="dark"
                      >History</b-button
                    ></router-link
                  >
                </b-card-text>
              </b-card>
            </b-card-group>
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              title="Top up saldo"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  :state="nameState"
                  label="Nominal :"
                  label-for="name-input"
                  invalid-feedback=""
                >
                  <b-form-input
                    id="name-input"
                    :state="nameState"
                    v-model="saldo"
                    required
                  ></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
          </div>
          <br />
          <b-alert show variant="info"
            >Update profil anda untuk kenyamanan bertransaksi.</b-alert
          >
          <div class=" contact-w3">
            <div class="col-md-5 contact-right">
              <img
                :src="dataku.photoURL || 'images/default.png'"
                class="gambar"
                alt=""
              />
            </div>
            <div class="col-md-7 contact-left">
              <h4>{{ dataku.userName }}</h4>
              <i class="fas fa-map-marked-alt" aria-hidden="true"></i>
              <p>Provinsi : {{ dataku.province }}</p>
              <p>Alamat detail : {{ dataku.addressDetail }}</p>
              <p>kode zip : {{ dataku.zipCode }}</p>
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
                <div style="float:right;">
                  <router-link
                    :to="{
                      name: 'Edit_profil',
                      params: { token: token }
                    }"
                    class="btn btn-outline-danger mr-1"
                    >Edit Profil</router-link
                  >
                  <router-link
                    :to="{
                      name: 'History',
                      params: { token: token }
                    }"
                    class="btn btn-outline-secondary mr-1"
                    >History transaksi</router-link
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
    <br />
    <br />
    <br />
    <br />
    <span v-if="dataku.type == 2">
      <div class="container">
        <div class="spec ">
          <h3>Profil Toko</h3>
          <div class="ser-t">
            <b></b>
            <span><i></i></span>
            <b class="line"></b>
          </div>
        </div>
        <b-card-group>
          <b-card title="Saldo Tokocabai">
            <b-card-text>
              <p style="color:green;">
                <i class="fas fa-credit-card"></i> Rp {{ dataku.saldo }}
              </p>
            </b-card-text>
          </b-card>
          <b-card title="Top up saldo">
            <b-card-text>
              <b-button
                class="mr-1 warna"
                pill
                variant="info"
                v-b-modal.modal-prevent-closing
                >Topup</b-button
              >
              <router-link
                :to="{
                  name: 'Topup_history',
                  params: { token: token }
                }"
                @click.native="$router.go()"
              >
                <b-button class="mr-1 warna" pill variant="secondary"
                  >History</b-button
                ></router-link
              >
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Top up saldo"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              :state="nameState"
              label="Nominal:"
              label-for="name-input"
              invalid-feedback=""
            >
              <b-form-input
                id="name-input"
                :state="nameState"
                v-model="saldo"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
        <b-alert show variant="info"
          >Update profil anda untuk kenyamanan bertransaksi.</b-alert
        >
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
        <div class=" contact-w3">
          <div class="col-md-5 contact-right">
            <img
              :src="dataku.photoURL || 'images/default.png'"
              class="gambar"
              alt=""
            />
          </div>
          <div class="col-md-7 contact-left">
            <h4>{{ dataku.userName }}</h4>
            <i class="fas fa-map-marked-alt" aria-hidden="true"></i>
            <p>Provinsi : {{ dataku.province }}</p>
            <p>Alamat detail : {{ dataku.addressDetail }}</p>
            <p>kode zip : {{ dataku.zipCode }}</p>
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
                  :to="{
                    name: 'Manajemen_produk',
                    params: { token: token }
                  }"
                  @click.native="$router.go()"
                  class="btn btn-outline-success mr-1"
                  >Manajemen Produk
                </router-link>
                <router-link
                  :to="{
                    name: 'Manajemen_toko',
                    params: { token: token }
                  }"
                  @click.native="$router.go()"
                  class="btn btn-outline-secondary mr-1"
                  >Manajemen Transaksi
                </router-link>
                <router-link
                  :to="{
                    name: 'Edit_profil',
                    params: { token: token }
                  }"
                  class="btn btn-outline-danger mr-1"
                  >Edit Profil Toko</router-link
                >
              </div>
            </div>
            <!--Plug-in Initialisation-->
          </div>
          <div class="clearfix"></div>
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
.gambar {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-left: 100px;
}
.warna {
  color: white;
}
</style>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  name: "Profil",
  data() {
    return {
      token,
      dataku: [],
      saldo: "",
      saldo_user: "",
      nameState: null
    };
  },
  created() {
    this.loadData();
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    loadData() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                getUserInfo(token:
                  "${token}"
                ){
                  id
                  userName
                  name
                  email
                  phone
                  type
                  addressDetail
                  province
                  zipCode
                  photoURL
                  saldo
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
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.saldo = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
              topup(amount: "${this.saldo}"){
                id
                saldo
              }
            }
        `
        }
      })
        .then(response => {
          console.log("Data saldo :", response.data);
          this.saldo_user = response.data.data.topup;
          this.$router.push(
            { name: "Profil", params: { token: token } },
            this.$router.go(0)
          );
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
};
</script>
