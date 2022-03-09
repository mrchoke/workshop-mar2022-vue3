<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "Hello Vue 3 + Vite",
      subtitle: "Options API",
    };
  },
  methods: {
    name_changed(e) {
      console.log(`Emit: \x1b[31mname_input from Child changed: ${e}`);
    },
  },
};
</script>
<template>
  <HelloWorld :msg="msg" :subtitle="subtitle" @name_changed="name_changed" />
</template>
