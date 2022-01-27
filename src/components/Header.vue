<template>
  <v-container>
    <v-toolbar flat color="#D6DFE4">
      <v-toolbar-title>
        <img
          :src="require('@/assets/images/fruityab.png')"
          class="responsive-img"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text> {{$t('home')}} </v-btn>

        <v-btn text href="#aboutUs"> {{$t('aboutUs')}} </v-btn>

        <v-btn text> {{$t('buySell')}} </v-btn>

        <v-btn
          v-for="entry in languages"
          :key="entry.title"
          @click="changeLocale(entry.language)"
          class="languages"
          text
        >
          <flag :iso="entry.flag" v-bind:squared="false" /> {{ entry.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "Header",

  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "ir", language: "ir", title: "Persian" },
      ],
    };
  },

  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>
<style scoped>
.responsive-img {
  width: 90px !important;
  margin-top: 30px;
  margin-bottom: 10px;
}
.languages {
  font-size: 18px;
}
</style>
