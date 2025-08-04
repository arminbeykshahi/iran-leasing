import { createMemoryHistory, createRouter } from 'vue-router'

import HomeItem from './components/HomeItem.vue'


const routes = [
  { path: '/', component: HomeItem },
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router