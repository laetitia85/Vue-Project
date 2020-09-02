<template>
  <div id="app">
  <MyHeader />
  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
    <template v-slot:header>Todo List</template>

    <template v-slot:lead>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </template>
    <p>
    New features we will have to done for this project
    </p>
        <router-view :key="$route.path"></router-view>
        
  </b-jumbotron>
 
</div>


</template>

<script>
import MyHeader from './MyHeader.vue'



export default {
  name: 'MyJumbotron', 
  props: ['jumlist'],
   components: {
    MyHeader

 },

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