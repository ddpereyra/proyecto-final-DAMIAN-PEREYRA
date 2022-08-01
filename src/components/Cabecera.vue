<template>
  <div class="cabecera">
    <div class="cab">
        <div class="cabeceraPrincipal">
          Bienvenido {{usuario.nombre}}
        </div>
        <div class="Carrito">
          <img v-if="!esAdmin" src="../imgs/cart.png" width="40" style="cursor:pointer;" @click="ShowCart" />
        </div>
        <div class="Perfil">
          <img src="../imgs/out.png" width="35" style="cursor:pointer;" @click="Logout" />
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
export default {
  name: 'CabeceraPage',
  props: {
      usuario: Object,
      esAdmin: Boolean
  },
  methods: {
    ShowCart(){
      console.log("showCart")
      this.$emit("showCart")
    },
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
