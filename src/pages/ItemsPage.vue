<template>
  <div class="items-page">
    <items-list :items="items"/>
  </div>
</template>
<script>
import ItemsList from './ItemsList.vue'
import axios from 'axios';
export default {
  components: { ItemsList },
  data() {
    return {
      items: [],
      loading: false,
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
    }
  },
  mounted() {
    this.getItems();
  },
}
</script>
<style>
.items-page{
  width: 100%;
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
