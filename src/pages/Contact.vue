<template>
  <Page>
    <div class="contact-card">
      <h1 class="heading">Contact Me</h1>
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
@import "../styles.scss";

main {
  background-color: $bg-primary;
  min-height: 100%;
}

.contact-card {
  margin: 0 auto;
  width: 70%;
}

.panel > address > ul {
  list-style-type: none;
}

.panel > p {
  font-family: Verdana, Arial, sans-serif;
  padding: 1em;
}
.contact-btn-group {
  display: flex;
  align-items: center;
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
  background-color: $bg-secondary;
  color: $white;
  font-size: 2rem;
  padding: 1rem;
  text-decoration: none;
  transition: 0.2s;
}

.contact-info:hover {
  color: $bg-secondary;
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
    margin-bottom: 1rem;
    font-size: 1em;
    padding: 0.5em;
  }

  input {
    height: 1.5em;
  }

  input[type="submit"] {
    background-color: $bg-primary;
    color: $white;
    height: 100%;
    transition: 0.1s;

    &:hover {
      background-color: $bg-secondary;
      color: orange;
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
</style>
