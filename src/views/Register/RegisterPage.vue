<template>
    <div>
        <form @submit.prevent="registrar">
            <h2>Registrarse</h2>
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" v-model.trim.lazy="nombre">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido" v-model.trim.lazy="apellido">
                    </div>
                </div>
            </div>
            <br>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Usuario" v-model.trim.lazy="usuario">
            </div>
            <br>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" v-model.trim.lazy="mail">
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" v-model.trim.lazy="contraseña">
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirmar Password" v-model.trim.lazy="confirmaContraseña" >
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
        <div v-if="errors.length > 0">
        <ul>
            <li v-for="error in errors" :key="error.index" class="listErrors">{{ error }}</li>
        </ul>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
  export default {
    name: 'RegisterPage',
    props: {
        UsuariosRegistrados: Array
    },
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
                this.errors.push("Nombre requerido")
            }
            if(this.apellido === "") {
                this.errors.push("Apellido requerido")
            }
            if(this.usuario === "") {
                this.errors.push("Usuario requerido")
            }else{
                if(this.usuario.indexOf(' ') > -1){
                    this.errors.push("El usuario no puede tener espacios")
                }
            }
            if(this.mail === "") {
                this.errors.push("Mail requerido")
            }
            if(this.errors.length === 0){
                return this.verificarContraseña()
            }else{
                return false
            }
        },
        verificarContraseña(){
            if(this.contraseña === "" && this.confirmaContraseña === "") {
                this.errors.push("Debe ingresar contraseña")
                return false
            }else{
                if(this.contraseña !== this.confirmaContraseña){
                    this.errors.push("Las contraseñas no coinciden")
                    return false
                }else{
                    return true
                }
            }
        },
        guardarUsuarioNuevo(){
            if(!this.usuarioExiste()){
                const usuarioNuevo = {
                    usuario: this.usuario,
                    pass: this.contraseña,
                    nombre: this.nombreCompleto,
                    mail: this.mail,
                    esAdmin : false
                }
                this.$props.UsuariosRegistrados.push(usuarioNuevo)
                return true
            }else{
                return false
            }
        },
        usuarioExiste(){
            const usuarioExiste = this.$props.UsuariosRegistrados.find(u => u.usuario === this.usuario)
            if(usuarioExiste){
                this.errors.push("El usuario ya existe. Elija otro nombre de usuario")
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