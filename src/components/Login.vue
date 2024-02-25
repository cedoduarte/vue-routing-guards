<template>
    <div>
        Enter your Username and Password<hr />
        <input type="text" placeholder="Username" v-model="username" />
        <br />
        <input type="password" placeholder="Password" v-model="password" />
        <br />
        <button @click="loginClicked">Login</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";

const router = useRouter();
const userStore = useUserStore();
const username = ref<string>("");
const password = ref<string>("");

const loginClicked = () => {
    if (username.value === "cedo" && password.value === "cedo") {
        localStorage.setItem("loggedin", "true");
        userStore.setState(true);
        router.push("/profile");
    } else {
        localStorage.setItem("loggedin", "false");
    }
}
</script>