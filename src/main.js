import Vue from 'vue';
import BillboardChart from './components/BillboardChart/index.vue';

new Vue({
  el: '#app',
  data() {
    return {
      chartData: {
        data:{}
      },
    }
  },
  methods: {
    randomize() {
      const dataName = `data ${ (this.chartData.data || {}).columns? this.chartData.data.columns.length: 0}`;
      const randomArray = [...Array(12)].map(n => Math.round(Math.random() * 100));
      this.chartData = {
        data: {
          columns: [...((this.chartData.data || {}).columns || []), [dataName, ...randomArray]],
        },
      };
    },
    swapLength(){
      const dataName = `data ${ (this.chartData.data || {}).columns? this.chartData.data.columns.length: 0}`;
      const randomArray = [...Array(4)].map(n => Math.round(Math.random() * 100));
      this.chartData = {
        data: {
          columns: [...((this.chartData.data || {}).columns || []), [dataName, ...randomArray]],
        },
      };
    }
  },
  components: { BillboardChart },
  template: `<div>
    <button @click='randomize'>12 option</button>
    <button @click='swapLength'>4 option</button>
    <billboard-chart :options = 'chartData' />
  </div>`
})
