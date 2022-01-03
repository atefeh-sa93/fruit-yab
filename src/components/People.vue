<template>
  <div class="bg-color">
    <v-container>
      <v-row>
        <v-col>
          <div class="people-title">
            <h3>Meet our teams</h3>
            <p>The people who drive the core functions of FruitYab.</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-15">
        <v-col md="4">
          <v-card :loading="loading" class="people-info" max-width="400">
            <v-img
              :src="require('@/assets/images/people1.jpg')"
              width="250"
              class="mx-auto rounded-circle"
            ></v-img>

            <h6>Alireza Atashi</h6>

            <p>MBA</p>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card :loading="loading" class="people-info" max-width="400">
            <v-img
              :src="require('@/assets/images/people1.jpg')"
              width="250"
              class="mx-auto rounded-circle"
            ></v-img>

            <h6>Alireza Atashi</h6>

            <p>MBA</p>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card :loading="loading" class="people-info" max-width="400">
            <v-img
              :src="require('@/assets/images/people1.jpg')"
              width="250"
              class="mx-auto rounded-circle"
            ></v-img>

            <h6>Alireza Atashi</h6>

            <p>MBA</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.people-title {
  margin: 30px 0 30px 0;
  text-align: center;
}
.people-title h3 {
  font-size: 38px;
}
.people-title p {
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 32px;
  color: #324148;
}
.people-info {
  background: #f7f7f7;
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  width: 100%;
  height: 100%;
  background-size: cover;
  box-shadow: 2px 2px 20px #e4e5e6;
  border-radius: 17px;
  padding: 40px 10px;
  position: relative;
  top: 0;
  transition: all ease 0.5s;
  cursor: pointer;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.people-info:hover {
  top: -40px;
  background: #66bb6a;
  background-size: cover;
  box-shadow: 44px 44px 62px rgb(118 196 125 / 26%);
}
.people-info h6 {
  text-align: center;
  margin: 20px 0 10px 0;
  padding: 0;
  font-size: 26px;
  line-height: 36px;
}
.people-info p {
  text-align: center;
  margin: 0;
  padding: 0;
  color: #828287;
  font-size: 17px;
  line-height: 32px;
}
</style>
