<template>
  <Page>
    <div class="container bg-image">
      <div
        v-for="blurb in blurbs"
        :key="blurb.title"
        class="blurbs"
      >
        <div class="panel">
          <h2>{{ blurb.title }}</h2>
          <p class="blurb">
            {{ blurb.body }}
          </p>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page";
import data from "./data/home.json";

export default {
  components: {
    Page
  },
  data() {
    return {
      blurbs: data
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

div.bg-image {
  background-image: url("../assets/computer-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
}

.blurbs {
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto 0;
  min-width: 60%;
  max-width: 70%;

  .blurb {
    font-family: Verdana, Arial, sans-serif;
    font-size: 1em;
    text-align: justify;
    max-width: 90%;
  }
}
</style>
