<template>
  <router-link class="branding" to="/" exact>
    <span>Keanu</span> Allridge
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles.scss";

.branding {
  color: #fff;
  font-size: 1.5em;
  margin-right: auto;
  padding: 1;
  text-decoration: none;
}
span {
  color: $orange;
}
</style>