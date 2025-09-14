<template>
  <div class="d-flex justify-content-center mt-5" v-if="showspiner">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div @change="createfilter" class="d-flex justify-content-center mb-5">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        value="irankhodro"
        v-model="filtervalue"
        name="formfilter"
        id="irankhodro"
      />
      <label class="form-check-label" for="irankhodro"> ایرانخودرو </label>
    </div>
    <div class="form-check ms-4">
      <input
        class="form-check-input"
        type="radio"
        value="saipa"
        v-model="filtervalue"
        name="formfilter"
        id="flexRadioDefault2"
      />
      <label class="form-check-label" for="flexRadioDefault2"> سایپا </label>
    </div>
  </div>

  <div class="products">
    <div class="container">
      <div class="row g-5">
        <div v-for="product in products" :key="product.id" class="col-md-4">
          <router-link
            :to="{ name: 'singleproduct', params: { id: product.id } }"
          >
            <div class="card text-center h-100 mx-auto" style="width: 18rem">
              <img :src="product.image" class="card-img-top h-100" alt="..." />
              <div class="card-body text-center">
                <p>{{ product.name }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const products = ref([]);
    const showspiner = ref(true);
    const filtervalue = ref("");

    function getApi() {
      axios
        .get("http://localhost:3000/posts")
        .then(function (response) {
          products.value = response.data;
          showspiner.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getApi();

    function createfilter() {
      axios
        .get(`http://localhost:3000/posts?brand=${filtervalue.value}`)
        .then(function (response) {
          products.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { getApi, products, showspiner, createfilter, filtervalue };
  },
};
</script>

<style>
html {
  direction: rtl;
}

.card {
  cursor: pointer;
}
</style>
