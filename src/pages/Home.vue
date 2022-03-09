<script setup>
import HelloWorld from "../components/HelloWorld.vue";

const msg = "Hello Vue 3 + Vite";
const subtitle = "Script Setup";
const name_changed = (e) => {
  console.log(`Emit: \x1b[31mname_input from Child changed: ${e}`);
};
</script>
<template>
  <HelloWorld :msg="msg" :subtitle="subtitle" @name_changed="name_changed" />
</template>
