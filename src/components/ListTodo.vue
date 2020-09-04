<template>
<ul>
    <SingleTodo v-for="todo in allMyIdList(whatToDisplay)" :key="todo.id" :lol="todo"/>

</ul>

</template>

<script>
import SingleTodo from './SingleTodo.vue'
import {mapGetters} from 'vuex'


export default {
  name: 'ListTodo', 
  props: ['whatToDisplay'],
     components: {
    SingleTodo,
 },

  computed: {
      ...mapGetters(['allMyIdList']),
    
  },

 
  }


</script>

<style>
</style>