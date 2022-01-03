<template>
  <v-row class="text-center">
    <v-col cols="12" md="6">
      <h3>
        <span>Revolutionizing the Fresh Produce Supply Chain</span>
      </h3>
      <h6>
        Driven by cutting edge technology, we source fresh produce from farmers
        and sell to businesses, across India
      </h6>
      <v-btn>Learn More</v-btn>
    </v-col >
    <v-col cols="12" md="6">
      <v-img :src="require('@/assets/images/download.jpeg')"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BannerInfo",

  data: () => ({
  }),
};
</script>
