<template>
  <div>
    <h1>Counter</h1>
    <h1>Count : {{ count }}</h1>
    <h1>두배로 : {{ double }}</h1>
    <h1>클릭은 몇 번? : {{ clickCount }}</h1>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const count = ref(0);
const clickCount = ref(0);
const double = computed(function () {
  return count.value * 2;
});

function increment() {
  count.value++;
  clickCount.value++;
}

const decrement = () => {
  count.value--;
  clickCount.value++;
};

watch(count, function (newValue, oldValue) {
  console.log(`카운트가 ${oldValue} 에서 ${newValue} 로 변경 되었습니다`);

  if (newValue % 10 === 0 && newValue !== 0) return alert('축하합니다!');
});
</script>

<style lang="scss" scoped></style>
