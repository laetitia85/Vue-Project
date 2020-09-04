<template>
 
<div>

<li v-if="lol.todo==true" @click='callMethod(lol.id)'><b-icon icon="check2-circle"></b-icon> {{lol.name}} </li> 
<li v-else-if="lol.todo==false" @click='callMethod(lol.id)' class="barré">                                                                                                          <!--@click method = fonction callMethod ds laquelle il recupere lol (égale à ma list).id qui est le parametre de la fonction callMethod plus bas-->                                 
<b-icon icon="check-circle-fill"></b-icon> {{lol.name}} </li>

</div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'SingleTodo', 
  props: ['lol'],

  methods: {
    callMethod(id) {
       this.$http.put(`http://localhost:8000/todo/${id}`)                                                                                                               //je récupère le put de mon api qui passe deja l id du true au false. je fais un template litéral (c'est le fait de faire une interpolation) pr récupérer l'id en string 
      .then(() => { this.$store.dispatch('sortIdList', id)
      }) 
      //  location.reload();                                                                                                                                          // function qui sert a refresh la page automatiquement si je click sur un nom
    }
  },
    computed: {
      ...mapGetters(['allMyIdList'], ('whatToDisplay')),
      // myIdList() {
      //     return this.$store.getters.allMyIdList('whatToDisplay')

      // },
  },
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