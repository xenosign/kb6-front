<template>
  <main>
    <h1>CORS PAGE</h1>
  </main>
</template>

<script setup>
import axios from 'axios';

const CORS_URL_PROXY = '/api';
const CORS_URL = 'http://localhost:8080';

// const BASE_URL =
//   'https://port-0-tetz-night-back-m5yo5gmx92cc34bc.sel4.cloudtype.app';

async function checkCors() {
  try {
    const corsUrl = CORS_URL + '/cors/off';
    const corsRes = await axios.get(corsUrl);

    console.log('CORS 응답 결과 : ', corsRes);
  } catch (e) {
    alert('CORS 응답 통신 ERR 발생');

    console.log(e);
  }
}

checkCors();
</script>
