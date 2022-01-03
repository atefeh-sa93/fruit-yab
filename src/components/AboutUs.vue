<template>
  <div class="bg-color">
    <v-container>
      <v-row class="mt-15">
        <v-col cols="12" md="6">
          <div class="about-context">
            <h3>About Us</h3>
            <p>
              Ninjacart is India's largest Fresh Produce Supply Chain Company.
              We are pioneers in solving one of the toughest supply chain
              problems of the world by leveraging innovative technology. We
              source fresh produce from farmers and deliver them to businesses
              within 12 hours.
            </p>
            <v-btn color="#66BB6A" elevation="2" large class="white--text"
              >Know more</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="about-logo">
            <div class="div1" id="one"></div>
          </div>
          <div class="list-view">
            <v-img :src="require('@/assets/images/listView.png')"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs",

  data: () => ({}),
};
</script>

<style>
.bg-color {
  width: 100%;
  margin: 70px 0 0 0;
  background: #F5F5F5;
}
.about-context {
  position: relative;
  padding: 70px 0 0 50px;
}
.about-context h3 {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 36px;
  line-height: 45px;
  font-family: "chivobold";
  color: #000;
}
.about-context p {
  margin: 0 0 30px 0;
  padding: 0;
  font-size: 17px;
  line-height: 26px;
  color: #828287;
}
.about-logo {
  margin: 0 0 60px 0;
}
div {
  animation: rotate-all 2s 0 infinite linear alternate;
}

.div1 {
  width: 80px;
  height: 80px;
  background-color: #669999;
  position: relative;
  margin: auto;
  animation: square-to-circle 2.5s 0.5s infinite
    cubic-bezier(1, 0.015, 0.295, 1.225) alternate-reverse;
}
@keyframes square-to-circle {
  0% {
    border-radius: 0 0 0 0;
    transform: rotate(45deg);
  }
  25% {
    border-radius: 50% 0 0 0;
    background: darksalmon;
    transform: rotate(135deg);
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: indianred;
    transform: rotate(180deg);
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: lightcoral;
    transform: rotate(315deg);
  }
  100% {
    border-radius: 50%;
    background: darksalmon;
    transform: rotate(404deg);
  }
}
</style>
