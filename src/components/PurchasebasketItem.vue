<template>
  <div class="namayesh text-center mt-5" v-if="namayeshalert">
    <h6>سبد خرید خالی می باشد.</h6>
  </div>

  <div class="basket" v-if="showbasket">
    <div class="container">
      <div class="row g-3">
        <table class="table text-center">
          <thead>
            <tr>
              <th>نام</th>
              <th>عکس</th>
              <th>تعداد</th>
              <th>پیش پرداخت</th>
              <th>اقساط</th>
              <th>مبلغ هر قسط</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in store.mahsul" :key="product.id">
              <td>{{ product.details.name }}</td>
              <td><img :src="product.details.image" alt="" /></td>
              <td>{{ product.details.tedad }}</td>
              <td>{{ product.pishpardakht }}</td>
              <td>{{ product.month }}</td>
              <td>
                {{
                  Math.ceil(
                    (product.details.price - product.pishpardakht) /
                      product.month
                  )
                }}
              </td>
              <td>
                <button
                  @click="deleteitem(product.details.id)"
                  class="btn btn-danger"
                >
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="sum">
          <span
            >مجموع پیش پرداخت :
            <span class="ms-1"
              >{{ sumpishpardakht }}<span class="ms-1">تومان</span></span
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { usePurchaseStore } from "../store/purchase";
export default {
  setup() {
    const store = usePurchaseStore();
    const showbasket = ref(false);
    const namayeshalert = ref(true);
    const sumpishpardakht = ref("");

    if (store.mahsul.length == 0) {
      showbasket.value = false;
      namayeshalert.value = true;
    } else {
      showbasket.value = true;
      namayeshalert.value = false;
    }

    sumpishpardakht.value = store.mahsul.reduce((acc, curr) => {
      return acc + curr.details.tedad * curr.pishpardakht;
    }, 0);

    function deleteitem(id) {
      store.mahsul = store.mahsul.filter(
        (product) => product.details.id !== id
      );
    }

    return { store, showbasket, namayeshalert, sumpishpardakht, deleteitem };
  },
};
</script>

<style>
.table img {
  width: 50px;
  height: 50px;
}
</style>
