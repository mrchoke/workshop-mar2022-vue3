<script>
import { ref, watch } from "vue";

export default {
  name: "Api",
  setup() {
    const q = ref("");
    const countries = ref([]);
    const working = ref(false);
    const timeout = ref(0);

    const fetchCountries = async () => {
      if (q.value.length < 2) return;

      clearTimeout(timeout.value);
      working.value = true;
      countries.value = [];

      timeout.value = setTimeout(async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${q.value}`);
        const json = await response.json();
        countries.value = json;
        working.value = false;
      }, 700);
    };

    const native_name = (name) => {
      for (let key in name) {
        if (key !== "eng") {
          return name[key].common;
        }
      }
    };

    watch(q, (v) => {
      if (v) fetchCountries();
    });
    return {
      countries,
      q,
      working,
      timeout,
      fetchCountries,
      native_name,
    };
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
