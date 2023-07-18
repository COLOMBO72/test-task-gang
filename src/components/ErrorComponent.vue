<template>
  <div class="error__page">
    <div class="error__wrapper">
    <div
      style="text-align: center; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
      <h3>Упс.. что-то пошло не так, попробуйте перезагрузить страницу <br> или проверить правильность введённых данных</h3>
    </div>
    <img style="width: 20%;" src="https://avatanplus.com/files/resources/original/5a3f65e5b960e16087a6097f.png" alt="png">
    <button @click="$router.push('/')">На главную</button>
  </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
button {
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.712);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
.error__page{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error__wrapper{
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
</style>