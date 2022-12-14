<template>
    <div class="logo">Logo</div>
    <p class="title">bullsea.io</p>
    <p>작은 불씨에서 시작된다.</p>

    <!-- <Render /> -->
</template>

<script setup>
import { defineComponent } from "vue";
import Render from "./components/Render.vue";

defineComponent({
    components: {
        Render,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
.logo {
    width: 40px;
    height: 90px;
    margin: 0 auto;
    background-image: url("./assets/logo.svg");
    background-size: cover;
    text-indent: -999px;
    overflow: hidden;
}

.title {
    margin-top: 18px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    color: #f8f9fa;
}

p {
    font-size: 14px;
    line-height: 1.1;
    margin-top: 24px;
}
</style>
