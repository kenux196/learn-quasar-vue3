<template>
  <q-item class="flex text-h3">
    <q-icon name="logo_dev" />
    <span class="text-h4 text-weight-bold">Quasar Test Page</span>
  </q-item>
  <q-item class="text-body1">{{ hello }}</q-item>
  <div class="flex">
    <q-item class="text-weight-bold">{{ counter }}</q-item>
    <q-btn @click="increaseeCounter">카운트 증가</q-btn>
    <q-btn @click="decreaseeCounter">카운트 감소</q-btn>
    <q-item class="text-weight-bold">{{ doubleCount }}</q-item>
  </div>
  <div v-if="$q.platform.is.chrome" class="text-body1">user agent: chrome</div>
  <div v-else-if="$q.platform.is.safari" class="text-body1">user agent : safari</div>
  <div v-else class="text-body1">This message others</div>
  <div class="m-5">
    <div class="text-h6 text-bold">i18n 테스트</div>
    <span>설정된 언어: {{ selectedLanguage }} / {{ $t('failed') }} / {{ $t('success') }}</span>
    <div class="text-bold">{{ currentLocale }}</div>
    <div class="text-bold">{{ $t('jiwon') }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import useCounterStore from 'stores/example-store';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const lang = ref($q.lang.isoName);
console.log('platform type:', $q.platform);
console.log('lang: ', $q.lang);

const counter = computed(() => {
  return useCounterStore().counter;
});

const doubleCount = computed(() => {
  return useCounterStore().doubleCount;
});

const selectedLanguage = computed(() => {
  return $q.lang.nativeName;
});

const currentLocale = computed(() => {
  return $q.lang.getLocale();
});

const hello = ref('Hello Quasar!!');

function increaseeCounter() {
  useCounterStore().increment();
}

function decreaseeCounter() {
  useCounterStore().decrement();
}
</script>

<style lang="scss" scoped>
.m-5 {
  margin: 5px;
}
</style>
