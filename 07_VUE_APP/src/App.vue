<script setup>
import SlotParent from './components/SlotParent.vue';
import NamedSlotParent from './components/NamedSlotParent.vue';
import FancyPhotoBoxParent from './components/FancyPhotoBoxParent.vue';
import ScopedSlotParent from './components/ScopedSlotParent.vue';
import ModalParent from './components/ModalParent.vue';
import TeleportDemo from './components/TeleportDemo.vue';
import CustomInputParent from './components/CustomInputParent.vue';
import ProvideComponent from './components/ProvideComponent.vue';
</script>

<template>
  <ProvideComponent />
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
