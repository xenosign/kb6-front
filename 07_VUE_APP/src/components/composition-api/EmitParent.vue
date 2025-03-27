<template>
  <div>
    <h1>{{ msg }}</h1>
    <EmitChild v-on:send-msg="emitHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EmitChild from './EmitChild.vue';

const msg = ref('자식놈이 바꿀 메세지입니다');

const emitHandler = (value) => {
  msg.value = value;
};
</script>

<style lang="scss" scoped></style>
