<script>
import { bb } from "billboard.js";
import chartDataSchema from './chartDataSchema';

export default {
  props: {
    options: {
      type: Object,
      required: true,
    }
  },
  mounted(){
    const $container = this.$el;
    // validate the the options against schmea
    chartDataSchema.validate(this.options, (err, value)=> {
      console.log({
        err,
        value
      })
    });
    // bb.generate({
    //   data,
    //   bindto: $container
    // })
  }
};
</script>

<template>
<div class='v-bb-chart'></div>
</template>