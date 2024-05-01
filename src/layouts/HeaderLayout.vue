<template>
  <q-header elevated class="bg-grey-9">
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="$emit('toggle-menu')" />
      <q-toolbar-title> Vue3 & Quasar App </q-toolbar-title>
      <q-toggle
        v-model="darkMode"
        checked-icon="dark_mode"
        color="grey-10"
        unchecked-icon="light_mode"
        v-on:update:model-value="toggleDarkMode"
      ></q-toggle>
      <q-btn flat>
        <q-icon name="logout"></q-icon>
      </q-btn>
      <q-avatar>
        <img
          src="https://i.namu.wiki/i/htzWGjE4TlsG37rQW2bvfGf3QKEJCVFe5r6sqhQSJPdR_5kn6oiZlgHeJw5TUNIi6RIVhvx0mwriLXAX8UIXjgSey5VjbCgPKVEIjl6qLEDnv4oMSK6M5PEJ5vKYhfCthBr7hoVuwG4nh0w_qbwbsQ.webp"
        />
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const darkMode = ref(false);
function toggleDarkMode() {
  $q.dark.set(darkMode.value);
}
</script>
