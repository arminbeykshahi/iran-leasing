import { defineStore } from "pinia";
import { ref } from "vue";

const mahsul = ref([]);

export const usePurchaseStore = defineStore("purchase", () => {
  function getproduct(product) {
    mahsul.value.push(product);
  }

  return { getproduct, mahsul };
});
