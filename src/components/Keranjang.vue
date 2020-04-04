<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>My Cart</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <table class="table ">
      <tr>
        <th class="t-head head-it ">Products</th>
        <th class="t-head">Price</th>
        <th class="t-head">Quantity</th>

        <th class="t-head">Purchase</th>
      </tr>
      <tr class="cross">
        <td class="ring-in t-data">
          <a href="single.html" class="at-in">
            <img src="images/wi.png" class="img-responsive" alt="" />
          </a>
          <div class="sed">
            <h5>Cabai Merah jawa barat</h5>
            <h6>Toko :</h6>
          </div>
          <div class="clearfix"></div>
          <div class="close1">
            <i class="fas fa-times" aria-hidden="true"></i>
          </div>
        </td>
        <td class="t-data">Rp 10.000,00</td>
        <td class="t-data">
          <div class="quantity">
            <div class="quantity-select">
              <div class="entry value-minus">&nbsp;</div>
              <div class="entry value"><span class="span-1">1</span></div>
              <div class="entry value-plus active">&nbsp;</div>
            </div>
          </div>
        </td>

        <td class="t-data t-w3l">
          <a class=" add-1" href="single.html">Add To Cart</a>
        </td>
      </tr>

      <tr class="cross1">
        <td class="t-data ring-in">
          <a href="single.html" class="at-in"
            ><img src="images/wi1.png" class="img-responsive" alt=""
          /></a>
          <div class="sed">
            <h5>Sed ut perspiciatis unde</h5>
            <h6>Sed ut perspiciatis unde</h6>
          </div>
          <div class="clearfix"></div>
          <div class="close2">
            <i class="fas fa-times" aria-hidden="true"></i>
          </div>
        </td>
        <td class="t-data">$20.00</td>
        <td class="t-data">
          <div class="quantity">
            <div class="quantity-select">
              <div class="entry value-minus">&nbsp;</div>
              <div class="entry value"><span class="span-1">1</span></div>
              <div class="entry value-plus active">&nbsp;</div>
            </div>
          </div>
        </td>

        <td class="t-data t-w3l">
          <a class=" add-1" href="single.html">Add To Cart</a>
        </td>
      </tr>
      <tr class="cross2">
        <td class="t-data ring-in">
          <a href="single.html" class="at-in"
            ><img src="images/wi2.png" class="img-responsive" alt=""
          /></a>
          <div class="sed">
            <h5>Sed ut perspiciatis unde</h5>
          </div>
          <div class="clearfix"></div>
          <div class="close3">
            <i class="fas fa-times" aria-hidden="true"></i>
          </div>
        </td>
        <td class="t-data">$15.00</td>
        <td class="t-data">
          <div class="quantity">
            <div class="quantity-select">
              <div class="entry value-minus">&nbsp;</div>
              <div class="entry value"><span class="span-1">1</span></div>
              <div class="entry value-plus active">&nbsp;</div>
            </div>
          </div>
        </td>

        <td class="t-data">
          <a class=" add-1" href="single.html">Add To Cart</a>
        </td>
      </tr>
    </table>

    <table class="table">
      <tr>
        <th class="t-head head-it "></th>
        <th class="t-head"></th>
      </tr>
      <tr class="cross">
        <td class="ring-in t-data" style="text-align: right; ">
          <h4>Total bayar :</h4>
        </td>
        <td class="t-data" style="text-align: center; ">
          <h5>Rp 100000</h5>
        </td>
      </tr>
      <tr class="cross">
        <td class="ring-in t-data" style="text-align: right; "></td>
        <td class="t-data" style="text-align: center; ">
          <router-link to="/detail_transaksi" class="btn btn-danger"
            >Bayar Isi Keranjang Belanja</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
@import "../assets/Shop/style.css";
@import "../assets/Shop/font-awesome.css";
th.t-head {
  background: #f1f1f1;
  color: green;
  font-size: 1em !important;
  padding: 1em !important;
  border: 1px solid #d2d2d2 !important;
}
</style>
