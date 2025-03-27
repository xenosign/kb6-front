<template>
  <div>
    <PropsChild v-bind:msg="msg" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PropsChild from './PropsChild.vue';

const msg = ref('props 로 전달 될 문자열');
</script>

<style lang="scss" scoped></style>
