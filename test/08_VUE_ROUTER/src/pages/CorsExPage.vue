<template>
  <main>
    <h1>CORS EX PAGE</h1>
  </main>
</template>

<script setup>
const PROXY_URL = '/cors/ex';

async function checkCors() {
  try {
    const corsUrl = PROXY_URL;
    const corsRes = await fetch(corsUrl);
    const corsData = await corsRes.json();

    console.log('CORS EX 응답 결과 : ', corsData);
  } catch (e) {
    alert('CORS 응답 통신 ERR 발생');

    console.log(e);
  }
}

checkCors();
</script>
