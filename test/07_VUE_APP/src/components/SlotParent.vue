<template lang="">
  <div>
    <SlotChild>
      <!-- 자식 요소의 HTML 후손 요소로 보내고 싶은 것들을 보냅니다! -->
      <h1>테스트</h1>
      <img src="https://jjalbang.gif" alt="장동민마멋" />
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue';

export default {
  name: 'SlotParent',
  components: { SlotChild },
};
</script>
<style lang=""></style>
