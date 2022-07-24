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
                  <img class="card-img-top" src="../imgs/box.jpeg" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">{{item.title}}</h5>
                      <p class="card-text">{{item.resume}}</p>
                      <h3 class="card-text text-success">$ {{item.price}}</h3>
                      <button type="button" class="btn btn-success m-1" @click="showDetail(item)">Ver detalle</button>
                      <button type="button" class="btn btn-danger m-1" @click="ShowCart">Comprar/Agregar</button>
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
    }
  }
}
</script>
