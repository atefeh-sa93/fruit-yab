<template>
  <v-container>
    <div class="opportunity-title">
      <h3>Creating opportunities for everyone</h3>
      <p>
        We are the first platform enabling increased benefits for farmers,
        retailers, and consumers.
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
                <h6>Benefits for farmers</h6>
              </v-card-title>

              <v-card-text>
                <ul>
                  <li>Competitive pricing</li>
                  <li>20% more revenue</li>
                  <li>Competitive pricing</li>
                  <li>20% more revenue</li>
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
                <h6>Convenience for retailers</h6>
              </v-card-title>

              <v-card-text>
                <ul>
                  <li>Competitive pricing</li>
                  <li>20% more revenue</li>
                  <li>Competitive pricing</li>
                  <li>20% more revenue</li>
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
                <h6>Savings for consumers</h6>
              </v-card-title>

              <v-card-text>
                <ul>
                  <li>Competitive pricing</li>
                  <li>Hygienically handled produce</li>
                  <li>Competitive pricing</li>
                  <li>Hygienically handled produce</li>
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
  name: "Oppurtunities",

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
</style>
