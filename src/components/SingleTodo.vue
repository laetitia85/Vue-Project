<template>
 
<div>

<li v-if="lol.todo==true" @click='callMethod'><b-icon icon="check2-circle"></b-icon> {{lol.name}} </li>
<li v-else-if="lol.todo==false" @click='callMethod' class="barré">
<b-icon icon="check-circle-fill"></b-icon> {{lol.name}} </li>

</div>

</template>

<script>


export default {
  name: 'SingleTodo', 
  props: ['lol'],

  methods: {
    callMethod() {
    this.$parent.$parent.$emit('toggle',this.lol.id)
    }
  }
}

</script>

<style>
li {
list-style: none;
}
.barré {
text-decoration: line-through;
}
</style>