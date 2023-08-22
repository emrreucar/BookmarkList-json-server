import { createWebHistory, createRouter } from 'vue-router';


const routes = [
    { name: "HomePage", path: '/', component: () => import("@/views/HomePage.vue") },
    { name: "NewBookmark", path: '/new', component: () => import("@/views/NewBookmark.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;