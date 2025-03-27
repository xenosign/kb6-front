<template>
  <div>
    <h1>Vue3 Counter</h1>
    <p>Count : {{ count }}</p>
    <p>두배로! {{ double }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';

const count = ref(0);
const double = computed(() => count.value * 2);

function increment() {
  count.value++;

  console.log('🚀 ~ double:', double);
  console.log('🚀 ~ double.value:', double.value);
}

watch(count, (newValue, oldValue) => {
  console.log(`카운트가 ${oldValue}에서 ${newValue}로 변경되었습니다.`);

  if (newValue % 10 === 0 && newValue !== 0) {
    alert(`축하합니다! ${newValue}까지 도달했습니다!`);
  }
});
</script>
