<template>
  <Page classes="black">
    <header>
      <h2>[Inspirational Quote]</h2>
      <img
        id="bg-image"
        src="@/assets/computer-bg.jpg"
        alt="Glasses in front of a monitor"
      >
    </header>
    <div class="container">
      <div
        v-for="blurb in blurbs"
        :key="blurb.title"
        class="blurbs"
      >
        <div class="blurb">
          <h2>{{ blurb.title }}</h2>
          <p>
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
@import "../colors.scss";

header {
  display: flex;
  flex-direction: column;
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

.black {
  background-color: $black;
}

.blurbs {
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;
  max-width: 70%;
  min-width: 60%;

  .blurb {
    border-radius: 5px;
    font-family: "Avenir", Arial, sans-serif;
    font-size: 1em;
    text-align: justify;
    max-width: 90%;
    background-color: $lighter-gray;
    margin: auto;

    h2 {
      color: $dark-gray;
      line-height: 1.7em;
      text-align: center;
    }

    p {
      @extend %font-content;
      border-top: solid 1px $dark-gray;
      padding: 1em;
    }
  }
}

@media screen and (min-width: 650px) {
  header > #bg-image {
    object-fit: cover;
    height: 600px;
    width: 100%;
  }
}
</style>
