<template lang="">
  <div class="photo">
    <slot name="title"></slot>
    <slot name="photo"></slot>
  </div>
</template>
<script>
export default {
  name: 'SlotChild',
};
</script>
<style scoped>
.photo {
  display: inline-block;
  text-align: center;
  padding: 30px;
  background-color: orange;
  border: 4px solid #ccc;
  border-radius: 12px;
}
</style>
