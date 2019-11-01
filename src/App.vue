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
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import "./styles.scss";

body {
  background-color: $bg-primary;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Oswald", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
