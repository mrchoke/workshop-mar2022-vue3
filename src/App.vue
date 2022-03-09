<template>
  <div>
    <router-link :to="{ name: 'Home' }" class="link"> Home </router-link>
    |
    <router-link :to="{ name: 'Api' }" class="link"> API </router-link>
    <hr />
  </div>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  text-decoration: none;
  color: rgb(41, 109, 41);
}

[aria-current="page"] {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: rgb(214, 118, 54);
}
</style>
