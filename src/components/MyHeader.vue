<template>
      <!-- use router-link component for navigation. 
      specify the link by passing the `to` prop. 
     `<router-link>` will be rendered as an `<a>` tag by default  -->
 <header >
   <router-link to ="/news" class="spacing">news</router-link>                                                     
   <router-link to ="/list" class="spacing">list</router-link>
   <router-link to ="/done" class="spacing">done</router-link>                                                     
   <router-link to ="/todo" class="spacing">todo</router-link>
 </header>
    
</template>

<script>

export default {
  name : 'MyHeader'
}

</script>


<style>
.spacing {
    margin-right: 20px;
    
}
</style>