<template>
  <div>
    <ScopedSlotChild v-slot:default="fromChild">
      <h1>{{ fromChild.msg }}</h1>
    </ScopedSlotChild>
    <ScopedSlotChild v-slot:named="fromChild2">
      <p>{{ fromChild2.msg }}</p>
    </ScopedSlotChild>
  </div>
</template>

<script>
import ScopedSlotChild from './ScopedSlotChild.vue';
export default {
  name: 'ScopedSlotParent',
  components: { ScopedSlotChild },
};
</script>
