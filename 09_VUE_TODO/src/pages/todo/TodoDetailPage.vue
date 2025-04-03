<template>
  <div>
    <h1>TODO DETAIL</h1>
    <div>
      <h2>id : {{ todo.id }}</h2>
      <h2>todo : {{ todo.todo }}</h2>
      <h2>desc : {{ todo.desc }}</h2>
      <h2>done : {{ todo.done }}</h2>
      <button v-on:click="router.push({ name: 'todo' })">목록</button>
      <button>수정</button>
      <button>삭제</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const curRoute = useRoute();
const id = curRoute.params.id;
const BASE_URL = '/api';

const todo = ref({});

async function fetchTodo() {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todo.value = todoRes.data;
    console.log('TODO DETAIL 데이터 : ', todo.value);
  } catch (e) {
    alert('TODO DETAIL 통신 ERR 발생');
    console.error(e);
  }
}

fetchTodo();
</script>

<style lang="scss" scoped></style>
