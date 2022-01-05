<template>
  <v-app>
    <v-app-bar app flat color="#D6DFE4" height="100">
      <Header />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: { Header, Footer },
};
</script>

<style scoped>
.nav-info {
  display: block;
}
.v-main{
  padding:170px 0px 170px !important;
}
</style>
