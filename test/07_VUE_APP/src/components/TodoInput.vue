<template lang="">
  <input type="text" v-model="newTodo" />
  <button @click="handleAddTodo()">추가</button>
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
  methods: {
    handleAddTodo() {
      this.addTodo(this.newTodo);
      this.newTodo = '';
    },
  },
};
</script>
<style lang=""></style>
