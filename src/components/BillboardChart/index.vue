<script>
import {} from "./instanceMethods";

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  created(){
    // TODO: init instance method with vue context
  },
  mounted(){
    // TODO: attempt to create chart with aviable props
  },
  unmounted(){
    // TODO: attempt destory chart if is present on context
  },
  watch: {
    options: {
      handler(newOptions, oldOptions){
        // TODO: do deep object checking to see if we need to update or not
      }
    }
  }
};
</script>

<template>

<div class='v-bb-chart'></div>

</template>
