<template>
  <div class="home">
    <router-link :to="{path: '/my-page/home'}"><img alt="Vue logo" src="../assets/logo.png"></router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
