<script>
import {
  createGenerateChart,
  createDestoryChart,
  createLoadDataChart
} from "./chartMethods";
import equal from "deep-equal";
export default {
  name: "billboard-chart",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  created() {
    // instance methods
    this.generateChart = createGenerateChart(this);
    this.destoryChart = createDestoryChart(this);
    this.loadDataChart = createLoadDataChart(this);
  },
  mounted() {
    this.$chart = this.generateChart();
  },
  unmounted() {
    this.destoryChart();
  },
  watch: {
    "options.data": {
      deep: true,
      handler(newData) {
        this.loadDataChart(newData);
      }
    }
  }
};
</script>

<template>
<div class='v-bb-chart'></div>
</template>