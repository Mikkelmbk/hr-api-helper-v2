<template>
  <div id="nav">
      <router-link to="/recommendation-rest">Recommendation REST Endpoint</router-link>
      <router-link to="/search-rest">Search REST Endpoint</router-link>
      <router-link to="/tracking-user-id">Tracking user id Endpoint</router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-elem-color: white;
  --primary-bg-color: rgb(27, 27, 27);
  --primary-elem-bg-color: rgb(39, 39, 39);
  --primary-extra-color: #298eea;
  --primary-layout-elem-border-radius: 10px;
  --primary-elem-border-radius: 4px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  letter-spacing: 0.5px;
}

body {
  min-height: 100vh;
  background-color: var(--primary-bg-color);
}

.content {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  background-color: var(--primary-elem-bg-color);
  margin-bottom: 60px;
}

#nav a {
  font-weight: bold;
  padding: 25px 15px;
  color: var(--primary-elem-color);
  transition: all .2s ease;
}

#nav a:hover{
  background-color: rgb(35, 35, 35);
  border-radius: var(--primary-elem-border-radius);
}

#nav a.router-link-exact-active {
  background-color: var(--primary-extra-color);
  border-radius: var(--primary-elem-border-radius);
}
</style>
