<template lang="">
  <input type="text" v-model="newTodo" />
  <button @click="addTodo(newTodo)">추가</button>
</template>
<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodo: '',
    };
  },
  props: ['addTodo'],
};
</script>
<style lang=""></style>
