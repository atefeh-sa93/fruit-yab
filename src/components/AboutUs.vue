<template>
  <v-row>
    <v-col cols="12" md="6">
      <div></div>
      <h3>About Us</h3>
      <p>
        Ninjacart is India's largest Fresh Produce Supply Chain Company. We are
        pioneers in solving one of the toughest supply chain problems of the
        world by leveraging innovative technology. We source fresh produce from
        farmers and deliver them to businesses within 12 hours.
      </p>
      <v-btn>Know more</v-btn>
    </v-col>
    <v-col cols="12" md="6">
      <div class="logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <div class="list-view">
          <v-img :src="require('@/assets/images/listView.png')"></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AboutUs",

  data: () => ({}),
};
</script>
