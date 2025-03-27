<script setup>
import SlotParent from './components/SlotParent.vue';
import NamedSlotParent from './components/NamedSlotParent.vue';
import FancyPhotoBoxParent from './components/FancyPhotoBoxParent.vue';
import ScopedSlotParent from './components/ScopedSlotParent.vue';
import ModalParent from './components/ModalParent.vue';
import TeleportDemo from './components/TeleportDemo.vue';
import CustomInputParent from './components/CustomInputParent.vue';
import ProvideComponent from './components/ProvideComponent.vue';
import RefReactive from './components/composition-api/RefReactive.vue';
import Counter from './components/composition-api/Counter.vue';
import PropsParent from './components/composition-api/PropsParent.vue';
import EmitParent from './components/composition-api/EmitParent.vue';
import QuizParent from './components/composition-api/QuizParent.vue';
</script>

<template>
  <QuizParent />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
