<template>
  <div class="item-page__wrapper">
    <img class="item-photo" :src="item.photo ? item.photo : 'https://yt3.googleusercontent.com/rFQdM5ChgLHcakICwZFHmngWxJZyo5pVqrZ9v_hpctB0xOz_bdS7aunOtbRwxfiZHYbEPX6RLA=s900-c-k-c0x00ffffff-no-rj'" alt="photo">
    <div class="item-info">
      <h1>{{ item.name }}</h1>
      <div>
        <div>Адрес: <span>{{ item.address ? item.address : "нет информации"}}</span></div>
        <div>Уточнение: <span>{{ item.landmark ? item.landmark : "нет информации" }}</span></div>
        <div>Тип кухни: <span>{{ item.cuisine ? item.cuisine : "нет информации" }}</span></div>
        <div>Дистанция?: <span>{{ item.distance ? item.distance : "нет информации" }}</span></div>
        <div>Время?: <span>{{ item.time ? item.time : "нет информации" }}</span></div>
        <div>Бизнес ланч: <span>{{ item.business_lunch ? "есть" : "нет" }}</span></div>
        <div>Средний чек: <span>{{ item.price ? item.price : "нет информации" }}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import ErrorComponent from '../components/ErrorComponent.vue';
import axios from 'axios';
export default {
  components: { ErrorComponent },
  data() {
    return {
      item: {}
    }
  },
  methods: {
    async getItem(){
      const response = await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${this.$route.params.id}`);
      this.item = response.data.data;
    }
  },
  mounted() {
    this.getItem();
  },
}
</script>
<style>
  .item-page__wrapper {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .item-page__wrapper .item-photo{
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
  .item-info{
    position: absolute;
    top: 5%;
    right: 5%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    height: fit-content;
    color: white;
    background-color: rgba(0, 0, 0, 0.623);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }
  .item-info div{
    display: flex;
    margin-top: 10px;
    flex-direction: column;
  }
  .item-info span{
    margin: 5px;
    font-size: 24px;
  }
</style>