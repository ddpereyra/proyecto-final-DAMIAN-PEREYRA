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
        title: 'Mix Clasico',
        resume: 'Sin guarnicion',
        price: 750,
        detail: `Cuadradito de milanesa de carne y pollo, bastones de muzzarella, salsa fileto + gaseosa`,
        imagen: 'mixClasico.jpeg'
      },
      {
        id: 2,
        title: 'Sandwich Clasico',
        resume: 'Sin guarnicion',
        price: 700,
        detail: `Un clasico! Sandwich de milanesa de Peceto o Pollo con lechuga y tomate + bebida`,
        imagen: 'milaClasico.webp'
      },
      {
        id: 3,
        title: 'Mila Cheddar',
        resume: 'Sin guarnicion',
        price: 850,
        detail: `2 medallones de Peceto o Pollo cheddar + Bebida`,
        imagen: 'milaCheddar.jpeg'
      },
      {
        id: 4,
        title: 'Mix a Caballo',
        resume: 'Sin guarnicion',
        price: 900,
        detail: `Una combinacion de sabores con nuestros tradicionales cuadritos de Pollo y Ternera + bebida. Decidi si lo queres con CHEDDAR o A CABALLO`,
        imagen: 'mixCaballo.webp'
      },
      {
        id: 5,
        title: 'Mila Napo',
        resume: 'Con guarnicion',
        price: 1000,
        detail: `2 medallones de Peceto o de Pollo napolitanom, viene con papas fritas y bebida`,
        imagen: 'milaNapo.webp'
      },
      {
        id: 6,
        title: 'Mila Clasica',
        resume: 'Con guarnicion',
        price: 800,
        detail: `2 medallones de Peceto o Pollo clasicos, viene con papas fritas y bebida`,
        imagen: 'milaClasica.jpeg'
      },
      {
        id: 7,
        title: 'Pollo NAPO',
        resume: 'Con guarnicion',
        price: 950,
        detail: `Medallones pollo napolitacion con papas fritas. SIN BEBIDA`,
        imagen: 'polloNapo.jpeg'
      },
      {
        id: 8,
        title: 'Wrap de Pollo',
        resume: 'Con guarnicion',
        price: 950,
        detail: `Tortilla mexicana con base de guacamole, mix de hojas verdes, milanesitas de pollo, cebolla caramelizada y tomate confitado. Viene con nachos y bebida`,
        imagen: 'wrapPollo.jpeg'
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
