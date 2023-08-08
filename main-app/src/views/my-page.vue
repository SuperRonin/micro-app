<!-- my-page.vue -->
<template>
    <div>
      <!-- <h1>子应用容器</h1> -->
      <!-- 
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
       -->
      <micro-app name='app1' url='http://localhost:8081' baseroute='/my-page' @mounted="mounted" @error="error"></micro-app>
    </div>
  </template>


<script>
export default {
  methods: {
    mounted() {
      console.log('mounted')
    },
    error(err) {
console.log('err', err);

    }
  }
}
</script>
  