<template>
  <div id="app">
    
<MyJumbotron :jumlist='list' @toggle="toggle" @addTodo="addToList"/>


</div>
</template>

<script>
import MyJumbotron from './components/MyJumbotron.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



export default {
  name: 'App',
  components: {
    MyJumbotron,
 },
  data: function () {
  return {
   
  list: [
  {id: 0, name: "Ecrire le sujet", todo: true},
  {id: 1, name: "Faire le sujet", todo: true},
  {id: 2, name: "Vendre le sujet", todo: true},
  {id: 3, name: "Partir en vacances", todo: true},
]
      }
    },
  methods: {
    toggle: function(id) {
      this.list.forEach(elem => {
        if(elem.todo == true & elem.id == id) {
          elem.todo = false
          }
        else if (elem.todo == false & elem.id == id) {
          elem.todo = true 
          }
        })
      },
    addToList(task) {
      let my_list = { id: this.list.length, name: task, todo: true};
      this.list.push(my_list)
      
      }
      // addToList(task) {
      //   this.list.push({
      //     name: task,
      //     todo: true,
      // id: this.list.length
      //   })
      // }
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
