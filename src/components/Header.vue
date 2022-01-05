<template>
  <v-container>
    <v-toolbar flat color="#D6DFE4">
      <v-toolbar-title>
        <img :src="require('@/assets/images/fruityab.png')" class="responsive-img" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text> Home </v-btn>

        <v-btn text href="#aboutUs"> About Us </v-btn>

        <v-btn text> Buy/Sell </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.responsive-img{
  width:90px !important;
  margin-top:30px;
  margin-bottom:10px;
}
</style>
