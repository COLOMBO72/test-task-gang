<template>
  <div class="items-list__wrapper" v-if="items.length > 0">
    <item-view :item="item" :key="item.id" v-for="item in items" />
  </div>
</template>
<script>
import ItemView from './ItemView.vue'
export default {
  components: { ItemView },
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>
<style scoped>
.items-list__wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>