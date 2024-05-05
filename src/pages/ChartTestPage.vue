<template>
  <div>
    <q-item class="text-h4">Chart.js Test</q-item>
    <div style="width: 800px" class="bg-grey-3">
      <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
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
      },
    ],
  };
});

const labelForValue = ref([]);

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
    x: {
      // max: 30,
      // type: 'time',
      // time: {
      //   // Luxon format string
      //   tooltipFormat: 'DD T',
      // },
      display: true,
      grid: {
        display: true,
        drawOnChartArea: false,
        color: 'blue',
        // drawTicks: false,
        // lineWidth: 1,
        // tickWidth: 1
      },
      ticks: {
        beginAtZero: true,
        callback: function (val, index, ticks) {
          const result2 = index % 1 === 0 ? this.getLabelForValue(val) : '';
          // Hide every 2nd tick label
          return result2;
        },
        // color: 'red',
        // maxRotation: 0,
        // crossAlign: 'center',
        // maxTicksLimit: 11,
        // sampleSize: 10,
        // stepSize: 50,
        major: {
          enabled: true,
        },
        // font: function (context) {
        //   if (context.tick && context.tick.major) {
        //     return {
        //       weight: 'bold',
        //     };
        //   }
        // },
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
    const label = [
      data.d,
      // data.t,
      // data.y
    ];
    // const label = [data.x];
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

<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
