<template>
  <footer>
    <div class="container">
      <a href="https://github.com/Kianek" class="link">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/keanu-allridge" class="link">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <hr />
    <p>&copy; Keanu Allridge. All rights reserved.</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles.scss";

footer {
  align-items: center;
  background-color: $bg-secondary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: $white;
    font-size: 1.5em;
    padding: 0.75em;

    &:hover {
      color: $link-active;
    }
  }

  hr {
    color: $bg-primary;
    margin-bottom: 1em;
    width: 80%;
  }

  p {
    color: $orange;
    margin-bottom: 1em;
  }
}
</style>