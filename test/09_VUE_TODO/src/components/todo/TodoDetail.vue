<template>
  <div>
    <h1>TODO DETAIL</h1>

    <h2 v-if="isFetching">데이터 로딩 중</h2>
    <h2 v-if="isError">데이터 통신 중 에러 발생</h2>

    <div v-else>
      <h2>id : {{ todo.id }}</h2>
      <h2>todo : {{ todo.todo }}</h2>
      <h2>desc : {{ todo.desc }}</h2>
      <h2>done : {{ todo.done }}</h2>
      <button v-on:click="router.push({ name: 'todo' })">목록</button>
      <button v-on:click="router.push(`/todo/edit/${todo.id}`)">수정</button>
      <button v-on:click="deleteTodo(todo.id)">삭제</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const curRoute = useRoute();
const router = useRouter();
const id = curRoute.params.id;

const BASE_URL = '/api';
let todo = reactive({});
let isFetching = ref(true);
let isError = ref(false);

async function fetchTodo() {
  try {
    isFetching.value = true;
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todo = todoRes.data;
    console.log('TODO DETAIL 데이터 : ', todo);

    isFetching.value = false;
  } catch (e) {
    alert('TODO DETAIL 통신 ERR 발생');
    isError.value = true;
    isFetching.value = false;
    console.log(e);
  }
}

async function deleteTodo(id) {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.delete(todoUrl);

    todo = todoRes.data;
    console.log('백엔드 TODO 데이터 : ', todo);

    router.push({ name: 'todo' });
  } catch (e) {
    alert('TODO 삭제 ERR 발생');
    console.log(e);
  }
}

fetchTodo();
</script>
