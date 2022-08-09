<template>
  <div id="app" class="divApp">
    <img alt="Vue logo" src="./assets/logoAux.jpeg" v-show="!loginOk">
    <div class="divLoginRegister">
      <LoginPage v-show="verLogin"
        @LoginOk="LoginOk" 
        @Registrarse="Registrarse"
      />
      <RegisterPage v-show="verRegister"
        @RegistroTerminado="RegistroTerminado"
        @Login="logout"
      />
    </div>
    <div class="divMain" v-if="loginOk">
      <MainPage 
        :listado="listadoItems"
        :usuario="user"
        @logout="logout"
        @traerProductos="getProducts"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import LoginPage from './views/Login/LoginPage.vue'
import MainPage from './views/MainPage.vue'
import RegisterPage from './views/Register/RegisterPage'
import userAPI from './api/users'
import productAPI from './api/products'


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
    const listadoItems = []
    const usuariosRegistrados = []
    return {
      verLogin,
      verRegister,
      loginOk,
      listadoItems,
      usuariosRegistrados,
      user
    }
  },
  mounted() {
    this.getUsers()
    this.getProducts()
  },
  methods: {
    LoginOk(usuarioExiste) {
      this.user = usuarioExiste
      this.$store.commit('setRol', usuarioExiste.esAdmin)
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
    },
    async getUsers(){
      try {
        let users = await userAPI.getUsers()
        let data = await users.data
        this.usuariosRegistrados = data
      } catch (error) {
        alert(error)
      }
    },
    async getProducts(){
      try {
        let products = await productAPI.getProducts()
        let data = await products.data
        this.listadoItems = data
      } catch (error) {
        alert(error)
      }
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
