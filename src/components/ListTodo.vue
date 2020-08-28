<template>
<ul>

    <SingleTodo v-for="todo in todoList" :key="todo.id" :lol="todo"/>

</ul>

</template>

<script>
import SingleTodo from './SingleTodo.vue'

export default {
  name: 'ListTodo', 
  props: ['todoList'],
     components: {
    SingleTodo,
 },
 

}
</script>

<style>
</style>