<template>
  <div>
    <q-item class="text-h4">Chart.js Test</q-item>
    <div style="width: 800px" class="bg-grey-3">
      <Line id="my-chart-id2" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Line } from 'vue-chartjs';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import { date } from 'quasar';

const chartData = computed(() => {
  return {
    labels: labels,
    datasets: [
      {
        data: dataList,
        xAxisID: 'x-axis-1',
      },
      {
        data: dataList,
        xAxisID: 'x-axis-2',
      },
    ],
  };
});

const chartOptions = ref({
  responsive: true,
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
    'x-axis-1': {
      ticks: {
        beginAtZero: true,
        color: 'black',
        maxRotation: 0,
        callback: function (val, index, ticks) {
          console.log('ticks: ', ticks[index]);
          const result = index % 1 === 0 ? this.getLabelForValue(val) : '';
          return result;
        },
      },
    },
    'x-axis-2': {
      display: true,
      grid: {
        display: true,
        drawOnChartArea: false,
        color: 'blue',
        // drawTicks: false,
        // lineWidth: 1,
        // tickWidth: 1,
      },
      ticks: {
        beginAtZero: true,
        callback: function (val, index, ticks) {
          console.log('ticks: ', ticks[index]);
          // console.log('value: ', val);
          const result2 = index % 1 === 0 ? this.getLabelForValue(val) : '';
          console.log(result2);
          return '         ' + result2[2] + '         ';
        },
        color: 'red',
        maxRotation: 0,
        // autoSkip: true,
        // autoSkipPadding: 50,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
        modifierKey: 'shift',
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        drag: {
          enabled: true,
          backgroundColor: 'rgba(255, 255, 0, 0.4)',
          threshold: 0,
          drawTime: 'beforeDatasetsDraw',
        },
        mode: 'x',
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

const DATA_COUNT = 1000;
function getIndexGap() {
  return DATA_COUNT / 10;
}

const dataList = [];
const dataList2 = [];
const labels = [];
function getDatas() {
  for (let days = 0; days < DATA_COUNT; days++) {
    const now = date.addToDate(new Date(), { days: days });
    const data = {
      d: now.toLocaleDateString(),
      t: now.toTimeString().split(' ')[0],
      y: getRandomData(),
    };
    // dataList.push(data);
    dataList.push(data.y);
    const label = [data.d, data.t, data.y];
    // const label = [data.x];
    labels.push(label);
    const data2 = {
      x: data.y,
      y: data.y,
    };
    dataList2.push(data);
    // console.log('dataList2: ', dataList2);
  }
}
getDatas();
function getRandomData() {
  return Math.floor(Math.random() * 100);
}
</script>

<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
