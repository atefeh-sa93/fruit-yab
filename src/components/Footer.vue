<template>
  <div>
    <v-footer padless>
      <svg
        id="wave"
        style="transform: rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 260"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop
              stop-color="rgba(237.213, 237.213, 237.213, 1)"
              offset="0%"
            ></stop>
            <stop
              stop-color="rgba(237.213, 234.892, 229.763, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,104L48,95.3C96,87,192,69,288,69.3C384,69,480,87,576,108.3C672,130,768,156,864,151.7C960,147,1056,113,1152,112.7C1248,113,1344,147,1440,160.3C1536,173,1632,165,1728,143C1824,121,1920,87,2016,60.7C2112,35,2208,17,2304,17.3C2400,17,2496,35,2592,69.3C2688,104,2784,156,2880,182C2976,208,3072,208,3168,190.7C3264,173,3360,139,3456,112.7C3552,87,3648,69,3744,52C3840,35,3936,17,4032,26C4128,35,4224,69,4320,82.3C4416,95,4512,87,4608,99.7C4704,113,4800,147,4896,143C4992,139,5088,95,5184,86.7C5280,78,5376,104,5472,108.3C5568,113,5664,95,5760,95.3C5856,95,5952,113,6048,99.7C6144,87,6240,43,6336,34.7C6432,26,6528,52,6624,73.7C6720,95,6816,113,6864,121.3L6912,130L6912,260L6864,260C6816,260,6720,260,6624,260C6528,260,6432,260,6336,260C6240,260,6144,260,6048,260C5952,260,5856,260,5760,260C5664,260,5568,260,5472,260C5376,260,5280,260,5184,260C5088,260,4992,260,4896,260C4800,260,4704,260,4608,260C4512,260,4416,260,4320,260C4224,260,4128,260,4032,260C3936,260,3840,260,3744,260C3648,260,3552,260,3456,260C3360,260,3264,260,3168,260C3072,260,2976,260,2880,260C2784,260,2688,260,2592,260C2496,260,2400,260,2304,260C2208,260,2112,260,2016,260C1920,260,1824,260,1728,260C1632,260,1536,260,1440,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
        ></path>
      </svg>
      <v-card flat tile class="flex text-center" color="#EDECEA">
        <v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <div class="company-list">
                  <h6>FruitYab</h6>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Buy/Sell</li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="footer-socials">
                  <h6>Connect with us</h6>
                  <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                    <v-icon size="24px" class="socials">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="py-2 black--text text-center">
          © {{ new Date().getFullYear() }} — <strong>FruitYab</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
.company-list h6 {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 16px;
}
.company-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.company-list ul li {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 16px;
  color: #607d8b;
}
.footer-socials h6 {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 16px;
}
.footer-socials .socials:hover {
  color: #5caa45;
}
</style>
