import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import PressurePage from '../views/PressurePage.vue';
import RegisteredConfirmationPage from '../views/RegisteredConfirmationPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import SMSReceivedPage from '../views/SMSReceivedPage.vue';
import SpillForecastPage from '../views/SpillForecastPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/register'
  },
  // Step 1
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  // Step 1b (no immediate event)
  {
    path: '/registered', // Shown when registration done + no immediate spill event.
    name: 'Registered',
    component: RegisteredConfirmationPage,
  },
  // Step 1c (event happens later)
  {
    path: '/simulate-sms',
    name: '[Messages]',
    component: SMSReceivedPage,
  },
  // Step 2
  {
    path: '/forecast',
    name: 'Your Spill Forecast',
    component: SpillForecastPage,
  },
  // Step 3
  {
    path: '/pressure',
    name: 'Pressure Leaders',
    component: PressurePage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
