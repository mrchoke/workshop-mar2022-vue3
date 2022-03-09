<script>
import { ref, computed, onMounted, onBeforeMount, watch } from "vue";

export default {
  props: {
    msg: String,
    subtitle: String,
  },
  emits: ["name_changed"],

  setup(_, { emit }) {
    const count = ref(0);
    const name_input = ref("");
    const name_count = computed(
      () => `${name_input.value}  length = ${name_input.value.length}`
    );

    const increment = () => {
      count.value++;
    };

    const reset_count = () => {
      count.value = 0;
    };

    onMounted(() => console.log("setup mounted!!"));
    onBeforeMount(() => {
      console.log("setup beforeMount!!");
    });

    watch(name_input, (new_value, old_value) => {
      emit("name_changed", new_value);
      console.log(`Watch: name_input changed from ${old_value} to ${new_value}`);
    });
    console.log("setup !!");
    return {
      count,
      name_input,
      name_count,
      increment,
      reset_count,
    };
  },

  beforeCreate() {
    console.log("before create!!");
  },
  created() {
    console.log("created!!");
  },
  beforeMount() {
    console.log("before mount!!");
  },
  mounted() {
    console.log("mounted!!");
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ subtitle }}</h2>
  <h3 v-if="name_input">{{ name_count }}</h3>
  <div>
    <button type="button" @click="increment()">count is: {{ count }}</button>
    <button type="button" @click="reset_count()">Reset</button>
  </div>
  <div>
    <label>
      Input Your Name:
      <input type="text" v-model="name_input" placeholder="Your Name" />
    </label>
  </div>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

div {
  margin: 15px;
}
</style>
