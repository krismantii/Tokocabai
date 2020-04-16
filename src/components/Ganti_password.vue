<template>
  <div>
    <br />
    <br />
    <br />
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">
              Change password
            </span>
            <b-form @submit="login" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Password sekarang:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="password"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password baru:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Ulangi password baru:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-form>
            <br />
            <br />
            <div class="container-login100-form-btn">
              <b-button
                class="login100-form-btn"
                type="submit"
                @click="login"
                variant="primary"
                >Change password</b-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfileEditForm",
  data() {
    return {
      password: "",
      newPassword: "",
      confirmPassword: "",
      notification: {
        message: "",
        type: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return Object.keys(this.fields).every(key => this.fields[key].valid);
    }
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("tweetr-token");

    return token ? next() : next("/login");
  },
  methods: {
    changePassword() {
      const token = localStorage.getItem("token");
      axios
        .put(
          "/account/change_password",
          {
            password: this.password,
            newPassword: this.newPassword
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(response => {
          // clear form inputs
          this.password = this.newPassword = this.confirmPassword = "";

          // display success notification
          this.notification = Object.assign({}, this.notification, {
            message: response.data.message,
            type: "success"
          });
        })
        .catch(error => {
          // clear form inputs
          this.password = this.newPassword = this.confirmPassword = "";

          // clear form error messages
          this.$nextTick(() => {
            this.$validator.reset();
          });

          // display error notification
          this.notification = Object.assign({}, this.notification, {
            message: error.response.data.message,
            type: "danger"
          });
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/Login/main.css";
@import "../assets/Login/util.css";
</style>
