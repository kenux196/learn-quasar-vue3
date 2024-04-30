<template>
  <q-drawer>
    <q-list>
      <q-item-label header class="text-weight-bolder text-h5">
        <q-icon name="menu"></q-icon>
        Menu
      </q-item-label>
      <MenuBar v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import MenuBar from 'src/components/MenuBar.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Posts',
    icon: 'article',
    link: '/posts',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
  {
    title: 'Quasar Test',
    icon: 'logo_dev',
    link: '/quasar-test',
  },
  {
    title: 'Chart.js test',
    icon: 'chart',
    link: '/chart-test',
  },
];
</script>
