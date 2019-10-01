<template>
  <nav>
    <div class="nav-content">
      <Link branding url="/" link="Keanu Allridge" />
      <Link url="/" link="Home" />
      <Link url="/projects" link="Projects" />
      <Link url="/contact" link="Contact" />
    </div>
  </nav>
</template>

<script>
import Link from "../shared/Link";

export default {
  components: {
    Link
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #45454b;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
}
</style>