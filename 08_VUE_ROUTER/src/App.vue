<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">Happy</RouterLink>
      /
      <RouterLink to="/dynamic/exciting">Exciting</RouterLink>
    </nav>
    <div>
      <button v-on:click="router.push('/')">Home</button>
      <button v-on:click="router.push('/about')">About</button>
      <button v-on:click="router.back()">뒤로</button>
      <button v-on:click="router.forward()">앞으로</button>
      <button v-on:click="router.go(-2)">뒤로 2번</button>
    </div>
    <div>
      <RouterLink to="/user/1">User1</RouterLink>
      /
      <RouterLink to="/user/2">User2</RouterLink>
      /
      <RouterLink to="/user/3">User3</RouterLink>
      /
      <RouterLink to="/user/4">User4</RouterLink>
      /
      <RouterLink to="/user/5">User5</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
