<script setup>
import TodoList from './components/TodoList.vue';
import ScopedSlotParent from './components/ScopedSlotParent.vue';
import SlotParent from './components/SlotParent.vue';
import NamedSlotParent from './components/NamedSlotParent.vue';
import ModalParent from './components/ModalParent.vue';
import TeleportDemo from './components/TeleportDemo.vue';
</script>

<template>
  <div>
    <ScopedSlotParent />
  </div>
</template>

<style scoped></style>
