<template>
  <div>
    <h1>Counter1</h1>
    <h1>Count : {{ count }}</h1>
    <h1>DoubleCount : {{ doubleCount }}</h1>
    <button v-on:click="increment">+1</button>
    <button v-on:click="decrement">-1</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { increment, decrement } = counterStore;
const count = computed(() => counterStore.count);
const doubleCount = computed(() => counterStore.doubleCount);
</script>

<style lang="scss" scoped></style>
