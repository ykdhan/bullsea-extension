<template>
    <button class="btn-render" type="button" @click="onClick">Run</button>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
    setup() {
        const onClick = () => {
            console.log("onClick");
        };

        return {
            onClick,
        };
    },
});
</script>

<style lang="scss">
.btn-render {
    color: #ddd;
    margin-top: 20px;
}
</style>
