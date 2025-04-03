<template>
  <div>
    <h1>TODO EDIT</h1>
    <div>
      <h2>todo : <input type="text" v-model.trim="editedTodo" /></h2>
      <h2>desc : <input type="text" v-model.trim="editedDesc" /></h2>
      <h2>
        done :
        <input type="checkbox" v-model="editedDone" />
      </h2>
      <button v-on:click="editTodo(todo.id)">수정</button>
      <button v-on:click="router.push({ name: 'todo' })">취소</button>
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
const editedTodo = ref('');
const editedDesc = ref('');
const editedDone = ref(false);

async function fetchTodo() {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todo = todoRes.data;

    editedTodo.value = todo.todo;
    editedDesc.value = todo.desc;
    editedDone.value = todo.done;
    console.log('TODO DETAIL 데이터 : ', todo);
  } catch (e) {
    alert('TODO DETAIL 통신 ERR 발생');
    console.log(e);
  }
}

async function editTodo(id) {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;

    const editTodo = {
      todo: editedTodo.value,
      desc: editedDesc.value,
      done: editedDone.value,
    };

    const todoRes = await axios.put(todoUrl, editTodo);

    console.log('TODO 추가 통신 결과 : ', todoRes);

    router.push({ name: 'todo' });
  } catch (e) {
    alert('TODO 추가 통신 ERR 발생');
    console.log(e);
  }
}

fetchTodo();
</script>
