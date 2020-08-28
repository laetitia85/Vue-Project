<template>
     <b-form inline>

   
    <b-input-group prepend="New Task" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Task to Add"
        type="text"
        v-model="new_task" >
      </b-input>
    </b-input-group>

    <b-button @click= "addEvent" >Add</b-button>
  </b-form>
</template>

<script>
export default {
    name: "AddForm",
    data() {
        return {
            new_task: ""
        }
    },
    methods: {
        addEvent() {
            this.$parent.$emit('addTodo', this.new_task)
            this.new_task=""
           
        }
    }
}
</script>

<style>

</style>