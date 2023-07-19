<template>
  <div class="items-page">
    <my-dialog :items="items" v-model:show="openModal" />
    <div class="items-page__filter-bar">
      <div class="lunch__checkbox">
        <input type="checkbox" id="lunch" value="Майк" v-model="checked">
        <label for="lunch">Только с ланчем <img style="width: 30px;"
            src="https://cdn-icons-png.flaticon.com/512/76/76463.png" alt="lunch"></label>
      </div>
      <my-select v-model="selectedSort" :options="options" />
      <div class="random__chose">
        <span>Не знаете куда сходить?</span>
        <br>
        <button @click="showModal">Нажми на меня</button>
      </div>
    </div>
    <items-list :items="sortLunch" />
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
      selectedSort: '',
      checked: false,
      options: [
        { text: 'По названию', value: "Name" },
        { text: 'По цене', value: "Price" }
      ]
    }
  },
  methods: {
    async getItems() {
      try {
        this.loading = true;
        const response = await axios.get('https://bandaumnikov.ru/api/test/site/get-index');
        this.items = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    showModal() {
      this.openModal = true;
    }
  },
  mounted() {
    this.getItems();
  },
  computed: {
    sortLunch() {
      if (this.checked) {
        const newItems = this.items.filter(b => b.business_lunch === true);
        switch (this.selectedSort) {
          case "Name":
            newItems.sort();
            break;
          case "Price":
            newItems.sort((item1, item2) => item1.price - item2.price);
            break;
          default:
            return newItems;
        }
        return newItems;
      }
      switch (this.selectedSort) {
          case "Name":
            return this.items.sort();
          case "Price":
            return this.items.sort((item1,item2) => item1.price-item2.price);
          default:
            return this.items;
        }
    }
  },
}
</script>
<style scoped>
.items-page {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

.items-page span {
  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: calc(14px + (18 - 14) * ((100vw - 480px) / (1024 - 480)));
  }
}

.items-page__filter-bar {
  width: 100%;
  background-color: rgb(253, 247, 255);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
}

.lunch__checkbox {
  display: flex;
  align-items: center;
  gap: 5px;
}

.lunch__checkbox label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.random__chose button {
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.712);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>