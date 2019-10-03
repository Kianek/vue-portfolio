<template>
  <nav>
    <div class="nav-content">
      <Branding />
      <ToggleButton v-on:toggle="isToggled = !isToggled" :isToggled="isToggled" />
      <div class="nav-items">
        <Link url="/" link="Home" exact />
        <Link url="/projects" link="Projects" />
        <Link url="/contact" link="Contact" />
      </div>
    </div>
  </nav>
</template>

<script>
import Link from "../shared/Link";
import Branding from "../shared/Branding";
import ToggleButton from "../shared/ToggleButton";

export default {
  data() {
    return {
      isToggled: false,
      showDropdown: {}
    };
  },
  components: {
    Link,
    Branding,
    ToggleButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles.scss";

nav {
  background-color: $bg-secondary;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1.5rem;
  // width: 90%;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .nav-content {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .nav-items {
    background-color: $bg-secondary;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;
  }
}
</style>