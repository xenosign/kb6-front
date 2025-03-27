<template>
  <div>
    <input type="text" v-model.number="userInput" />
    <button v-on:click="sendMsg">정답!</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const userInput = ref(0);
const attempt = ref(0);

const props = defineProps({
  randNum: {
    type: Number,
  },
});

const emit = defineEmits(['send-msg']);

const result = computed(() => {
  if (userInput.value > props.randNum) return 'DOWN';
  if (userInput.value < props.randNum) return 'UP';
  return '정답 입니다!';
});

const sendMsg = () => {
  attempt.value++;
  emit('send-msg', result.value);
};

watch(attempt, (next, old) => {
  if (next === 3) return alert('3번째 시도 입니다!');
});
</script>

<style lang="scss" scoped></style>
