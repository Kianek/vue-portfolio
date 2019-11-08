<template>
  <li class="project">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <a
      :href="url"
      class="project-link"
      target="_blank"
    >
      <i class="fab fa-github-alt" />
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
@import "../colors.scss";
@import "../styles.scss";

$bg: #f0f0f0;

.project {
  align-items: center;
  background-color: $lighter-gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;

  h2 {
    @extend %font-heading;

    border-bottom: 1px solid darken(#c0c0c0, 10%);
    flex: 0 0 auto;
    padding: 0.5rem;
    text-align: center;
    width: 100%;
  }

  p {
    @extend %font-content;

    flex: 1 1 auto;
    padding: 1rem 1.5rem;
  }

  .project-link {
    align-self: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid darken(#c0c0c0, 10%);
    color: $dark-gray;
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 0.25rem;
    text-align: center;
    width: 100%;
  }

  .project-link:hover {
    background-color: darken($lighter-gray, 15%);
    color: darken($dark-gray, 15%);
  }
}

@media screen and (min-width: 600px) {
  .project {
    margin: 1rem;
    width: 300px;
  }
}
</style>
