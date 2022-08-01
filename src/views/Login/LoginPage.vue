<template>
  <div>
    <form @submit.prevent="login">
      <div class="form-outline mb-4">
        <label class="form-label">Usuario</label>
        <input type="text" class="form-control" placeholder="usuario" v-model.trim="user" />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" >Constraseña</label>
        <input type="password" class="form-control" placeholder="contraseña" v-model.trim="pass" />
      </div>
      <div class="row">
        <input type="submit" class="btn btn-success btn-block mb-4" value="Login" />
      </div>
      <div class="text-center">
        <p>No tiene usuario? <button type="button" class="btn btn-link" @click="registrarse">Registrarse</button></p>
      </div>
    </form>
    <div v-if="errors.length > 0">
      <ul>
        <li v-for="error in errors" :key="error.index" class="listErrors">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
import userAPI from '../../api/users'

export default {
  name: 'LoginPage',
  props: {
    UsuariosRegistrados: Array
  },
  data() {
    const user = ''
    const pass = ''
    const errors = []
    const usuarioLogged = Object
    return {
      user,
      pass,
      errors
    }
  },
  methods: {
    async login() {
      this.errors = []
      if(this.verificarLogin()){
        if(await this.ingresoOk()) {
          this.user = ''
          this.pass = ''
          this.$emit("LoginOk", this.usuarioLogged)
        }
      }
    },
    verificarLogin() {
      if(this.user === "") {
        this.errors.push("Usuario requerido")
        return false
      }
      if(this.pass === "") {
        this.errors.push("Contraseña requerida")
        return false
      }
      return true
    },
    async ingresoOk() {
      try {
        const dataUser = await userAPI.getUserByUserName(this.user)
        if (dataUser.data.length > 0) {
          const usuarioExiste = dataUser.data[0]
          if(usuarioExiste.pass === this.pass) {
            this.usuarioLogged = usuarioExiste
            return true
          }else {
            this.errors.push("Contraseña incorrecta")
            return false
          }
        } else {
          this.errors.push("Usuario no existe")
          return false
        }
      } catch (error) {
        alert(error)
      }
      
    },
    registrarse() {
      this.user = ''
      this.pass = ''
      this.$emit("Registrarse")
    }
  }
}
</script>
<style scope>

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.form-control:focus {
  border-color: #28a745 !important;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;
}

.validationError {
  color: red;
}

.listErrors {
  list-style-type: none;
  color: red;
}
</style>