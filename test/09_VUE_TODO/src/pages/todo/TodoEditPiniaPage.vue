<template>
  <div>
    <h1>TODO EDIT</h1>
    <div v-if="todoStore.isFetching">로딩 중...</div>
    <div v-else-if="todoStore.isError">
      {{ todoStore.errorMessage }}
    </div>
    <div v-else>
      <h2>todo : <input type="text" v-model.trim="editedTodo" /></h2>
      <h2>desc : <input type="text" v-model.trim="editedDesc" /></h2>
      <h2>
        done :
        <input type="checkbox" v-model="editedDone" />
      </h2>
      <button v-on:click="editTodo">수정</button>
      <button v-on:click="cancel">취소</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodoStore } from '../stores/todo';

const route = useRoute();
const router = useRouter();
const todoStore = useTodoStore();
const id = route.params.id;

const editedTodo = ref('');
const editedDesc = ref('');
const editedDone = ref(false);

async function init() {
  try {
    const todo = await todoStore.fetchTodoById(id);

    editedTodo.value = todo.todo;
    editedDesc.value = todo.desc;
    editedDone.value = todo.done;
  } catch (error) {
    console.error('할 일을 불러오는 중 오류가 발생했습니다', error);
  }
}

async function editTodo() {
  try {
    const todoData = {
      todo: editedTodo.value,
      desc: editedDesc.value,
      done: editedDone.value,
    };

    await todoStore.updateTodo(id, todoData);
    router.push({ name: 'todo' });
  } catch (error) {
    console.error('할 일 수정 중 오류가 발생했습니다', error);
  }
}

function cancel() {
  router.push({ name: 'todo/detail', params: { id } });
}

init();
</script>
