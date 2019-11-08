<template>
  <div class="container">
    <div class="not-found panel">
      <h1 class="heading">404</h1>
      <p>
        There's nothing to see here, but why not click one of the links above,
        or visit me on GitHub or LinkedIn?
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../colors";

.not-found {
  margin: 1rem auto 2rem;

  h1 {
    color: $dark-gray;
  }

  p {
    color: $dark-gray;
    font-family: "Avenir", Arial, sans-serif;
  }
}
</style>
