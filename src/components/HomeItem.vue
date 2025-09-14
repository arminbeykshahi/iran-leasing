<template>
  <div class="main text-center mt-5 scale-up-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <p>
            ما در تیم ایران لیزینگ افتخار داریم تا برای سهولت شهروندان گرامی
            انواع خودرو های دو شرکت خودروسازی ایرانخودرو و سایپا را با پیش
            پرداخت های دلخواه مشتریان گرامی و همچنین اقساط 12،36،60 ماهه در
            اختیار شهروندان قرار دهیم .
          </p>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <div class="gallery mt-5">
    <div class="container">
      <h5>گالری محصولات</h5>
    </div>
  </div>
  <br />
  <div class="productsgallery mt-5 text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <img class="gallerymahsulat" :src="namayesh" alt="gallery" />
        </div>
      </div>
    </div>
  </div>
  <div class="images mt-4 mx-auto text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <img
            @click="showimage(image.imageLink)"
            class="eachimage ms-3"
            v-for="image in images"
            :key="image.id"
            :src="image.imageLink"
            alt=""
            width="50"
            height="50"
          />
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div class="guide mt-5">
    <div class="container">
      <h5>راهنمای خرید محصول :</h5>
    </div>
  </div>
  <br />
  <div class="guide1 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>مرحله <i class="bi bi-1-circle"></i></h5>
          <br />
          <p>
            ابتدا با توجه به قیمت محصول در فرم مورد نظر میزان پیش پرداخت مورد
            نیاز خود را انتخاب کنید.
          </p>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>
  <div class="guide2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <br />
          <br />
        </div>
        <div class="col-md-6">
          <h5>مرحله <i class="bi bi-2-circle"></i></h5>
          <br />
          <p>
            در این مرحله با توجه به قیمت پس از پیش پرداخت میزان اقساط مورد نظر
            که 12،36،60 ماهه است را انتخاب کنید.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="guide3 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>مرحله <i class="bi bi-3-circle"></i></h5>
          <br />
          <p>
            پس از انجام تمامی مراحل فوق و ثبت در سبد خرید،خرید خود را تکمیل کنید
            و محصول خود را تحویل بگیرید.
          </p>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const images = ref([
      {
        id: 1,
        imageLink:
          "https://blog.tapsi.ir/wp-content/uploads/2021/10/%D8%AC%D8%AF%DB%8C%D8%AF%D8%AA%D8%B1%DB%8C%D9%86-%D9%85%D8%A7%D8%B4%DB%8C%D9%86%E2%80%8C%D9%87%D8%A7%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%AE%D9%88%D8%AF%D8%B1%D9%88-%D9%88-%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7-1024x545.jpg",
      },
      {
        id: 2,
        imageLink:
          "https://media.tazenews.com/old/2023/11/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%AE%D9%88%D8%AF%D8%B1%D9%88-%D9%88-%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7.jpg",
      },
      {
        id: 3,
        imageLink:
          "https://cdn.titrekootah.ir/thumbnail/PHhTxLYyNGFP/thcIWBsskibWtGi05U8Jw_OsoV0LwhTn8CMvp_6uEZREJTOH4loqm0BBRG-3h6-_KIxmZZ5vIxGL_aYSR-VrBCzneiqH10Vc/%D9%82%DB%8C%D9%85%D8%AA-%D8%AE%D9%88%D8%AF%D8%B1%D9%88.jpg",
      },
      {
        id: 4,
        imageLink: "https://mediablog.khodro45.com/image/2025/05/Saipa-3.webp",
      },
    ]);

    const namayesh = ref(
      "https://blog.tapsi.ir/wp-content/uploads/2021/10/%D8%AC%D8%AF%DB%8C%D8%AF%D8%AA%D8%B1%DB%8C%D9%86-%D9%85%D8%A7%D8%B4%DB%8C%D9%86%E2%80%8C%D9%87%D8%A7%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%AE%D9%88%D8%AF%D8%B1%D9%88-%D9%88-%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7-1024x545.jpg"
    );

    function showimage(image) {
      namayesh.value = image;
    }

    return { images, showimage, namayesh };
  },
};
</script>

<style>
html {
  direction: rtl;
}

.scale-up-center {
  -webkit-animation: scale-up-center 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.gallerymahsulat {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.eachimage {
  cursor: pointer;
}
</style>
