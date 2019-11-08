<template>
  <main
    id="page"
    :class="classes"
  >
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    classes: {
      default: "",
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
#page {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
}
</style>
