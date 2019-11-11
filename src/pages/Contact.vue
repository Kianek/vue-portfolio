<template>
  <Page>
    <header>
      <h2 class="heading">Contact Me</h2>
      <img
        src="../assets/keyboard.jpg"
        alt="Dark keyboard"
      >
    </header>
    <div class="contact-card">
      <div class="panel">
        <p>
          Want to get in touch? Take a look at some of my other projects on
          GitHub, check me out on LinkedIn, or shoot me a message below.
        </p>

        <form @submit="sendMessage">
          <input
            required
            type="text"
            placeholder="Name"
            v-model="name"
          />
          <input
            required
            type="email"
            placeholder="Email"
            v-model="email"
          />
          <textarea
            required
            name="message"
            placeholder="Message"
            v-model="message"
          ></textarea>
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "../components/layout/Page";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    sendMessage: function(e) {
      e.preventDefault();

      const message = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      this.name = this.email = this.message = "";
      console.log("Submitting message!");
      console.log(message);
    }
  },
  components: {
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
    width: 100%;
    z-index: 10;
  }

  img {
    height: auto;
    width: 100%;
  }
}

.contact-card {
  margin: 0 auto;
  max-width: 500px;
  width: 70%;
}

.panel > address > ul {
  list-style-type: none;
}

.panel > p {
  border-bottom: solid 1px $dark-gray;
  color: $dark-gray;
  font-family: "Avenir", Arial, sans-serif;
  margin-bottom: 1.5em;
  padding: 1em;
}
.contact-btn-group {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1em;
  margin-bottom: 1rem;
}

.btn-rounded-lt {
  border-radius: 50px 0 0 50px;
}

.btn-rounded-rt {
  border-radius: 0 50px 50px 0;
}

.contact-info {
  background-color: $dark-gray;
  color: $white;
  font-size: 2rem;
  padding: 1rem;
  text-decoration: none;
  transition: 0.2s;
}

.contact-info:hover {
  color: $dark-gray;
  background-color: $white;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 70%;

  input,
  textarea {
    border: none;
    border-radius: 5px;
    font-size: 1em;
    height: 1.5em;
    margin-bottom: 1rem;
    padding: 0.5em;
  }

  input {
    height: 1.5em;
  }

  input[type="submit"] {
    background-color: $white;
    color: #45454b;
    height: 100%;
    transition: 0.1s;

    &:hover {
      background-color: #c5c5c5;
      cursor: pointer;
    }
  }

  textarea {
    font-size: 1em;
    height: 5rem;
  }
}

address {
  font-style: normal;
}

@media screen and (min-width: 650px) {
  header > img {
    object-fit: cover;
    height: 600px;
    width: 100%;
  }
}
</style>
