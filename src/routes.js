import VueRouter from "vue-router";

// Routes
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Contact from "./pages/Contact.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
