<script setup>
import CheckList from './components/CheckList.vue';
import TodoProps from './components/TodoProps.vue';
import EventProps from './components/EventProps.vue';
import PropsList from './components/PropsList.vue';
import PropsList2 from './components/PropsList2.vue';

const sendingEvent = () => {
  alert('부모 컴포넌트 님이 말씀 하셨다! 비상!!!!!!');
};

const siteData = {
  siteName: '페이스북',
  siteUrl: 'https://facebook.com',
  visited: '미방문',
};
</script>

<template>
  <div class="todo">
    <PropsList siteName="네이버" siteUrl="https://naver.com" visited="방문" />
    <PropsList siteName="다음" siteUrl="https://daum.com" visited="미방문" />
    <PropsList2 :siteInfo="siteData" />
  </div>
</template>

<style scoped></style>
