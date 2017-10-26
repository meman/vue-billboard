import { bb } from "billboard.js";

export const createGenerateChart = (instance) => {
  /**
   * TODO: documention
   */
  return () => {
    return bb.generate({
      data: instance.options,
      bindto: instance.$el,
    });
  }
}

export const createDestoryChart = (instance) => {
  /**
   * TODO: documention
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