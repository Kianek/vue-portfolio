<template>
  <main id="page">
    <slot></slot>
  </main>
</template>


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