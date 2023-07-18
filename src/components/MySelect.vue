<template>
  <select v-model="selected">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
    }
  }
}
</script>
<style scoped></style>