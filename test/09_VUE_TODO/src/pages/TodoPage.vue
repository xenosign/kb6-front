<template>
  <main>
    <h1>TODO PAGE</h1>
    <h2 v-if="isFetching">데이터 로딩 중</h2>
    <ul v-else>
      <li v-for="(item, idx) in todoArr">{{ item.todo }} / {{ item.desc }}</li>
    </ul>
    <h2 v-if="isError">데이터 통신 중 에러 발생</h2>
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const BASE_URL = '/api';
// const BASE_URL =
//   'https://port-0-tetz-night-back-m5yo5gmx92cc34bc.sel4.cloudtype.app';

const todoArr = ref([]);
let isFetching = ref(true);
let isError = ref(false);

async function fetchTodo() {
  try {
    isFetching.value = true;
    const todoUrl = BASE_URL + '/todos';
    const todoRes = await axios.get(todoUrl);

    todoArr.value = todoRes.data;
    console.log('백엔드 TODO 데이터 : ', todoArr.value);

    isFetching.value = false;
  } catch (e) {
    alert('TODO DATA FETCH 통신 ERR 발생');
    isError.value = true;
    isFetching.value = false;
    console.log(e);
  }
}

fetchTodo();
</script>
