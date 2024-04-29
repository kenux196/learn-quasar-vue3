<template>
  <q-footer elevated class="bg-grey-8 text-white row">
    <div class="col-5 q-ml-sm">{{ now }}</div>
    <div class="col text-center">kenux.org</div>
    <div class="col-5 text-right q-mr-sm">Quasar v{{ $q.version }}</div>
  </q-footer>
</template>
<script setup>
import { ref } from 'vue';

const now = ref(new Date().toLocaleString());
</script>
