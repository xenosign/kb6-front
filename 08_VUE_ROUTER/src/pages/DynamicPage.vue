<template>
  <div>
    <h1>오늘의 기분은 ? {{ msg }}</h1>
    <img v-bind:src="imgSrc" :alt="msg" />
  </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
// 현재 주소 값
const currentRoute = useRoute();
const mood = computed(() => currentRoute.params.mood);
const msg = computed(() => {
  console.log('happy');
  return mood.value === 'happy' ? '행복해요' : '씐나요';
});
const imgSrc = computed(() => {
  return mood.value === 'happy'
    ? 'https://media.istockphoto.com/id/1154370446/ko/사진/흰색-배경에-고립-된-바위-제스처를-보여주는-녹색-선글라스에-재미-너구리.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU='
    : 'https://i.imgur.com/wOCGlbN.gif';
});
</script>
<style lang="scss" scoped></style>
