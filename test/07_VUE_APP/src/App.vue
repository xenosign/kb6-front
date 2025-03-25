<script setup>
import CheckList from './components/CheckList.vue';
import TodoProps from './components/TodoProps.vue';
import EventProps from './components/EventProps.vue';

const sendingEvent = () => {
  alert('부모 컴포넌트님이 말씀 하셨다~ 비상!!!');
};
</script>

<template>
  <div class="todo">
    <h1>오늘의 할일</h1>
    <CheckList />
    <hr />
    <TodoProps todo="Vue 공부하기" />
    <TodoProps todo="배열 함수 끝장 내기" />
    <CheckList />
    <EventProps :parentEvent="sendingEvent" />
  </div>
</template>
<style scoped>
.todo {
  text-align: center;
}
</style>
