<script setup>
import SendNameComponent from './components/SendNameComponent.vue';
import ColorEmit from './components/ColorEmit.vue';
</script>

<template>
  <div :style="{ backgroundColor: color }">
    <h1>너의 이름은 {{ name }}</h1>
    <SendNameComponent v-on:nameChange="nameChangeHandler" />
    <ColorEmit v-on:colorChange="colorChangeHandler" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      color: '',
    };
  },
  methods: {
    nameChangeHandler(e) {
      this.name = e.name;
    },
    colorChangeHandler(e) {
      this.color = e.color;
    },
  },
};
</script>

<style scoped></style>
