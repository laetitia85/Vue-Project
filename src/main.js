import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router'
import AddForm from './components/AddForm'
import ListTodo from './components/ListTodo'
import VueRouter from 'vue-router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use (BootstrapVue)
Vue.use (IconsPlugin)
Vue.use(Router)
// Vue.use(axios)

Vue.prototype.$http = axios;


const routes = [
     { path: '/news', component: AddForm },
     { path: '/list', component: ListTodo, props: {whatToDisplay: "all"}},
     { path: '/done', component: ListTodo, props: {whatToDisplay: "done"}},
     { path: '/todo', component: ListTodo, props: {whatToDisplay: "todo"}}
    ]

const router = new VueRouter ({
  routes
})

new Vue({
  render: h => h(App), 
  router

}).$mount('#app')






