<template>
  <div>
    <input type="text" v-model.number="userInput" />
    <button v-on:click="sendMsg">정답 제출</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const userInput = ref(0);
const attempt = ref(0);

const props = defineProps({
  randNum: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['send-msg']);

const result = computed(function () {
  if (props.randNum > userInput.value) return 'UP';
  if (props.randNum < userInput.value) return 'DOWN';
  return '정답입니다';
});

const sendMsg = () => {
  attempt.value++;

  emit('send-msg', result.value);
};

watch(attempt, (newValue, oldValue) => {
  if (newValue === 3) return alert('3번째 시도 입니다!');
});
</script>

<style lang="scss" scoped></style>
