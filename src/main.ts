import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { RouterOptions, createRouter, createWebHistory } from 'vue-router'
import { createPinia } from "pinia";

const routerOptions: RouterOptions = {
    routes: [
        {
            path: "/",
            component: () => import("./components/Home.vue")
        },
        {
            path: "/login",
            component: () => import("./components/Login.vue")
        },
        {
            path: "/profile",
            component: () => import("./components/Profile.vue")
        },
        {
            path: "/foods",
            component: () => import("./components/Foods.vue"),
            children: [
                {
                    path: "pizza",
                    component: () => import("./components/Pizza.vue"),
                    children: [
                        {
                            path: "italian",
                            component: () => import("./components/ItalianPizza.vue")
                        },
                        {
                            path: "american",
                            component: () => import("./components/AmericanPizza.vue")
                        }
                    ]
                }
            ]
        }
    ],
    history: createWebHistory()
};

const router = createRouter(routerOptions);

router.beforeEach((to, from) => {
    const loggedin = localStorage.getItem("loggedin") as string;
    const isLoggedin: boolean = JSON.parse(loggedin);
    if (to.path === "/" || to.path === "/profile" || to.path.includes("/foods")) {
        if (isLoggedin) {
            return true;
        } else {
            return "/login";
        }
    }
    return true;
});

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
