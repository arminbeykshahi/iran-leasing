<template>
  <div class="singleproduct mt-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-md-6 mb-5">
          <img class="w-100 h-100" :src="product.image" alt="" />
        </div>
        <div class="col-md-6 my-auto">{{ product.features }}</div>
      </div>
    </div>
  </div>
  <br />
  <br />

  <div class="form mt-5">
    <div class="container">
      <div class="row g-3">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addtocard(mahsul)" class="text-center">
                <span
                  >قیمت اولیه محصول :
                  <span>{{ product.price }}</span> تومان</span
                >
                <br />
                <br />
                <p>مبلغ پیش پرداخت :</p>

                <div class="radio d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      value="100000000"
                      v-model="pishpardakht"
                      type="radio"
                      name="radioprice"
                      id="radio1"
                    />
                    <label class="form-check-label" for="radio1">
                      100000000
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input ms-2"
                      value="200000000"
                      v-model="pishpardakht"
                      type="radio"
                      name="radioprice"
                      id="radio2"
                    />
                    <label class="form-check-label" for="radio2">
                      200000000
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input ms-2"
                      value="300000000"
                      v-model="pishpardakht"
                      type="radio"
                      name="radioprice"
                      id="radio3"
                    />
                    <label class="form-check-label" for="radio3">
                      300000000
                    </label>
                  </div>
                </div>
                <br />
                <p>قیمت محصول پس از پیش پرداخت :</p>
                <span
                  >{{ product.price - pishpardakht
                  }}<span class="ms-1">تومان </span></span
                >
                <br />
                <br />
                <p>تعداد اقساط :</p>
                <div class="radio2 d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      value="12"
                      v-model="month"
                      type="radio"
                      name="aghsat"
                      id="radio4"
                    />
                    <label class="form-check-label" for="radio4"> 12 </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input ms-2"
                      value="36"
                      v-model="month"
                      type="radio"
                      name="aghsat"
                      id="radio5"
                    />
                    <label class="form-check-label" for="radio5"> 36 </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input ms-2"
                      value="60"
                      v-model="month"
                      type="radio"
                      name="aghsat"
                      id="radio6"
                    />
                    <label class="form-check-label" for="radio6"> 60 </label>
                  </div>
                </div>
                <br />
                <p>مبلغ هر قسط :</p>
                <span>{{
                  Math.ceil((product.price - pishpardakht) / month)
                }}</span
                ><span class="ms-1">تومان</span>
                <br />
                <button type="submit" class="btn btn-success w-50 mt-4">
                  اضافه به سبد خرید
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { reactive, ref } from "vue";
import { usePurchaseStore } from "../store/purchase";
import Swal from "sweetalert2";
export default {
  setup() {
    const route = useRoute();
    const product = ref("");
    const pishpardakht = ref("");
    const month = ref("");
    const mahsul = reactive({
      details: product,
      pishpardakht: pishpardakht,
      month: month,
    });

    const store = usePurchaseStore();

    function getproduct() {
      axios
        .get(`http://localhost:3000/posts/${route.params.id}`)
        .then(function (response) {
          product.value = response.data;

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getproduct();

    function addtocard(product) {
      store.getproduct(product);

      Swal.fire({
        title: "محصول به سبد خرید اضافه شد",
        icon: "success",
        draggable: true,
      });
    }

    return {
      route,
      product,
      getproduct,
      pishpardakht,
      month,
      mahsul,
      store,
      addtocard,
    };
  },
};
</script>

<style></style>
