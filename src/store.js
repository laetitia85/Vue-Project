import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        list : []
        
    },
    mutations: {
        STORE_LIST(state, myList) {
            state.list = myList
            // console.log(state.list);
        },
        POST_LIST(state, myTodoList) {
            state.list.push(myTodoList)
            // console.log(state.list)
        },
        PUT_LIST(state, myIdList) {
           let i = state.list.findIndex((e) => e.id == myIdList )                                               //je crée une variable qui va chercher l index ds mon tableau et verifier si l'id trouver et egal à l'id recupérer ds mon tableau du put.
            state.list[i].todo =! state.list[i].todo                                                            //permet de passer l'id récupérer de true à false                        
            // console.log(state.list)                                                             
            }
               
        },

    actions: {
        storeList(context, myList) {                                                                             //je récupère storeList qui récupère mes données du get puis myList qui correspond à response.data                                     
            context.commit('STORE_LIST', myList)                                                                //j'appele context.commit pour valider une mutation, ou accéder à l'état 
        },
        postList(context, myTodoList) {
            context.commit('POST_LIST', myTodoList)
        },
        sortIdList(context, myIdList) {
            
            context.commit('PUT_LIST', myIdList)
        }

        },
    getters: {
        allMyList: state => {
            return state.list
        },
        allMyTodoList : state => {
            return state.list
        },
        allMyIdList : (state) => (whatToDisplay) => {
            // console.log(whatToDisplay)
            if (whatToDisplay == "done") {                                                                     //si whatToDisplay == done , j envoie les données filtrées ds newlist et récup les todo == false
              return (state.list.filter((e) => e.todo == false)); 
                                                                                                                                                                                  
            } else if (whatToDisplay == "todo") {                                                               //si whatToDisplay == todo , j' envoie les donnees filtrées ds newlist et récup les todo == true
              return(state.list.filter((e) => e.todo == true)); 
               
            }
            return state.list
        }
      }
})