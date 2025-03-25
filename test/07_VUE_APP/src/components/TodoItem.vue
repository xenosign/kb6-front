<template lang="">
  <li
    :class="todo.completed ? 'completed' : ''"
    @click="toggleCompleted(todo.id)"
  >
    {{ todo.todo }}
    <button @click="deleteTodo(todo.id)">삭제</button>
  </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'deleteTodo', 'toggleCompleted'],
};
</script>
<style lang=""></style>
