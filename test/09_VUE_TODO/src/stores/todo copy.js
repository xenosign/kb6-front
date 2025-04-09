import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', () => {
  const todoList = ref([]);
  const currentTodo = ref({});
  const isFetching = ref(false);
  const isError = ref(false);
  const errorMessage = ref('');

  const BASE_URL = '/api';

  function resetLoadingState() {
    isFetching.value = false;
    isError.value = false;
    errorMessage.value = '';
  }

  function handleError(error, customMessage) {
    isError.value = true;
    errorMessage.value = customMessage || '오류가 발생했습니다';
    console.log(customMessage, error);
    throw error;
  }

  async function fetchTodos() {
    resetLoadingState();
    isFetching.value = true;

    try {
      const response = await axios.get(`${BASE_URL}/todos`);
      todoList.value = response.data;
      console.log('모든 TODO 데이터 : ', todoList.value);
      return todoList.value;
    } catch (error) {
      handleError(error, 'TODO 목록 통신 ERR 발생');
    } finally {
      isFetching.value = false;
    }
  }

  async function fetchTodoById(id) {
    resetLoadingState();
    isFetching.value = true;

    try {
      const response = await axios.get(`${BASE_URL}/todos/${id}`);
      currentTodo.value = response.data;
      console.log('TODO DETAIL 데이터 : ', currentTodo.value);
      return currentTodo.value;
    } catch (error) {
      handleError(error, 'TODO DETAIL 통신 ERR 발생');
    } finally {
      isFetching.value = false;
    }
  }

  async function addTodo(newTodo) {
    resetLoadingState();
    isFetching.value = true;

    try {
      const response = await axios.post(`${BASE_URL}/todos`, newTodo);
      todoList.value.push(response.data);
      console.log('TODO 추가 통신 결과 : ', response);
      return response.data;
    } catch (error) {
      handleError(error, 'TODO 추가 통신 ERR 발생');
    } finally {
      isFetching.value = false;
    }
  }

  async function updateTodo(id, todoData) {
    resetLoadingState();
    isFetching.value = true;

    try {
      const response = await axios.put(`${BASE_URL}/todos/${id}`, todoData);

      const index = todoList.value.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todoList.value[index] = response.data;
      }

      currentTodo.value = response.data;
      console.log('TODO 수정 통신 결과 : ', response);
      return response.data;
    } catch (error) {
      handleError(error, 'TODO 수정 통신 ERR 발생');
    } finally {
      isFetching.value = false;
    }
  }

  async function deleteTodo(id) {
    resetLoadingState();
    isFetching.value = true;

    try {
      await axios.delete(`${BASE_URL}/todos/${id}`);
      todoList.value = todoList.value.filter((todo) => todo.id !== id);
      console.log('TODO 삭제 완료');
    } catch (error) {
      handleError(error, 'TODO 삭제 통신 ERR 발생');
    } finally {
      isFetching.value = false;
    }
  }

  return {
    todoList,
    currentTodo,
    isFetching,
    isError,
    errorMessage,
    fetchTodos,
    fetchTodoById,
    addTodo,
    updateTodo,
    deleteTodo,
  };
});
