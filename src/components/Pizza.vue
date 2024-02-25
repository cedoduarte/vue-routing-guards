<template>
    <div>
        I am Pizza <br />
        <router-link to="italian">Italian</router-link>
        |
        <router-link to="american">American</router-link>
        <br />
        <router-view class="orange-border"></router-view>
    </div>
</template>