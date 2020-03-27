<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Kamer opruimen',
          completed: false
        }, {
          id: 2,
          title: 'Eten maken',
          completed: false
        }, {
          id: 3,
          title: 'Naar de winkel gaan',
          completed: false
        }, {
          id: 4,
          title: 'Corona overleven',
          completed: false
        }
      ],
      lastId: 0
    }
  },
  methods(){

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
