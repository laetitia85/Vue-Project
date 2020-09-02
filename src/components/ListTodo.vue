<template>
<ul>

    <SingleTodo v-for="todo in newList" :key="todo.id" :lol="todo"/>

</ul>

</template>

<script>
import SingleTodo from './SingleTodo.vue'


export default {
  name: 'ListTodo', 
  props: ['whatToDisplay'],
     components: {
    SingleTodo,
 },

 data () {                                                                                             //création de la fonction data
      return {
        newList : ''
      }
 },
   mounted() {
      this.$http.get('http://localhost:8000/todo/')                                                    //je récupère mon get de l api
      .then((response) => {
        this.newList = response.data;                                                                  //ce que response.data recoit il l'envoie dans newlist
        
          if (this.whatToDisplay == "done") {                                                          //si whatToDisplay == done , je crée une variable qui va filtrer les données et récup les todo == false
           let donelist = this.newList.filter((e) => e.todo == false);
           this.newList = donelist;                                                                    //j'envoie les données filtrées ds newlist
         } else if (this.whatToDisplay == "todo") {
           let truelist = this.newList.filter((e) => e.todo == true);                                  //si whatToDisplay == todo , je crée une variable qui va filtrer les données et récup les todo == true
           this.newList = truelist;                                                                    //j'envoie les données filtrées ds newlist
         
       }
    })
    .catch(error => {
      console.log(error)
    })
  }, 
 
  }


</script>

<style>
</style>