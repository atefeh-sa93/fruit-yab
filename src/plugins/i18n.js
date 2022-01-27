import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    supplyChain: "The Supply Chain Of Harvests",
    bannerContent:
      "Lean and flexible logistics and smart matching between farmers and businesses",
    learnMore: "Learn more...",
    aboutUs: "About Us",
    aboutUsContent:
      "Fruityab is driven by state of the art technology to minimize not only the harvests waste but also the delivery time plus maximize the quality and users satisfaction",
    createOpportunities: 'Creating opportunities for everyone',
    opportunitiesContent:'We are the first platform enabling increased benefits for farmers, retailers, and consumers.',
    farmers: 'Benefits for Farmers',
    farmersBullet1: 'Up to 20% more revenue',
    farmersBullet2: 'Payment in a month',
    farmersBullet3: 'Transparent process',
    retailers: 'Convenience for Retailers',
    retailersBullet1: 'Lower pricing',
    retailersBullet2: 'High-quality products',
    retailersBullet3: 'The flexible and convenient timetable of buy',
    consumers: 'Savings for Consumers',
    consumersBullet1: 'Good hygiene',
    consumersBullet2: 'Better quality',
    consumersBullet3: 'Less price',
    consumersBullet4: 'More consume',
    meetTeams: 'Meet our teams',
    meetTeamsContent: 'The people who drive the core functions of FruitYab.',
    brand: 'FruitYab',
    home: 'Home',
    buySell: 'Buy/Sell',
    inTouch: 'Connect with us'

  },
  fa: {
    supplyChain: "زنجیره تامین برداشت",
    bannerContent:
      "لجستیک کم‌هزینه و منعطف و تطبیق هوشمند بین کشاورزان و مشاغل",
    learnMore: "بیشتر بدانید...",
    aboutUs: "درباره ما",
    aboutUsContent:
      "فروت‌یاب با استفاده از آخرین فن آوری برای به حداقل رساندن نه تنها ضایعات برداشت، بلکه همچنین زمان تحویل و به حداکثر رساندن کیفیت و رضایت کاربران هدایت می شود.",
    createOpportunities: 'ایجاد فرصت برای همه',
    opportunitiesContent:'ما اولین پلتفرمی هستیم که مزایای بیشتری را برای کشاورزان، خرده فروشان و مصرف کنندگان فراهم می کند.',
    farmers: 'مزایا برای کشاورزان',
    farmersBullet1: 'افزایش ۲۰٪ درآمد',
    farmersBullet2: 'پرداخت ماهانه',
    farmersBullet3: 'فرآیندهای شفاف',
    retailers: 'تسهیل برای خرده‌فروشان',
    retailersBullet1: 'قیمت‌گذاری پایین',
    retailersBullet2: 'محصولات با کیفیت بالا',
    retailersBullet3: 'جدول زمانی منعطف و آسان خرید',
    consumers: 'پس‌انداز برای مصرف‌کنندگان',
    consumersBullet1: 'بهداشت قوی',
    consumersBullet2: 'کیفیت بهتر',
    consumersBullet3: 'قیمت پایین‌تر',
    consumersBullet4: 'مصرف بیشتر',
    meetTeams: 'آشنایی با اعضای تیم',
    meetTeamsContent: 'افراد تشکیل‌دهنده‌ی هسته‌ی فروت‌یاب',
    brand: 'فروت‌یاب',
    home: 'خانه',
    buySell: 'خرید/فروش',
    inTouch: 'ارتباط با ما'
  },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "fa", // set fallback locale
  messages, // set locale messages
});

export default i18n;
