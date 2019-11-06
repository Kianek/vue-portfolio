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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
}
</style>
