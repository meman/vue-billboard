<script>
import {
  createGenerateChart,
  createDestoryChart,
  createLoadDataChart
} from "./instanceMethods";
import equal from "deep-equal";

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    optionsWithoutData() {
      return Object.assign({}, this.options, { data: undefined });
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
    "options.data": function(after, before) {
      const hasChanged = !equal(after, before);
      if (hasChanged) {
        this.loadDataChart(after);
      }
    },
  }
};
</script>

<template>
<div class='v-bb-chart'></div>
</template>
