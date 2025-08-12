import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';
import Dashboard from '../pages/Dashboard.vue';
import SalaryCalculator from '../pages/SalaryCalculator.vue'; // Importar o novo componente

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/salary-calculator',
    name: 'SalaryCalculator',
    component: SalaryCalculator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
