<template>
  <q-footer elevated class="bg-grey-8 text-white row q-py-sm">
    <div class="col-5 q-ml-sm">{{ now }}</div>
    <div class="col text-center">
      Released under <span class="text-weight-bold">MIT License</span>.
      <div>Copyright @ 2024 kenux.yun</div>
    </div>
    <div class="row col">
      <div class="col-1">
        <q-icon name="language"></q-icon>
      </div>
      <div class="col">
        <q-select
          v-model="lang"
          :options="langOptions"
          dense
          borderless
          emit-value
          map-options
          options-dense
          style="margin-top: -9px"
        />
      </div>
    </div>
    <div class="col-1 q-mr-sm">Quasar v{{ $q.version }}</div>
  </q-footer>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import languages from 'quasar/lang/index.json';

const now = ref(new Date().toLocaleString());
const appLanguages = languages.filter((lang) => ['ko-KR', 'en-US'].includes(lang.isoName));

const langOptions = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, (val) => {
  // dynamic import, so loading on demand only
  import(
    /* webpackInclude: /(de|en-US)\.js$/ */
    'quasar/lang/' + val
  ).then((lang) => {
    $q.lang.set(lang.default);
  });
});
</script>
<style>
.lang-selector {
  width: 100px;
  margin: auto;
}
</style>
