<script setup>
import TodoList from './components/TodoList.vue';
import ScopedSlotParent from './components/ScopedSlotParent.vue';
import SlotParent from './components/SlotParent.vue';
import NamedSlotParent from './components/NamedSlotParent.vue';
import ModalParent from './components/ModalParent.vue';
import TeleportDemo from './components/TeleportDemo.vue';
import RefReactive from './components/RefReactive.vue';
import QuizParent from './components/composition/QuizParent.vue';
import Coutner from './components/composition/Coutner.vue';
</script>

<template>
  <div>
    <QuizParent />
  </div>
</template>

<style scoped></style>
