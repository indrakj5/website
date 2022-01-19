<template>
  <div>
     <router-view />
     <HeroImage />
     <Navbar />
     <Home :data="body" /> 
     <About :data="body" /> 
     <Destinasi />
     <Contact />
     <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Destinasi from "./components/Destinasi.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import HeroImage from "./components/HeroImage.vue";
export default {
  data() {
    return {
      body: []
    }
  },
  created() {
    this.getAPIbody();
  },
  methods: {
    async getAPIbody() {
      try {
        const url = 'http://localhost:3000/body';
        const response = await axios.get(url);
        this.body = response.data;
      } catch(err) {
        console.log(err);
      }
    }
  },
  name: "App",
  components: {
    HeroImage,
    Navbar,
    Home,
    About,
    Destinasi,
    Contact,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
