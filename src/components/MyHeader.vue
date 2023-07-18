<template>
  <header>
    <span @click="$router.push('/')" class="header__title">NEVSKY</span>
  </header>
</template>
<script>
export default {
  
}
</script>
<style>
header{
  background-color: rgb(99, 65, 102);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__title{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 36px;
  background-color: #2AA5A0;
  background-image: linear-gradient(90deg, #fc08e7, #09c7f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}
</style>