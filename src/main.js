import Vue from 'vue';
import BillboardChart from './components/BillboardChart/index.vue';

new Vue({
  el: '#app',
  data() {
    return {
      chartData: {},
    }
  },
  methods: {
    randomize() {
      const dataName = `data ${this.chartData.columns ? this.chartData.columns.length + 1: 0}`;
      const randomArray = [...Array(12)].map(n => Math.round(Math.random() * 100));
      this.chartData = {
        columns: [...(this.chartData.columns || []), [dataName, ...randomArray]],
      };
    }
  },
  components: { BillboardChart },
  template: `<div>
    <button @click='randomize'>random option</button>\
    <billboard-chart :options = 'chartData' />
  </div>`
})
