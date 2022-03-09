<script>
export default {
  props: {
    msg: String,
    subtitle: String,
  },
  emits: ["name_changed"],
  data() {
    return {
      count: 0,
      name_input: "",
    };
  },
  computed: {
    name_count() {
      return `${this.name_input}  length = ${this.name_input.length}`;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    reset_count() {
      this.count = 0;
    },
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
  watch: {
    name_input(new_value, old_value) {
      this.$emit("name_changed", new_value);
      console.log(`Watch: name_input changed from ${old_value} to ${new_value}`);
    },
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
