<template>
  <div>
    <NamedSlotChild>
      <template v-slot:top>
        <h2>여기는 top 으로 보내는 html 요소 입니다!</h2>
      </template>
      <template #bottom>
        <h2>요거는 bottom 으로 보내는 html 요소 입니다!</h2>
      </template>
    </NamedSlotChild>
  </div>
</template>

<script>
import NamedSlotChild from './NamedSlotChild.vue';

export default {
  name: 'NamedSlotParent',
  components: { NamedSlotChild },
};
</script>
