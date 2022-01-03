<template>
  <div>
    <banner-info />
    <about-us />
    <opportunities />
    <people />
  </div>
</template>

<script>
import BannerInfo from "../components/BannerInfo";
import AboutUs from "../components/AboutUs";
import Opportunities from '../components/Opportunities';
import People from '../components/People';

export default {
  name: "Home",

  components: {
    BannerInfo,
    AboutUs,
    Opportunities,
    People
  },
};
</script>
