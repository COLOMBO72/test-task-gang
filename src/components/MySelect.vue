<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: ()=>[]
     }
  },
  methods: {
    changeOption(event){
      this.$emit('update:modelValue',event.target.value);
    }
  },
}
</script>
<style scoped>
select{
  width: 130px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

}
</style>