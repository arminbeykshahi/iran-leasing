import { createRouter, createWebHistory } from "vue-router";

import HomeItem from "./components/HomeItem.vue";
import ProductItem from "./components/ProductItem.vue";
import AboutusItem from "./components/AboutusItem.vue";
import SingleproductItem from "./components/SingleproductItem.vue";
import PurchasebasketItem from "./components/PurchasebasketItem.vue";
const routes = [
  { path: "/", component: HomeItem },
  { path: "/products", component: ProductItem },
  { path: "/aboutus", component: AboutusItem },
  {
    path: "/products/:id",
    name: "singleproduct",
    component: SingleproductItem,
  },
  { path: "/purchasebasket", component: PurchasebasketItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
