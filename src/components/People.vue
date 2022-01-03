<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Meet our team</h3>
        <p>The people who drive the core functions of Ninjacart.</p>
      </v-col>
    </v-row>
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
</template>
