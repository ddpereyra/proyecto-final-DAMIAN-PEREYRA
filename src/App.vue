<template>
  <div id="app" class="divApp">
    <img alt="Vue logo" src="./assets/logoAux.jpeg" v-show="!loginOk">
    <div class="divLogin" v-show="!loginOk">
      <LoginPage :Username="Username" :Password="Password" @LoginOk="LoginOk" />
    </div>
    <div class="divMain" v-show="loginOk">
      <MainPage :listado="listadoItems" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import LoginPage from './views/Login/LoginPage.vue'
import MainPage from './views/MainPage.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    MainPage
  },
  data() {
    const loginOk = false
    const listadoItems = [
      {
        id: 1,
        title: 'Item 1',
        resume: 'Resumen del item 1',
        price: 100,
        detail: 'Todo detallado sobre el item 1'
      },
      {
        id: 2,
        title: 'Item 2',
        resume: 'Resumen del item 2',
        price: 200,
        detail: 'Todo detallado sobre el item 2'
      },
      {
        id: 3,
        title: 'Item 3',
        resume: 'Resumen del item 3',
        price: 300,
        detail: 'Todo detallado sobre el item 3'
      },
      {
        id: 4,
        title: 'Item 4',
        resume: 'Resumen del item 4',
        price: 400,
        detail: 'Todo detallado sobre el item 4'
      },
      {
        id: 5,
        title: 'Item 5',
        resume: 'Resumen del item 5',
        price: 500,
        detail: 'Todo detallado sobre el item 5'
      },
      {
        id: 6,
        title: 'Item 6',
        resume: 'Resumen del item 6',
        price: 600,
        detail: 'Todo detallado sobre el item 6'
      },
      {
        id: 7,
        title: 'Item 7',
        resume: 'Resumen del item 7',
        price: 700,
        detail: 'Todo detallado sobre el item 7'
      },
      {
        id: 8,
        title: 'Item 8',
        resume: 'Resumen del item 8',
        price: 800,
        detail: 'Todo detallado sobre el item 3'
      }
    ]
    return {
      loginOk,
      Username: 'Proyecto',
      Password: 'Final',
      listadoItems
    }
  },
  methods: {
    LoginOk() {
      this.loginOk = true
    }
  }
}
</script>
<style>
#app {
  font-family: Comic Sans MS;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.divLogin {
  width: 50%;
  margin: 0pt 0pt 0pt 25%;
  text-align: -webkit-center;
}
</style>
