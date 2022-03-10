<script>
export default {
  name: "Api",
  data() {
    return {
      countries: [],
      q: "",
      working: false,
      timeout: null,
    };
  },
  methods: {
    async fetchCountries() {
      if (this.q.length < 2) return;

      clearTimeout(this.timeout);
      this.working = true;
      this.countries = [];

      this.timeout = setTimeout(async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${this.q}`);
        const json = await response.json();
        this.countries = json;
        this.working = false;
      }, 700);
    },
    native_name(name) {
      for (let key in name) {
        if (key !== "eng") {
          return name[key].common;
        }
      }
    },
  },
  watch: {
    q(v) {
      if (v) this.fetchCountries();
    },
  },
};
</script>
<template>
  <h1>Fetch API</h1>
  <div>
    <input type="text" v-model="q" placeholder="Search" />
  </div>
  <div v-if="countries.message">
    <h3>{{ countries.message }}</h3>
  </div>
  <div v-if="working">
    <h3>Loading...</h3>
  </div>
  <div v-if="countries.length">
    <h3>Search Result</h3>
    <h3>Found: {{ countries.length }}</h3>
    <div
      :style="{
        textAlign: 'left',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '80%',
      }"
    >
      <ul>
        <li v-for="country in countries" :key="country.name.common">
          <img :src="country.flags.png" :style="{ width: '32px' }" />
          {{ country.name.common }} - {{ native_name(country.name.nativeName) }}
          {{ country.flag || "" }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
ul {
  list-style: none;
  padding: 0;
  line-height: 2.5;
}
</style>
