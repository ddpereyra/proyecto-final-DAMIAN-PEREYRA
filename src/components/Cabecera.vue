<template>
  <div class="cabecera">
    <div class="cab">
        <div class="cabeceraPrincipal">
          Bienvenido {{usuario.nombre}}
        </div>
        <div class="Carrito">
          Carrito
        </div>
        <div class="Perfil">
          <button type="button" class="btn btn-link" @click="Logout" >Logout</button>
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
export default {
  name: 'CabeceraPage',
  props: {
      usuario: Object
  },
  methods: {
    Logout(){
      if(confirm("Desea salir?")){
        this.$emit("logout")
      }
    }
  }
}
</script>
<style>
.cabecera {
  height: 50px;
  background-color: aliceblue;
}
.cab {
    display: flex;
    width: 100%;
    height: 100%;
}
.cabeceraPrincipal {
    width: 70%;
    margin: auto;
    text-align: left;
    margin-left: 10pt;
}
.Carrito {
    width: 15%;
    margin: auto;
}
.Perfil {
    width: 15%;
    margin: auto;
}
</style>
