<template>
  <QuizChild :randNum="randNum" @checkNum="checkNum" />
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { ref } from 'vue';
import QuizChild from './QuizChild.vue';

const randNum = parseInt(Math.random() * 20);
const msg = ref('랜덤숫자를 맞춰주세요');

function checkNum(e) {
  msg.value = e.value;
}
</script>

<style lang="scss" scoped></style>
