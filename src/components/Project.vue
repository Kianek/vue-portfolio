<template>
  <div>
    <li class="project">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <a :href="url" class="project-link" target="_blank">
        <i class="fab fa-github-alt"></i>
      </a>
    </li>
  </div>
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

.project {
  background-color: $bg-panel;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  overflow: hidden;
  width: 100%;

  p {
    font-family: Verdana, Arial, sans-serif;
    text-align: justify;
  }

  .project-link {
    background-color: $white;
    color: $bg-secondary;
    font-size: 1.5rem;
    padding-top: 0.25em;
    text-align: center;
    width: 100%;
  }

  .project-link:hover {
    background-color: $bg-secondary;
    color: $white;
  }

  .project-link:hover {
    color: $link-active;
  }
}

@media screen and (min-width: 600px) {
  .project {
    margin: 1rem;
    width: 300px;
  }
}
</style>