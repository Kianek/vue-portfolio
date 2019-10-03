<template>
  <button @click="$emit('toggle')">
    <div v-if="isToggled">
      <i class="fas fa-times"></i>
    </div>
    <div v-else>
      <i class="fas fa-bars"></i>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isToggled: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles.scss";

button {
  background-color: $bg-secondary;
  border: none;
  color: #fff;
  font-size: 1.1em;
  text-decoration: none;
  padding: 1em;

  &:hover {
    color: $link-active;
    cursor: pointer;
  }
}

@media screen and (min-width: 600px) {
  button {
    display: none;
  }
}
</style>