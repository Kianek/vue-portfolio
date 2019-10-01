import VueRouter from "vue-router";

// Routes
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Contact from "./pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
