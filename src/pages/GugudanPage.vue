<template>
  <div class="q-ma-xl">
    <h3 class="row">구구단 테스트</h3>
    <q-linear-progress stripe rounded size="30px" color="red" :value="progress"></q-linear-progress>
    <div>{{ time }}</div>
    <div>문제</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const progress = ref(0);
const limitTime = 10;
const time = ref(0);
const intervalId = setInterval(() => {
  progress.value = ++time.value / limitTime;
  if (time.value === limitTime) {
    clearInterval(intervalId);
  }
}, 1000);
</script>

<style lang="scss" scoped></style>
