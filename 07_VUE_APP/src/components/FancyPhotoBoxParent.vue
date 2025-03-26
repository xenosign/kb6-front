<template lang="">
  <FancyPhotoBox>
    <template v-slot:title>
      <h1>지겨운 장동민 마멋</h1>
    </template>
    <template #photo>
      <img
        src="https://photo.coolenjoy.co.kr/data/editor/2008/20200813130955_aiqgbsrk.gif"
        alt="장동민 마멋"
      />
    </template>
  </FancyPhotoBox>
</template>
<script>
import FancyPhotoBox from './FancyPhotoBox.vue';

export default {
  name: 'FancyPhotoBoxParent',
  components: { FancyPhotoBox },
};
</script>
<style lang=""></style>
