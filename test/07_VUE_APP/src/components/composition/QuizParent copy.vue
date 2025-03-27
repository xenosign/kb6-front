<template>
  <div>
    <h1>{{ msg }}</h1>
    <QuizChild :randNum="randNum" @send-msg="emitHandler" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import QuizChild from './QuizChild.vue';

const rand = parseInt(Math.random() * 20);
const randNum = ref(rand);
const msg = ref('랜덤 숫자를 맞춰 주세요');

const emitHandler = (value) => {
  msg.value = value;
};
</script>

<style lang="scss" scoped></style>
