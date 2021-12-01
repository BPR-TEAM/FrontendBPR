<template>
  <div class="overview-container">
    <div class="Chart">
      <LineChart
        ref="skills_chart"
        :chart-data="chartData"
        :options="options"
        :width="700"
        :height="500"
      >
      </LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from "../Charts/LineChart.vue";
import randomColor from "randomcolor";

const options = {
  responsive: false,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  },
  plugins: {
    title: {
      text: "Temperature",
      color: "#fff3c7",
      display: true,
      font: {
        size: 18
      }
    }
  },
  scales: {
    y: {
      ticks: {
        color: "#fff3c7",
        font: {
          size: 18
        }
      },
      grid: {
        color: "#fff3c7",
        lineWidth: 0.5
      }
    },
    x: {
      ticks: {
        color: "#fff3c7",
        font: {
          size: 18
        }
      },
      grid: {
        color: "#fff3c7",
        lineWidth: 0.5
      }
    }
  }
};
export default {
  data() {
    return {
      options,
      chartData: {
        labels: ["day1", "day2", "day3", "day4", "day5", "day6"],
        datasets: [
          {
            backgroundColor: "rgb(76, 195, 192)",
            label: "Ideal value",
            data: [10, 10, 10, 10, 10, 10],
            // fill: true
            borderColor: "rgb(76, 195, 192)"
          },
          {
            backgroundColor: "#fff3c7",
            data: [0, 11, 10, 25, 17, 1, 10],
            label: "Actual value",
            borderColor: "#fff3c7"
          }
        ]
      }
    };
  },
  components: {
    LineChart
  },

  computed: {
    currentDataSet() {
      return this.chartData.datasets[0].data;
    }
  },
  methods: {
    openLogin(modal) {
      this.$refs[modal].open();
    },
    updateChart() {
      this.$refs.skills_chart.update();
      console.log(this.chartData.datasets[0].data);
    }
  }
};
</script>

<style lang="scss" scoped>
.overview-container {
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  position: absolute;

  &::-webkit-scrollbar {
    display: none;
  }
  /// flex-direction: column;
  width: 715px !important;
  height: 800px !important;
  background: black;
  font-family: "Poppins", sans-serif;
  animation: graph-fade 500ms;
}

@keyframes graph-fade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
