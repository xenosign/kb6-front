<template lang="">
  <SlotChild>
    <!-- <h1>슬롯 테스트!</h1>
    <img
      src="https://photo.coolenjoy.co.kr/data/editor/2008/20200813130955_aiqgbsrk.gif"
      alt="장동민 마멋"
    /> -->

    <h1>테스트2</h1>
    <input type="text" />
    <button>닫기</button>
    <button>닫지 마요 ㅠㅠ</button>
  </SlotChild>
</template>
<script>
import SlotChild from './SlotChild.vue';

export default {
  name: 'SlotParent',
  components: { SlotChild },
};
</script>
<style lang=""></style>
