<template>
  <div class="app">
    <my-header/>
    <router-view></router-view>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
export default {
  components: { MyHeader, MyFooter },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>