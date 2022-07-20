<template>
<div>
  <div class="form-group col-md-6">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Usuario" v-model="user" class="form-control" />
  </div>
  <div class="form-group col-md-6">
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Password" v-model="pass" class="form-control" />
  </div>
  <br />
  <div class="form-group col-md-6">
    <button type="button" class="btn btn-success" @click="verificarLogin">Login</button>
    <div v-if="errorLogin" class="validationError"><i class="pi pi-exclamation-circle"></i> User o Pass incorrectas</div>
    <div v-if="errorInputs" class="validationError"><i class="pi pi-exclamation-circle"></i> Debe completar ambos campos</div>
  </div>
</div>
</template>
<script>
/* eslint-disable */ 
export default {
  name: 'LoginPage',
  props: {
    Username: String,
    Password: String
  },
  data() {
    const user = ''
    const pass = ''
    const errorLogin = false
    const errorInputs = false
    return {
      user,
      pass,
      errorLogin,
      errorInputs
    }
  },
  methods: {
    verificarLogin() {
      if(this.user !== '' && this.pass !== '') {
        this.errorInputs = false
        if(this.$props.Username === this.user && this.$props.Password === this.pass){
          this.errorLogin = false
          this.$emit('LoginOk')
        }else{
          this.errorLogin = true
        }
      }else{
        this.errorInputs = true
        this.errorLogin = false
      }
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
</style>