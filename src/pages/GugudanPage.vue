<template>
  <div class="q-ma-xl">
    <div>
      <div class="text-h2 text-weight-bolder text-center">감자 구구단 테스트</div>
    </div>
    <div class="flex justify-evenly">
      <q-btn color="primary" label="수동 모드 시작" icon="send" class="q-my-md" @click="start" />
      <q-btn color="secondary" label="자동 모드 시작" icon="send" class="q-my-md" @click="start" />
    </div>
    <div class="text-h1 text-bold q-my-md text-center" style="min-height: 120px">
      <span>{{ quiz }} </span><span v-if="showAnswer">{{ answer }}</span>
    </div>
    <div class="flex">
      <q-linear-progress stripe rounded size="50px" color="red" animation-speed="500" :value="progress">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="remainTime" />
        </div>
      </q-linear-progress>
    </div>
    <div>{{ time }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const progress = ref(1);
const limitTime = 5;
const time = ref(5);
const quiz = ref('');
const answer = ref('');
const showAnswer = ref(false);

const remainTime = computed(() => {
  return time.value + ' 초';
});

function getQuiz() {
  let num1 = getRandomInt(9);
  while (num1 < 2) {
    console.log(num1);
    num1 = getRandomInt(9);
  }
  let num2 = getRandomInt(9);
  while (num2 < 1) {
    num2 = getRandomInt(9);
  }

  quiz.value = num1 + ' X ' + num2 + ' = ';
  answer.value = num1 * num2;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function start() {
  reset();
  getQuiz();
  startTimer();
}

let intervalId;
function startTimer() {
  intervalId = setInterval(() => {
    progress.value = --time.value / limitTime;
    if (time.value < 1) {
      clearInterval(intervalId);
      setTimeout(() => {
        showAnswer.value = true;
      }, 1000);
    }
  }, 1000);
}

function reset() {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  showAnswer.value = false;
  time.value = 5;
  progress.value = 1;
  quiz.value = '';
  answer.value = '';
}
</script>

<style lang="scss" scoped></style>
