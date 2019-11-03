<template>
  <main>
    <div class="container">
      <h1 class="heading">Projects</h1>
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
@import "../styles.scss";

main {
  background-color: $bg-primary;
  margin-bottom: auto;
}

.heading {
  margin-top: 1.5rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 80%;
}

@media screen and (min-width: 600px) {
  .projects {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
