<template>
  <div class="item-view__wrapper">
    <button @click="$router.push(`/item/${item.id}`)">Перейти</button>
    <div class="view__top">
      <img :src="item.photo ? item.photo : 'https://yt3.googleusercontent.com/rFQdM5ChgLHcakICwZFHmngWxJZyo5pVqrZ9v_hpctB0xOz_bdS7aunOtbRwxfiZHYbEPX6RLA=s900-c-k-c0x00ffffff-no-rj'" alt="photo" sty />
      <span>{{ item.name }}</span>
    </div>
    <div class="view__down">
      <span class="view-down__price">Средний чек: {{ item.price ? `${item.price}р.` : "нет информации" }}</span>
    <span class="view-down__address">{{ item.address ? `${item.address}` : 'нет информации' }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style>
 .item-view__wrapper{
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: #F5F5F5;
  min-height: 40vh;
 }
 .item-view__wrapper button{
  position: absolute;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.4);
 }
 .item-view__wrapper:hover button{
  position: absolute;
  visibility:visible;
  z-index: 1;
  top: 0%;
  transition: 0.3s;
  color: white;
  font-size: 26px;
  font-weight: 700;
  width: 100%;
  cursor: pointer;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
 }
 .item-view__wrapper .view__top {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
 }
 .item-view__wrapper .view__top img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
 }
 .item-view__wrapper .view__top span{
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  top: 5%;
  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: calc(14px + (18 - 14) * ( (100vw - 480px) / ( 1024 - 480) ));
  }
 }
 .item-view__wrapper .view__down {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  gap: 20px;
 }

 .item-view__wrapper .view__down .view-down__price {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 5px;
  width:fit-content;
  color: aliceblue;
  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: calc(14px + (18 - 14) * ( (100vw - 480px) / ( 1024 - 480) ));
  }
 }
 .item-view__wrapper .view__down .view-down__address {
  color: rgb(160, 160, 160);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 5px;
  width:fit-content;
  font-size: 12px;
 }
</style>