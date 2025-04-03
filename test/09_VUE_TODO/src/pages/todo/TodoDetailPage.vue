<template>
  <div>
    <h1>TODO DETAIL</h1>
    <div>
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
let todo = ref({});

async function fetchTodo() {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todo.value = todoRes.data;
    console.log('TODO DETAIL 데이터 : ', todo);
  } catch (e) {
    alert('TODO DETAIL 통신 ERR 발생');
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
