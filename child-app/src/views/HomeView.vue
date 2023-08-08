<template>
  <div class="home">
    <h1>子应用-主页</h1>
    <router-link :to="{name: 'About'}"><img alt="Vue logo" src="../assets/logo.png"></router-link>


    <!-- <pdf-page/> -->

    <!-- <h1 @click="handleGOAbout">js push 跳转</h1> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import PdfPage from '@/components/PdfReview.vue'

export default {
  name: 'HomeView',
  components: {
    // PdfPage
  },
  methods: {
    handleGOAbout() {
      this.$router.push('about/aboutChild')
      // this.$router.push({name: 'AboutChild'})
    }
  }
}
</script>
