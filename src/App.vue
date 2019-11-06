<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
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
@import "./colors.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $bg-primary;
  overflow-y: scroll;
}

h1,
h2,
h3,
p,
ul,
li {
  color: $white;
}

h1,
h2,
h3 {
  font-family: Oswald, Arial, sans-serif;
}

p {
  color: $white;
  padding: 0 1em 1em;
}

a {
  transition: 0.125s;
}

.container {
  margin: auto;
  width: 90%;
}

.heading {
  margin-bottom: 1.5rem;
  text-align: center;
}

.icon {
  font-size: 1.75rem;
}

.justify-lt {
  text-justify: left;
}

.margin-top {
  margin-top: 1.5rem;
}

.margin-bottom {
  margin-top: 1.5rem;
}

.panel {
  background-color: $bg-panel;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
}

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
