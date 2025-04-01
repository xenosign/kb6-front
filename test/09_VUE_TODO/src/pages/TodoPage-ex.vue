<template>
  <main>
    <h1>TODO PAGE</h1>
    <!-- 로딩 중에는 아래의 h2 가 출력 되도록 구현 -->
    <h2>데이터 로딩 중</h2>
    <!-- 통신 실패 시 아래의 h2 가 출력 되도록 구현 -->
    <h2>데이터 통신 중 에러 발생</h2>
    <!-- 통신 성공 시 todo 리스트 출력 -->
    <ul>
      <li>서버에서 받은 todo 출력</li>
    </ul>
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const BASE_URL = '/api';

async function fetchTodo() {
  try {
    // 내부를 구현 해주세요
  } catch (e) {
    alert('TODO DATA FETCH 통신 ERR 발생');
    console.log(e);
  }
}

fetchTodo();
</script>
