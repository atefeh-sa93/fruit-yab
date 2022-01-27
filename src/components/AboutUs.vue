<template>
  <div class="bg-color" id="aboutUs">
    <v-container>
      <v-row class="mt-15">
        <v-col cols="12" md="6">
          <div class="about-context">
            <h3>{{$t('aboutUs')}}</h3>
            <p>
              {{$t('aboutUsContent')}}
            </p>
            <v-btn color="#66BB6A" elevation="2" large class="white--text"
              >{{$t('learnMore')}}</v-btn
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
  background: #D8E1E6;
}
.about-context {
  position: relative;
  padding: 70px 0 0;
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
    background: rgb(207, 207, 204);
    transform: rotate(135deg);
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: rgb(143, 123, 122);
    transform: rotate(180deg);
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: rgb(209, 27, 14);
    transform: rotate(315deg);
  }
  100% {
    border-radius: 50%;
    background: rgb(36, 126, 51);
    transform: rotate(404deg);
  }
}
.list-view{
  margin: 70px 0 70px 0;
}
</style>
