<template>
  <nav>
    <div class="nav-items">
      <router-link to="/" class="branding">
        <span>Keanu</span> Allridge
      </router-link>
      <button @click="toggleMenu()" class="toggle-btn">
        <i class="fas fa-bars"></i>
      </button>
      <div id="dropdown-content" :class="[{show: isToggled}]">
        <router-link
          v-for="path in paths"
          :key="path.url"
          :to="path.url"
          @click.native="isToggled = false"
          class="link"
          exact-active-class="active"
        >{{ path.name }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Link from "../shared/Link";
import Branding from "../shared/Branding";
import ToggleButton from "../shared/ToggleButton";

export default {
  data() {
    return {
      isToggled: false,
      paths: [
        { url: "/", name: "Home" },
        { url: "/projects", name: "Projects" },
        { url: "/contact", name: "Contact" }
      ]
    };
  },
  created() {
    window.addEventListener("click", this.closeMenu);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeMenu);
  },
  methods: {
    toggleMenu: function() {
      this.isToggled = !this.isToggled;
    },
    closeMenu: function(e) {
      if (!this.$el.contains(e.target)) {
        this.isToggled = false;
      }
    }
  },
  components: {
    Link,
    Branding,
    ToggleButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles.scss";

nav {
  background-color: $bg-secondary;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
}

#dropdown-content {
  display: none;

  &.show {
    background-color: $bg-secondary;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;

    .link {
      text-align: center;
      width: 100%;
    }
  }
}

.branding {
  color: $white;
  font-size: 1.5em;
  margin-right: auto;
  padding: 1;
  text-decoration: none;

  span {
    color: $orange;
  }
}

.link {
  color: #fff;
  font-size: 1.1em;
  text-decoration: none;
  padding: 1em;

  &:hover {
    color: #c5c5c5;
  }
}

.toggle-btn {
  background-color: $bg-secondary;
  border: none;
  color: $white;
  cursor: pointer;
  font-size: 1.1em;
  padding: 1em;
}

.active {
  color: #c5c5c5;
}

@media screen and (min-width: 600px) {
  #dropdown-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .toggle-btn {
    display: none;
  }
}
</style>