<template>
  <div>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/profile">Profile</router-link>
    |
    <router-link to="/foods/">Foods</router-link>
    |
    <button @click="closeSessionClicked">Close session</button>
    <hr />
    <router-view class="orange-border"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user";

const userStore = useUserStore();
const router = useRouter();

const closeSessionClicked = () => {
  localStorage.setItem("loggedin", "false");
  userStore.setState(false);
  router.push("/login");
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
