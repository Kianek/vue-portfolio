<template>
  <main>
    <div class="container">
      <h1 class="heading"> Projects </h1>
      <ul class="projects">
        <Project
          v-for="project in projects"
          :key="project.id"
          :name="project.name"
          :description="project.description"
          :url="project.github"
        />
      </ul>
    </div>
  </main>
</template>

<script>
import Project from "../components/Project";
import projects from "./data/projects.json";

export default {
  data() {
    return {
      projects
    };
  },
  components: {
    Project
  }
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";

main {
  background-color: $black;
  margin-bottom: auto;
}

.heading {
  margin-top: 1.5rem;
}

.projects {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 80%;
}

@media screen and (min-width: 600px) {
  .projects {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
