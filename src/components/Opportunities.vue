<template>
  <v-container>
    <div class="opportunity-title">
      <h3>{{$t('createOpportunities')}}</h3>
      <p>
        {{$t('opportunitiesContent')}}
      </p>
    </div>
    <div class="list">
      <v-container>
        <v-row class="mb-5">
          <v-col md="4">
            <v-card :loading="loading" class="opportunity-card" max-width="350">
              <v-img
                height="350"
                :src="require('@/assets/images/farmer.png')"
              ></v-img>

              <v-card-title>
                <h6 class="title">{{$t('farmers')}}</h6>
              </v-card-title>

              <v-card-text>
                <ul class="bullet-point">
                  <li>{{$t('farmersBullet1')}}</li>
                  <li>{{$t('farmersBullet2')}}</li>
                  <li>{{$t('farmersBullet3')}}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card :loading="loading" class="opportunity-card" max-width="350">
              <v-img
                height="350"
                :src="require('@/assets/images/market.png')"
              ></v-img>

              <v-card-title>
                <h6 class="title">{{$t('retailers')}}</h6>
              </v-card-title>

              <v-card-text>
                <ul class="bullet-point">
                  <li>{{$t('retailersBullet1')}}</li>
                  <li>{{$t('retailersBullet2')}}</li>
                  <li>
                    {{$t('retailersBullet3')}}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card :loading="loading" class="opportunity-card" max-width="350">
              <v-img
                height="350"
                :src="require('@/assets/images/youth.png')"
              ></v-img>

              <v-card-title>
                <h6 class="title">{{$t('consumers')}}</h6>
              </v-card-title>

              <v-card-text>
                <ul class="bullet-point">
                  <li>{{$t('consumersBullet1')}}</li>
                  <li>{{$t('consumersBullet2')}}</li>
                  <li>{{$t('consumersBullet3')}}</li>
                  <li>{{$t('consumersBullet4')}}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Opportunities",

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.opportunity-title {
  margin: 0 0 20px 0;
  padding: 0 20px;
}
.opportunity-title h3 {
  margin: 30px 0 30px 0;
  padding: 0;
  font-size: 36px;
  text-align: center;
}
.opportunity-title p {
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 32px;
  color: #324148;
  text-align: center;
}
.opportunity-card {
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 1px 13px 20px #e4e5e6;
  border-radius: 5px;
  padding: 30px;
  transition: all ease 0.5s;
}
.opportunity-card:hover {
  background: #66bb6a;
  box-shadow: 0px 26px 26px rgb(118 196 125 / 31%);
}
.title{
  text-align: center;
  font-size: 26px;
}
.bullet-point {
  overflow: hidden;
}
.bullet-point > li {
  list-style: none;
  position: relative;
  padding: 0 0 0 2em;
  margin: 0 0 0.5em 10px;
  transition: 0.12s;
}
.bullet-point > li::before {
  position: absolute;
  content: "\2022";
  font-family: Arial;
  color: #fff;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 2em;
  opacity: 0.5;
  line-height: 0.75;
  transition: 0.5s;
}
.bullet-point > li:hover {
  color: #fff;
}
.bullet-point > li:hover::before {
  transform: scale(2);
  opacity: 1;
  text-shadow: 0 0 4px;
  transition: 0.1s;
}
</style>
