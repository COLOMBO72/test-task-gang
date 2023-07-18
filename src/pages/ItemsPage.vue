<template>
  <div class="items-page">
    <my-dialog :items="items" v-model:show="openModal"/>
    <div class="items-page__filter-bar">
      <div class="lunch__checkbox">
        <input type="checkbox" id="lunch" value="Майк" v-model="checked">
        <label for="lunch">Только с ланчем <img style="width: 30px;" src="https://cdn-icons-png.flaticon.com/512/76/76463.png" alt="lunch"></label>
      </div>
      <my-select :options="options"/>
      <div class="random__chose">
        <span>Не знаете куда сходить? <br> Нажмите на кнопку и я подберу для вас хорошее место!</span>
        <br>
        <button @click="showModal">Нажми на меня</button>
      </div>
    </div>
    <items-list :items="items"/>
  </div>
</template>
<script>
import MyLoader from '../components/MyLoader.vue'
import MyDialog from '../components/MyDialog.vue'
import MySelect from '../components/MySelect.vue'
import ItemsList from './ItemsList.vue'
import axios from 'axios';
export default {
  components: { ItemsList, MySelect, MyDialog, MyLoader },
  data() {
    return {
      items: [],
      loading: false,
      openModal: false,
      options: [
        {text: 'По названию', value: "Name"},
        {text: 'По цене', value: "Price"}
      ]
    }
  },
  methods: {
    async getItems(){
      try {
        this.loading = true;
        const response = await axios.get('https://bandaumnikov.ru/api/test/site/get-index');
        this.items = response.data.data;
      } catch (error) {
        console.log(error);
      }finally{
        this.loading = false;
      }
    },
    showModal(){
      this.openModal = true;
    }
  },
  mounted() {
    this.getItems();
  },
}
</script>
<style scoped>
.items-page{
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.items-page span{
  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: calc(14px + (18 - 14) * ( (100vw - 480px) / ( 1024 - 480) ));
  }
}
.items-page__filter-bar{
  width: 100%;
  background-color: rgb(253, 247, 255);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
}
.lunch__checkbox{
  display: flex;
  align-items: center;
  gap: 5px;
}
.lunch__checkbox label{
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.random__chose button{
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.712);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
</style>



<!-- {id:1,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i0.photo.2gis.com/images/branch/0/30258560088758746_615f.jpg",business_lunch:true,
price:420},
{id:2,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i4.photo.2gis.com/images/branch/38/5348024602951070_5007.jpg",business_lunch:false,
price:420},
{id:3,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i3.photo.2gis.com/images/branch/0/30258560063238684_ab2c.jpg",business_lunch:true,
price:420},
{id:4,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i8.photo.2gis.com/images/branch/0/30258560071696228_bd35.jpg",business_lunch:true,
price:420},
{id:5,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://avatars.mds.yandex.net/get-altay/9663145/2a0000018906aad394254c983ccde410d505/XXXL",business_lunch:true,
price:420},
{id:3,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i3.photo.2gis.com/images/branch/0/30258560063238684_ab2c.jpg",business_lunch:true,
price:420},
{id:4,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i8.photo.2gis.com/images/branch/0/30258560071696228_bd35.jpg",business_lunch:true,
price:420},
{id:5,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://avatars.mds.yandex.net/get-altay/9663145/2a0000018906aad394254c983ccde410d505/XXXL",business_lunch:true,
price:420},
{id:3,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i3.photo.2gis.com/images/branch/0/30258560063238684_ab2c.jpg",business_lunch:true,
price:420},
{id:4,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://i8.photo.2gis.com/images/branch/0/30258560071696228_bd35.jpg",business_lunch:true,
price:420},
{id:5,name:"Барвинок",address:"ул. Мира, 7 (этаж цокольный)",
landmark:"Во дворах за Австрийской площадью",cuisine:"Украинская",distance:900,time:10,
photo:"https://avatars.mds.yandex.net/get-altay/9663145/2a0000018906aad394254c983ccde410d505/XXXL",business_lunch:true,
price:420}, -->
