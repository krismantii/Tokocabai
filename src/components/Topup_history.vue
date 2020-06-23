<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>History Top up</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th style="width:10%">Waktu</th>
          <th>Keterangan</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in history" :key="index">
          <td>{{ data.createdAt }}</td>
          <td>{{ data.description }}</td>
          <td>Rp {{ data.changeAmount }}</td>
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
      history: []
    };
  },
  created() {
    this.history_topup();
  },
  methods: {
    history_topup() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
              saldoHistory(params:{
                limit: 10
                page: 1
              }){
                id
                userID
                sourceID
                description
                changeAmount
                createdAt
              }
            }
        `
        }
      })
        .then(response => {
          console.log("info :", response.data);
          this.history = response.data.data.saldoHistory;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
