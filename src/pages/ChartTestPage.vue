<template>
  <q-page>
    <q-item class="text-h4">Chart.js Test</q-item>
    <div style="width: 1000px; height: 400px">
      <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
    <div>
      <table>
        <tr v-for="(value, index) in labelForValue" :key="index">
          <td>
            {{ value[2] }}
          </td>
        </tr>
      </table>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Line } from 'vue-chartjs';
import Chart from 'chart.js/auto';
import { date } from 'quasar';

const chartData = computed(() => {
  return {
    labels: labels,
    datasets: [
      {
        data: dataList,
      },
    ],
  };
});

const labelForValue = ref([]);

const chartOptions = ref({
  responsive: true,
  scales: {
    x: {
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (val, index) {
          const result = index % 1 === 0 ? this.getLabelForValue(val) : '';
          labelForValue.value.push(result);
          // Hide every 2nd tick label
          return result;
        },
        color: 'red',
      },
    },
  },
});

const DATE_COUNT = 1000;

const dataList = [];
const labels = [];
function getDatas() {
  for (let days = 0; days < DATE_COUNT; days++) {
    const data = {
      x: date.addToDate(new Date(), { days: days }).toLocaleDateString(),
      y: days,
    };
    // dataList.push(data);
    dataList.push(data.y);
    const label = [data.x, data.y];
    labels.push(label);
  }
  return dataList;
}
console.log(getDatas());
console.log(labelForValue.value);
</script>

<style lang="scss" scoped></style>
