<template>
  <div class="container">
    <div class="contact-card">
      <h1 class="heading">Contact Me</h1>
      <div class="panel">
        <p>
          Want to get in touch? Take a look at some of my other projects on GitHub,
          check me out on LinkedIn, or shoot me an email directly.
        </p>
        <address>
          <ul class="contact-btn-group">
            <li>
              <a class="contact-info btn-rounded-lt" href="https://github.com/Kianek">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a class="contact-info" href="https://linkedin.com/in/keanu-allridge">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a class="contact-info btn-rounded-rt" href="mailto:kallridge92@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </address>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

main {
  background-color: $bg-primary;
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

address {
  font-style: normal;
}
</style>