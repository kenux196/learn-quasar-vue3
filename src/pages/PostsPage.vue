<template>
  <div class="text-h3 text-center">Posts Page</div>
  <div class="q-ma-md">
    <q-table title="Quasar QTable" :rows="rows" :columns="columns" row-key="id" separator="cell" />
  </div>
  <div class="q-ma-md q-pa-md bg-grey-10 row justify-center">
    <table style="width: 100%">
      <caption class="text-h4 q-mb-md">
        Pure HTML Table
      </caption>
      <thead>
        <tr class="bg-green-5">
          <th style="width: 10%">#</th>
          <th>title</th>
          <th style="width: 20%">date</th>
          <th style="width: 20%">writer</th>
        </tr>
      </thead>
      <tbody v-for="r in rows" :key="r.id">
        <tr>
          <td class="bg-orange-5">{{ r.id }}</td>
          <td style="text-align: start">{{ r.title }}</td>
          <td>{{ r.date }}</td>
          <td>{{ r.writer }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">여기는 footer</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const columns = [
  {
    name: 'id',
    required: true,
    label: '#',
    align: 'left',
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: 'title', align: 'left', label: 'title', field: 'title', sortable: false },
  { name: 'date', align: 'center', label: 'date', field: 'date', sortable: true },
  { name: 'writer', align: 'center', label: 'writer', field: 'writer', sortable: false },
];

const rows = reactive([
  {
    id: 1,
    title: '이것은 샘플1 제목입니다.',
    date: '2024-05-12',
    writer: 'kenux',
  },
  {
    id: 2,
    title: '이것은 샘플2 제목입니다. AAA',
    date: '2024-05-13',
    writer: 'kenux',
  },
  {
    id: 3,
    title: '이것은 샘플3 제목입니다. BBBBBBBB',
    date: '2024-05-14',
    writer: 'kenux',
  },
  {
    id: 4,
    title: '이것은 샘플4 제목입니다. CCCCCCCCCCCCCCC',
    date: '2024-05-15',
    writer: 'kenux',
  },
]);
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
th,
td {
  width: 100px;
  height: 50px;
  text-align: center;
  border: 1px solid green;

  vertical-align: middle;
}
</style>
