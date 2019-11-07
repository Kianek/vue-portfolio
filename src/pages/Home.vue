<template>
  <Page classes="black">
    <header>
      <h2>Inspirational Quote</h2>
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
@import "../colors";

$bg: #f0f0f0;

header {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  h2 {
    color: $bg;
    font-size: 3rem;
    position: absolute;
    top: 30%;
    left: 0;
    text-align: center;
    text-shadow: 0 5px 5px $orange;
    width: 100%;
    z-index: 10;
  }
}

.black {
  background-color: #000;
}

#bg-image {
  height: auto;
  width: 100%;
}

.blurbs {
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;
  min-width: 60%;
  max-width: 70%;

  .blurb {
    border-radius: 5px;
    font-family: "Avenir", Arial, sans-serif;
    font-size: 1em;
    text-align: justify;
    max-width: 90%;
    background-color: $bg;
    margin: auto;

    h2 {
      color: #45454b;
      line-height: 1.7em;
      text-align: center;
    }

    p {
      @extend %font-content;
      border-top: solid 1px #45454b;
      padding: 1em;
    }
  }
}
</style>
