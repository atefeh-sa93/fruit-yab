<template>
  <div>
    <div class="title">
      <h3>Creating opportunities for everyone</h3>
      <p>
        We are the first platform enabling increased benefits for farmers,
        retailers, and consumers.
      </p>
    </div>
    <div class="list">
      <v-container>
        <v-row>
          <v-col md="4">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="350"
                :src="require('@/assets/images/farmers.jpeg')"
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
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="350"
                :src="require('@/assets/images/retailers.png')"
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
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="350"
                :src="require('@/assets/images/customers.jpg')"
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
  </div>
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
