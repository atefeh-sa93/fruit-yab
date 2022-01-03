<template>
  <v-container>
    <v-row class="mt-15">
      <v-col cols="12" md="6">
        <h3 class="banner-text">
          <span>Revolutionizing the Fresh Produce Supply Chain</span>
        </h3>
        <h6 class="banner-content">
          Driven by cutting edge technology, we source fresh produce from
          farmers and sell to businesses, across India
        </h6>
        <v-btn color="#66BB6A" elevation="2" large class="white--text"
          >Learn More</v-btn
        >
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="require('@/assets/images/market_advertising.webp')"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BannerInfo",

  data: () => ({}),
};
</script>

<style>
.banner-text span {
  font-size: 38px;
  line-height: 48px;
  font-family: "chivobold";
}
.banner-text {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
}
.banner-content {
  margin: 0 0 50px 0;
  padding: 0;
  font-size: 18px;
  line-height: 32px;
  color: #000000;
  font-weight: normal;
}
</style>
