<template>
  <div>
    <input type="text" v-model.number="num" />
    <button @click="check">정답</button>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
const num = ref(0);
const cnt = ref(0);
const msg = ref('정답을 맞춰주세요!');
const props = defineProps({
  randNum: {
    type: Number,
  },
});
const emit = defineEmits(['checkNum']);
const com = computed(() => {
  cnt.value++;
  if (num.value < props.randNum) {
    msg.value = 'up';
  } else if (num.value > props.randNum) {
    msg.value = 'down';
  } else {
    msg.value = '정답입니다!';
  }
  emit('checkNum', msg);
});
const check = () => {
  cnt.value++;
  console.log(com.value);
};
watch(cnt, function (newValue, oldValue) {
  if (cnt.value === 3) {
    alert('3번째 시도입니다!');
  }
});
</script>
<style lang="scss" scoped></style>
