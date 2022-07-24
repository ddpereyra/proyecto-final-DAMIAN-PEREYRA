<template>
    <div>
      <Cabecera
        :usuario="usuario"
        @logout="logout"
      />
      <h1>Listado de Productos</h1>
      <div class="row m-5">
          <div v-for="(item) in listado" :key="item.id" class="col-sm-3">
              <div class="card m-2 border-success">
                  <div class="card-body">
                  <img v-if="item.imagen" class="imgCard" :src="require(`../imgs/Products/${item.imagen}`)">
                      <h5 class="card-title">{{item.title}}</h5>
                      <p class="card-text">{{item.resume}}</p>
                      <h3 class="card-text text-success">$ {{item.price}}</h3>
                      <button v-if="!esAdmin" type="button" class="btn btn-info m-1" @click="showDetail(item)">Ver detalle</button>
                      <button v-if="!esAdmin" type="button" class="btn btn-success m-1" @click="alert()">Comprar/Agregar</button>
                      <button v-if="esAdmin" type="button" class="btn btn-warning m-1" @click="alert()">Modificar</button>
                      <button v-if="esAdmin" type="button" class="btn btn-danger m-1" @click="alert()">Eliminar</button>
                  </div>
              </div>
          </div>
      </div>
      <ItemDetail v-if="seeDetail" :producto="producto" @closeDetail="closeModalDetail" />
      <ShoppingCart v-if="seeCart" @closeCart="closeModalCart" />
    </div>
</template>
<script>
import ItemDetail from './Detail/ItemDetail.vue'
import ShoppingCart from './Cart/ShoppingCart.vue'
import Cabecera from '../components/Cabecera'
/* eslint-disable */ 
export default {
  name: 'MainPage',
  components: {
    Cabecera,
    ItemDetail,
    ShoppingCart
  },
  props: {
    listado: Array,
    esAdmin: Boolean,
    usuario: Object
  },
  data() {
    const seeDetail = false
    const seeCart = false
    const producto = null
    return {
      seeDetail,
      seeCart
    }
  },
  methods: {
    showDetail(item) {
        this.seeDetail = true
        this.producto = item
    },
    closeModalDetail() {
        this.seeDetail = false
        this.producto = null
    },
    ShowCart() {
        this.seeCart = true
    },
    closeModalCart() {
        this.seeCart = false
    },
    logout() {
      this.$emit("logout")
    },
    alert() {
      alert("Entro")
    }
  }
}
</script>
<style>
.imgCard {
    width: 150px;
    height: 150px;
    border-radius:600px;
}
</style>
