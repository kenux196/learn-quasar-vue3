<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggle-menu')"
      />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Quasar App for study
      </q-toolbar-title>
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
<script setup></script>
