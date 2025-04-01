<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    /
    <RouterLink to="/cors">CORS</RouterLink>
    /
    <RouterLink to="/login">LOGIN</RouterLink>
    /
    <RouterLink to="/todo">TODO</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
