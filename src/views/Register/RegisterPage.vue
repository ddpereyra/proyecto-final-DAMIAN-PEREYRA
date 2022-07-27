<template>
    <div>
        <form @submit.prevent="registrar">
            <h2>Registrarse</h2>
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" v-model.trim.lazy="nombre">
                        <div v-if="errors.find(e => e.id === 'nombre')" class="form-error validationError"><i class="pi pi-exclamation-circle"></i> {{errors.find(e => e.id === 'nombre').msg}}</div>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido" v-model.trim.lazy="apellido">
                        <div v-if="errors.find(e => e.id === 'apellido')" class="form-error validationError"><i class="pi pi-exclamation-circle"></i> {{errors.find(e => e.id === 'apellido').msg}}</div>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Usuario" v-model.trim.lazy="usuario">
                <div v-if="errors.find(e => e.id === 'usuario')" class="form-error validationError"><i class="pi pi-exclamation-circle"></i> {{errors.find(e => e.id === 'usuario').msg}}</div>
            </div>
            <br>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" v-model.trim.lazy="mail">
                <div v-if="errors.find(e => e.id === 'mail')" class="form-error validationError"><i class="pi pi-exclamation-circle"></i> {{errors.find(e => e.id === 'mail').msg}}</div>
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" v-model.trim.lazy="contraseña">
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirmar Password" v-model.trim.lazy="confirmaContraseña" >
                <div v-if="errors.find(e => e.id === 'contraseña')" class="form-error validationError"><i class="pi pi-exclamation-circle"></i> {{errors.find(e => e.id === 'contraseña').msg}}</div>
            </div>
            <br>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">Registrarse</button>
            </div>
            <br>
            <div class="text-center">
                <p>Ya tiene usuario? <button type="button" class="btn btn-link" @click="login">Login</button></p>
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */ 
  import userAPI from '../../api/users'
  export default {
    name: 'RegisterPage',
    data() {
        const nombre = ''
        const apellido = ''
        const usuario = ''
        const mail = ''
        const contraseña = ''
        const confirmaContraseña = ''
        const errors = []
        return {
        nombre,
        apellido,
        usuario,
        mail,
        contraseña,
        confirmaContraseña,
        errors
        }
    },
    methods: {
        registrar(){
            if(this.registroOk()){
                if(this.guardarUsuarioNuevo()){
                    this.$emit("RegistroTerminado")
                }
            }
        },
        registroOk(){
            this.errors = []
            if(this.nombre === "") {
                this.errors.push({id:"nombre", msg: "Nombre requerido"})
            }
            if(this.apellido === "") {
                this.errors.push({id:"apellido", msg: "Apellido requerido"})
            }
            if(this.usuario === "") {
                this.errors.push({id:"usuario", msg: "Usuario requerido"})
            }else{
                if(this.usuario.indexOf(' ') > -1){
                    this.errors.push({id:"usuario", msg: "El usuario no puede tener espacios"})
                }
            }
            if(this.mail === "") {
                this.errors.push({id:"mail", msg: "Mail requerido"})
            }
            if(this.errors.length === 0){
                return this.verificarContraseña()
            }else{
                return false
            }
        },
        verificarContraseña(){
            if(this.contraseña === "" && this.confirmaContraseña === "") {
                this.errors.push({id:"contraseña", msg: "Debe ingresar contraseña"})
                return false
            }else{
                if(this.contraseña !== this.confirmaContraseña){
                    this.errors.push({id:"contraseña", msg: "Las contraseñas no coinciden"})
                    return false
                }else{
                    return true
                }
            }
        },
        async guardarUsuarioNuevo(){
            if(!await this.usuarioExiste()){
                let users = await userAPI.getUsers()
                const newUserId = users.data.length + 1
                const usuarioNuevo = {
                    id: newUserId,
                    usuario: this.usuario,
                    pass: this.contraseña,
                    nombre: this.nombreCompleto,
                    mail: this.mail,
                    esAdmin : false
                }
                return userAPI.insertUser(usuarioNuevo)
            }else{
                return false
            }
        },
        async usuarioExiste(){
            const usuarioExiste = await userAPI.getUserByUserName(this.user)
            if (usuarioExiste.data.length > 0) {
                this.errors.push({id:"usuario", msg: "El usuario ya existe. Elija otro nombre de usuario"})
                return true
            }else{
                return false
            }
        },
        login() {
            this.nombre = ''
            this.apellido = ''
            this.usuario = ''
            this.mail = ''
            this.contraseña = ''
            this.confirmaContraseña = ''
            this.$emit("Login")
        }
    },
    computed: {
        nombreCompleto() {
            return `${this.nombre} ${this.apellido}`
        }
    }
}
</script>