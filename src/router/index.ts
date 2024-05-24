import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrivateLayout from '../components/layout/privateLayout.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DepartmentsView from '../views/DepartmentsView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import LeaveView from '../views/LeaveView.vue'
import SettingView from '../views/SettingView.vue'
import AddLeaveView from '../views/AddLeaveView.vue'
import AddEmployeeView from '../views/AddEmployeeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: PrivateLayout, 
    children: [
      {
        name: 'dashboard-child',
        path: '',
        component: HomeView,
      }
    ]
  },
  {
    path: '/departments',
    name: 'departments',
    component: PrivateLayout, 
    children: [
      {
        name: 'departments-child',
        path: '',
        component: DepartmentsView,
      }
    ]
  },
  {
    path: '/employee',
    name: 'employee',
    component: PrivateLayout, 
    children: [
      {
        name: 'employee-child',
        path: '',
        component: EmployeeView,
      }
    ]
  },
  {
    path: '/add-employee',
    name: 'add-employee',
    component: PrivateLayout, 
    children: [
      {
        name: 'add-employee',
        path: '',
        component: AddEmployeeView,
      }
    ]
  },
  {
    path: '/leave',
    name: 'leave',
    component: PrivateLayout, 
    children: [
      {
        name: 'leave-child',
        path: '',
        component: LeaveView,
      }
    ]
  },
  {
    path: '/add-leave',
    name: 'add-leave',
    component: PrivateLayout, 
    children: [
      {
        name: 'add-leave',
        path: '',
        component: AddLeaveView,
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: PrivateLayout, 
    children: [
      {
        name: 'setting-child',
        path: '',
        component: SettingView,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
