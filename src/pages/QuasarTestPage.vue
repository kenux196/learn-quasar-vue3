<template>
  <q-item class="flex text-h3">
    <q-icon name="logo_dev" />
    <span class="text-h4 text-weight-bold">Quasar Test Page</span>
  </q-item>
  <q-item class="text-body1">{{ hello }}</q-item>
</template>

<script setup>
import { ref } from 'vue';

const hello = ref('Hello Quasar!!');
</script>

<style lang="scss" scoped></style>
