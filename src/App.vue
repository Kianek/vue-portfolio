<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Home,
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
$bg-primary: #686870;
$bg-secondary: #45454b;
$bg-panel: #89898f;
$link-active: #c5c5c5;
$white: #fff;
$orange: #ff9100;

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Oswald", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
