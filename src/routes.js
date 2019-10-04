import VueRouter from "vue-router";

// Routes
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Contact from "./pages/Contact.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "Keanu Allridge | Home" } },
  {
    path: "/projects",
    component: Projects,
    meta: { title: "Keanu Allridge | Projects" }
  },
  {
    path: "/contact",
    component: Contact,
    meta: { title: "Keanu Allridge | Contact" }
  },
  { path: "*", component: NotFound, meta: { title: "Keanu Allridge | 404" } }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
