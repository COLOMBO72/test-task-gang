<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <div v-if="loading">
        <my-loader />
      </div>
      <span v-if="runAnim1">Просматриваем ваши предпочтения...</span>
      <span v-if="runAnim2">Осматриваем все заведения...</span>
      <span v-if="runAnim3">Представляем вам шедевр...</span>
      <button @click="redirectToPage">Едем в...</button>
    </div>
  </div>
</template>
<script>
import MyLoader from './MyLoader.vue'
import router from '../router/router';
export default {
  components: { MyLoader },
  data() {
    return {
      loading: false,
      runAnim1: false,
      runAnim2: false,
      runAnim3: false,
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
    redirectToPage(e) {
      e.preventDefault();
      if (this.items) {
        this.loading = true;
        const random = Math.floor(Math.random() * this.items.length);
        setTimeout(() => {
          this.runAnim1 = true;
          setTimeout(() => {
            this.runAnim1 = false;
            this.runAnim2 = true;
            setTimeout(() => {
              this.runAnim2 = false;
              this.runAnim3 = true;
              setTimeout(() => {
                router.push(`/item/${random}`)
                this.loading = false;
              }, 1000);
            }, 3500);
          }, 2000);
        }, 2000);
      } else {
        alert('Не найдено хорошего ресторана')
      }
    }
  },
}
</script>
<style scoped>
.dialog {
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background-color: white;
  border-radius: 7px;
  padding: 10px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
}

.dialog__content button {
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.712);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>