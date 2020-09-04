<template>
  <div id="app">
    
<MyJumbotron />


</div>
</template>

<script>
import MyJumbotron from './components/MyJumbotron.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'es6-promise/auto'



export default {
  name: 'App',
  components: {
    MyJumbotron,
 },

   mounted() {
      this.$http.get('http://localhost:8000/todo/')                                                    //je récupère mon get de l api
      .then((response) => {
        console.log(response.data);
        this.$store.dispatch('storeList', response.data)
        console.log(response.data);
  })
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
