import Vue from 'vue';
import BillboardChart from '../src';

Vue.use(BillboardChart);

new Vue({
  el: '#app',
  data() {
    return {
      chartData: {
        title: {
          text: 'sample chart'
        },
        data: {
          columns: []
        }
      },
    }
  },
  methods: {
    randomize(length) {
      const dataName = `data ${(this.chartData.data || {}).columns ? this.chartData.data.columns.length : 0}`;
      const randomArray = [...Array(length)].map(n => Math.round(Math.random() * 100));
      this.$set(this.chartData.data,'columns',[...this.chartData.data.columns, [dataName, ...randomArray]]);
    },
  },
  template: `<div>
    <button @click='randomize(12)'>12 option</button>
    <button @click='randomize(4)'>4 option</button>
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    <billboard-chart :options = 'chartData' />
    </div>`
  })
