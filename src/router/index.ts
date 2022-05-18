import { createRouter, createWebHistory } from "vue-router";
import Envelope from "../views/Envelope.vue";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import Gallery from "../views/Gallery.vue";

const routes = [
    {
        path: "/",
        name: "Envelope",
        component: Envelope,
        meta: { transition: 'slide-bottom' },
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { transition: 'slide-bottom' },
    },
    {
        path: "/event",
        name: "Event",
        component: Event,
        meta: { transition: 'slide-bottom' },
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
        meta: { transition: 'slide-bottom' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;