<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ToDoList />
    <ScoreComponent />
  </div>
</template>

<script>
import ToDoList from './views/ToDoList.vue'
import ScoreComponent from "./components/ScoreComponent";
export default {
  name: 'App',
  components: {
    ScoreComponent,
    ToDoList
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
