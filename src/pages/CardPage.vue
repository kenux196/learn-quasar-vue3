<template>
  <div class="text-h1 text-center">카드 만들기</div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m.name" class="col-6 col-md-4">
      <q-card>
        <div class="text-center bg-primary text-white">회원</div>
        <q-card-section>
          <div>{{ m.name }}</div>
          <div>{{ m.team }}</div>
          <div>{{ m.contact }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const members = reactive([
  { name: '홍길동', team: '디자인팀', contact: '010-1234-1234' },
  { name: '윤지원', team: '초등학생', contact: '010-1234-1111' },
  { name: '윤아준', team: '초등학생', contact: '010-1234-2222' },
]);
</script>

<style lang="scss" scoped></style>
