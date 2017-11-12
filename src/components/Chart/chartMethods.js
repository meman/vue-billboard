import { bb } from "billboard.js";

export const createGenerateChart = (instance) => {
  /**
   * @function generateChart
   * 
   * @description 
   * generates the charts bases on the options instance
   * 
   * @returns {Object} the generated chart instance
   */
  return () => {
    const options = Object.assign({
      bindto: instance.$el,
    }, instance.options);
    return bb.generate(options);
  }
}

export const createDestoryChart = (instance) => {
  /**
   * @function destoryChart
   * 
   * @description
   * destorys the chart and sets ref to null
   */
  return () => {
    try {
      instance.$chart.destory();
      instance.$chart = null;
    } catch (error) {
      console.error('Internal Billboard.js error', error);
    }
  }
}

export const createLoadDataChart = (instance) => {
  /**
   * @function loadDataChart
   * 
   * @description
   * Updates the chart with the new data
   * 
   * @param {object} options from instance to update the chart with
   */
  return (data) => {
    if(!instance.$chart){
      instance.$chart = instance.generateChart(instance.options);
    }
    instance.$chart.load(data);
  }
}