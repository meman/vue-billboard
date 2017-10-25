import Vue from 'vue';
import BillboardChart from './components/BillboardChart.vue';


const chartData = {
  "columns": [
    ["data1", false, 200, 100, 400, 150, 250],
    ["data2", 50, 20, 10, 40, 15, 25]
      ]
  };

new Vue({
  el: '#app',
  data(){
    return {
      chartData
    }
  },
  components: {BillboardChart},
  template: `<div><billboard-chart :options='chartData'/></div>`
})
