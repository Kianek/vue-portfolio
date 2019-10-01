<template>
  <router-link :class="[isBranding]" :to="url">{{ link }}</router-link>
</template>

<script>
export default {
  props: {
    url: String,
    link: String,
    branding: Boolean
  },
  data() {
    return {
      linkClass: "link",
      brandingClass: "branding"
    };
  },
  computed: {
    isBranding() {
      return {
        branding: this.branding,
        link: !this.branding
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.branding {
  color: #ffa500;
  font-size: 1.5em;
  margin-right: auto;
  padding: 1;
  text-decoration: none;
}

.link {
  color: #fff;
  text-decoration: none;
  padding: 1em;

  &:hover {
    color: #c5c5c5;
  }
}
</style>