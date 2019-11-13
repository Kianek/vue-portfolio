<template>
  <Page>
    <header>
      <h2 class="heading">Projects</h2>
      <img
        src="../assets/computer-desk.jpg"
        alt="Computer on desk with mug and notebook"
      >
    </header>
    <div class="container">
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
  </Page>
</template>

<script>
import Project from "../components/Project";
import Page from "../components/layout/Page.vue";
import projects from "./data/projects.json";

export default {
  data() {
    return {
      projects
    };
  },
  components: {
    Project,
    Page
  }
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";

header {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;

  h2 {
    color: $lighter-gray;
    font-size: 3rem;
    position: absolute;
    left: 0;
    top: 30%;
    text-align: center;
    text-shadow: 0 5px 5px #2d81ff;
    width: 100%;
    z-index: 10;
  }

  img {
    height: auto;
    width: 100%;
  }
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

@media screen and (min-width: 650px) {
  .projects {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  header > img {
    object-fit: cover;
    height: 600px;
    width: 100%;
  }
}
</style>
