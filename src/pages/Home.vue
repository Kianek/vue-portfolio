<template>
  <Page>
    <div class="container">
      <div v-for="blurb in blurbs" :key="blurb.title" class="blurbs">
        <div class="panel">
          <h2>{{ blurb.title }}</h2>
          <p class="blurb">{{ blurb.body }}</p>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page";
import data from "./data/home.json";

export default {
  data() {
    return {
      blurbs: data
    };
  },
  components: {
    Page
  }
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

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
