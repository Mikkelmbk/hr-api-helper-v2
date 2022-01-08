<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | -->
    <router-link to="/recommendation-rest">Recommendation REST Endpoint</router-link>
    <router-link to="/search-rest">Search REST Endpoint</router-link>
    <router-link to="/tracking-user-id">Tracking user id Endpoint</router-link>
  </div>
  <router-view/>
</template>

<style>
body{
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display:flex;
  justify-content: space-evenly;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
