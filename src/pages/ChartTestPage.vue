<template>
  <div>
    <q-item class="text-h4">Chart.js Test</q-item>
    <div style="width: 100%">
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
  </div>
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
  // scales: {
  //   x: {
  //     ticks: {
  //       // For a category axis, the val is the index so the lookup via getLabelForValue is needed
  //       callback: function (val, index) {
  //         const result = index % 1 === 0 ? this.getLabelForValue(val) : '';
  //         labelForValue.value.push(result);
  //         // Hide every 2nd tick label
  //         return result;
  //       },
  //       color: 'red',
  //     },
  //   },
  // },
  scales: {
    y: {
      display: true,
      grid: {
        display: false,
        drawOnChartArea: false,
      },
      ticks: {
        beginAtZero: true,
      },
    },
    x: {
      display: true,
      grid: {
        display: true,
        drawOnChartArea: false,
      },
      ticks: {
        beginAtZero: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

const DATE_COUNT = 100;

const dataList = [];
const labels = [];
function getDatas() {
  for (let days = 0; days < DATE_COUNT; days++) {
    const data = {
      x: date.addToDate(new Date(), { days: days }).toLocaleDateString(),
      y: getRandomData(),
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
function getRandomData() {
  return Math.floor(Math.random() * 100);
}
</script>

<style lang="scss" scoped></style>
