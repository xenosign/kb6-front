<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

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
      /
      <RouterLink to="/user">User</RouterLink>

      <br />
      <br />

      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">Happy</RouterLink>
      /
      <RouterLink to="/dynamic/exciting">Exciting</RouterLink>
      /
      <RouterLink to="/user">User</RouterLink>

      <div class="button-nav">
        <button @click="router.push('/')">Home</button>
        <button @click="router.push('/about')">About</button>
        <button @click="router.push('/dynamic/happy')">Happy</button>
        <button @click="router.push('/dynamic/exciting')">Exciting</button>
        <button @click="router.back()">뒤로</button>
        <button @click="router.forward()">앞으로</button>
        <button @click="router.go(-2)">뒤로 2번</button>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
