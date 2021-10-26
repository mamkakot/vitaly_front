<template>
  <div id="nav">
    <router-link to="/">Оценка фоточек</router-link> |
    <router-link to="/about">О Виталике</router-link>
    <h1>Этот сайт посвящён Виталику -- лучшему человеку на планете!</h1>
  </div>
  <router-view />
</template>

<script>
export default {
  setup() {
    fetch('https://api.ipify.org?format=json')
      .then((x) => x.json())
      .then(({ ip }) => {
        console.log(ip)
      })
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
