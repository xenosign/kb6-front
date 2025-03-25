<script setup>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';
</script>

<template lang="">
  <TodoInput :addTodo="addTodo" />
  <ul>
    <TodoItem
      v-for="(todo, index) in todoList"
      :key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
      :toggleCompleted="toggleCompleted"
    />
  </ul>
</template>
<script>
let ts = new Date().getTime();

export default {
  name: 'TodoList',
  data() {
    return {
      todoList: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todoList = [
        ...this.todoList,
        { id: new Date(), todo: newTodo, completed: false },
      ];
    },
    deleteTodo(id) {
      this.todoList = [...this.todoList].filter((el) => el.id !== id);
    },
    toggleCompleted(id) {
      this.todoList = [...this.todoList].map((el) => {
        if (el.id === id) el.completed = !el.completed;
        return el;
      });
    },
  },
};
</script>
<style>
.completed {
  text-decoration: line-through;
}
</style>
