<template>
  <nav>
    <div class="nav-items">
      <router-link
        to="/"
        class="branding"
      >
        <span>Keanu</span> Allridge
      </router-link>
      <button
        class="toggle-btn"
        @click="toggleMenu()"
      >
        <i class="fas fa-bars" />
      </button>
      <div
        id="dropdown-content"
        :class="[{ show: isToggled }]"
      >
        <router-link
          v-for="path in paths"
          :key="path.url"
          :to="path.url"
          class="link"
          exact-active-class="active"
          @click.native="isToggled = false"
        >
          {{ path.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../colors.scss";

nav {
  background-color: $dark-gray;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 10%;
  position: relative;
}

#dropdown-content {
  display: none;

  &.show {
    background-color: $dark-gray;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 100;

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
  border-bottom: 3px solid transparent;
  color: $white;
  font-size: 1.1em;
  text-decoration: none;
  padding: 1em;

  &:hover {
    color: $light-gray;
  }

  &.active {
    color: $orange;
    border-color: $orange;
  }
}

.toggle-btn {
  background-color: $dark-gray;
  border: none;
  color: $white;
  cursor: pointer;
  font-size: 1.1em;
  padding: 1em;
}

@media screen and (min-width: 600px) {
  #dropdown-content {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .toggle-btn {
    display: none;
  }
}
</style>
