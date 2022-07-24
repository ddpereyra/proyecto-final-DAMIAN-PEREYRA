<template>
  <div id="app" class="divApp">
    <img alt="Vue logo" src="./assets/logoAux.jpeg" v-show="!loginOk">
    <div class="divLoginRegister">
      <LoginPage v-show="verLogin"
        :Username="Username" 
        :Password="Password" 
        :UsuariosRegistrados="usuariosRegistrados"
        @LoginOk="LoginOk" 
        @Registrarse="Registrarse"
      />
      <RegisterPage v-show="verRegister"
        :UsuariosRegistrados="usuariosRegistrados"
        @RegistroTerminado="RegistroTerminado"
        @Login="logout"
      />
    </div>
    <div class="divMain" v-if="loginOk">
      <MainPage 
        :listado="listadoItems"
        :esAdmin="esAdmin" 
        :usuario="user"
        @logout="logout"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import LoginPage from './views/Login/LoginPage.vue'
import MainPage from './views/MainPage.vue'
import RegisterPage from './views/Register/RegisterPage'

export default {
  name: 'App',
  components: {
    LoginPage,
    MainPage,
    RegisterPage
  },
  data() {
    const user = null
    const verLogin = true
    const verRegister = false
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
    const usuariosRegistrados = [
      {
        usuario: "Admin",
        pass: "123",
        nombre: "Admin",
        mail: "",
        esAdmin : true
      },
      {
        usuario: "Cliente",
        pass: "cliente1",
        nombre: "Cliente",
        mail: "cliente@gmail.com",
        esAdmin : false
      }
    ]
    const esAdmin = false
    return {
      verLogin,
      verRegister,
      loginOk,
      Username: 'Proyecto',
      Password: 'Final',
      listadoItems,
      usuariosRegistrados,
      esAdmin
    }
  },
  methods: {
    LoginOk(usuarioExiste) {
      this.user = usuarioExiste
      this.esAdmin = usuarioExiste.esAdmin
      this.verLogin = false
      this.loginOk = true
    },
    Registrarse() {
      this.verLogin = false
      this.verRegister = true
    },
    RegistroTerminado() {
      this.verLogin = true
      this.verRegister = false
    },
    logout() {
      this.loginOk = false
      this.RegistroTerminado()
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
  margin: 0px;
}

.divLoginRegister {
  width: 50%;
  margin: 2pt 0pt 0pt 25%;
  text-align: -webkit-center;
}
</style>
