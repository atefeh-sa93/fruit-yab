<template>
  <div>
    <v-footer padless style="background:#fff;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D8E1E6"
          fill-opacity="1"
          d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <v-card flat tile class="flex text-center" color="#D8E1E6">
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
                  <v-btn v-for="item in socials" :key="item.icon" :href="item.href" class="mx-4" icon>
                    <v-icon size="24px" class="socials">
                      {{ item.icon }}
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
    socials: [
      {
        icon: "mdi-twitter",
        href:"https://twitter.com/fruityab"
      },
      {
        icon: "mdi-linkedin",
        href:"https://www.linkedin.com/in/fruityab-company-18b55022a/"
      },
      {
        icon: "mdi-instagram",
        href: "https://www.instagram.com/fruityab/"
      }

    ],
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
