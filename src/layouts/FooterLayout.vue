<template>
  <q-footer elevated class="bg-grey-8 text-white row q-py-sm">
    <div class="col-5 q-ml-sm">{{ now }}</div>
    <div class="col text-center">
      Released under <span class="text-weight-bold">MIT License</span>.
      <div>Copyright @ 2024 kenux.yun</div>
    </div>
    <div class="col">
      <q-select
        v-model="locale"
        :options="localeOptions"
        dark
        dense
        borderless
        emit-value
        map-options
        options-dense
        options-dark
        style="max-width: 150px; margin: auto"
      >
        <template v-slot:before>
          <q-icon name="language" />
        </template>
      </q-select>
    </div>
    <div class="col-1 q-mr-sm">Quasar v{{ $q.version }}</div>
  </q-footer>
</template>
<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const now = ref(new Date().toLocaleString());
const $q = useQuasar();
const { locale } = useI18n({ useScope: 'global' });
const localeOptions = [
  {
    value: 'ko-KR',
    label: '한국어',
  },
  {
    value: 'en-US',
    label: 'English',
  },
];
</script>
<style>
.lang-selector {
  width: 100px;
  margin: auto;
}
</style>
