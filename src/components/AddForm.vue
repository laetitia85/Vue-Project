<template>
  <b-form inline>
      <b-input
        id="inline-form-input-username"
        placeholder="Task to Add"
        type="text"
        v-model="new_task"
      ></b-input>
    <b-button @click="addEvent()">+ Add</b-button>
  </b-form>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "AddForm",
  data() {
    return {
      new_task: "",
    };
  },
  methods: {
    addEvent() { 
        let donnees = {
        name: this.new_task,                                                                                  //je récupère le name qui est ds new task
        id: Date.now(),                                                                                       //j utilise une fonction date.now qui donne un id different à chaque fois car il prends les minisecondes
        createdAt: String(new Date()),                                                                        //on utilise la function new Date est on la passe en String car ds l api createdAt est en string
        todo: true,                                                                                           //on dit que todo == true car s il sont déclarer en false il se retrouve barré
      }
        this.$http.post("http://localhost:8000/todo", donnees).then(() => {
        this.$store.dispatch('postList', donnees)
      })
      this.new_task = "";
    },

  },
   computed: {
      ...mapGetters(['allMyTodoList']),
      
  }
}
</script>

<style>
</style>