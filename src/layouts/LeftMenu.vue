<template>
  <q-drawer>
    <q-list>
      <q-item-label header class="text-weight-bolder text-h5">
        <q-icon name="menu"></q-icon>
        Menu
      </q-item-label>
      <menu-item v-for="link in linksList" :key="link.title" v-bind="link"></menu-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import MenuItem from 'src/components/MenuItem.vue';

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
    icon: 'bar_chart',
    link: '/chart-test',
  },
];
</script>
