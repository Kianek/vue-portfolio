<template>
  <li class="project">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <a :href="url" class="project-link" target="_blank">
      <i class="fab fa-github-alt"></i>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    url: String
  }
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

$bg: #f0f0f0;

.project {
  background-color: $bg;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  overflow: hidden;
  width: 100%;

  h2 {
    @extend %font-heading;

    width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-bottom: 1px solid darken(#c0c0c0, 10%);
  }

  p {
    @extend %font-content;
    padding: 1rem 1.5rem;
  }

  .project-link {
    background-color: $bg;
    border-top: 1px solid darken(#c0c0c0, 10%);
    color: $bg-secondary;
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 0.25rem;
    text-align: center;
    width: 100%;
    align-self: center;
  }

  .project-link:hover {
    background-color: darken($bg, 15%);
    color: darken($bg-secondary, 15%);
  }
}

@media screen and (min-width: 600px) {
  .project {
    margin: 1rem;
    height: 100%;
    width: 300px;
  }
}
</style>
