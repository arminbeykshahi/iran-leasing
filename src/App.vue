<template>
  <div class="header d-flex justify-content-between align-items-center">
    <i class="bi bi-list ms-5" @click="showsidebar"></i>
    <div class="links ms-5">
      <ul class="d-flex">
        <li><RouterLink to="/">صفحه اصلی</RouterLink></li>
        <li class="ms-3"><RouterLink to="/products">محصولات</RouterLink></li>
        <li class="ms-3"><RouterLink to="/aboutus">درباره ما</RouterLink></li>
      </ul>
    </div>

    <RouterLink to="/purchasebasket">
      <div class="purchasebasket me-5">
        <i class="bi bi-cart">
          <span class="tedad text-center"
            ><p>{{ store.mahsul.length }}</p></span
          >
        </i>
      </div>
    </RouterLink>
  </div>
  <div class="sidebar scale-up-hor-right" v-if="show">
    <i class="bi bi-x-lg ms-2 mt-2 fs-3" @click="closesidebar"></i>

    <ul class="mx-auto">
      <li><RouterLink to="/">صفحه اصلی</RouterLink></li>
      <li class="ms-3"><RouterLink to="/products">محصولات</RouterLink></li>
      <li class="ms-3"><RouterLink to="/aboutus">درباره ما</RouterLink></li>
    </ul>

    <div class="sociallogo text-center mt-5 fs-5">
      <i class="bi bi-twitter-x me-1"></i>
      <i class="bi bi-instagram me-1"></i>
      <i class="bi bi-facebook me-1"></i>
      <i class="bi bi-whatsapp me-1"></i>
    </div>
  </div>
  <br />
  <br />
  <RouterView />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <div class="footer mt-5">
    <div class="footer-items">
      <div class="container">
        <div class="row g-5">
          <div class="col-md-4">
            <h5 class="text-center">درباره شرکت</h5>
            <hr />
            <p class="text-center">
              در این سامانه می توانید با پیش پرداخت دلخواه و همچنین اقساط مورد
              نظر خودرو خود را خریداری کنید و در سریع ترین زمان آن را از
              نمایندگی تحویل بگیرید
            </p>
          </div>
          <div class="col-md-4">
            <h5 class="text-center">راه های ارتباطی</h5>
            <hr />
            <p class="text-center">
              <span>تلفن : 09121234567 </span>
              <br />
              <span>آدرس : تهران - شهرک غرب</span>
              <br />
              <i class="bi bi-twitter-x me-1 fs-5"></i>
              <i class="bi bi-instagram me-1 fs-5"></i>
              <i class="bi bi-facebook me-1 fs-5"></i>
              <i class="bi bi-whatsapp me-1 fs-5"></i>
            </p>
          </div>
          <div class="col-md-4">
            <h5 class="text-center">نماد های سایت</h5>
            <hr />
            <p class="text-center">
              <img class="enamad" src="./assets/enamad.png" alt="enamad" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <i class="bi bi-caret-up fs-1" @click="scrolltotop"></i>
</template>

<script>
import { ref } from "vue";
import { usePurchaseStore } from "./store/purchase";
export default {
  setup() {
    const show = ref(false);
    const store = usePurchaseStore();

    function showsidebar() {
      show.value = true;
    }

    function closesidebar() {
      show.value = false;
    }

    function scrolltotop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return { show, showsidebar, closesidebar, scrolltotop, store };
  },
};
</script>

<style>
html {
  direction: rtl;
}

.header {
  width: 100%;
  height: 55px;
  background-color: #f8f9fa;
  align-items: center;
}

.links ul {
  list-style-type: none;
}

.links ul li a {
  text-decoration: none;
  color: black !important;
}

.router-link-active {
  border-bottom: 2px solid gray;
}

.bi-cart {
  position: relative;
  font-size: 30px;
  cursor: pointer;
  color: gray !important;
}

.tedad {
  position: absolute;
  top: 0;
  right: -5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #e40810;
}

.tedad p {
  font-size: 14px;
  color: white;
}

.bi-list {
  font-size: 30px;
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .bi-list {
    font-size: 30px;
    display: block;
    cursor: pointer;
  }

  .links {
    display: none;
  }

  .router-link-active {
    border-bottom: none;
  }
}

.sidebar {
  width: 25%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #f8f9fa;
  z-index: 1;
}

.bi-x-lg {
  color: #e40810;
  cursor: pointer;
}

.sidebar ul {
  list-style-type: none;
  margin-top: 20px;
}

.sidebar ul li {
  margin-bottom: 30px;
  display: block;
}

.sidebar ul li a {
  text-decoration: none;
  color: black !important;
  display: block;
}

.scale-up-hor-right {
  -webkit-animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0.4);
    transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
}
@keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0.4);
    transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
}

.footer {
  background-color: #f8f9fa;
  width: 100%;
  height: 50%;
}

.footer-items {
  margin-top: 2rem;
}

.enamad {
  width: 130px;
  height: 130px;
}

.bi-caret-up {
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
}
</style>
