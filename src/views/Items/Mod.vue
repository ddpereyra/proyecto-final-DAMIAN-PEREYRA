<template>
    <div>
        <div class="modal show" style="display: block;">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Precio: 
                    <input class="form-control" type="text" name="price" v-model.lazy="item.price">
                    <button type="button" class="btn-close" aria-label="Close" @click="closeDetail"></button>
                </div>
                <div class="modal-body">
                <img class="imgDetail" :src="item.imagen" style="margin:2pt" v-if="!isNew">
                <br>
                Url Imagen
                <input class="form-control" type="text" name="urlImg" v-model.lazy="item.imagen">
                Titulo
                <input type="text" class="form-control" name="title" id="title" v-model.lazy="item.title">
                Resumen
                <input type="text" class="form-control" name="resume" id="resume" v-model.lazy="item.resume">
                Detalle
                <textarea rows=4 class="form-control" v-model.lazy="item.detail" style="margin: 5pt;resize: none;">
                </textarea>
                </div>
                <div class="modal-footer">
                    <button v-if="!esAdmin" type="button" class="btn btn-success m-1" @click="guardarItem(item)">Guardar</button>
                </div>
            </div>
            </div>
        </div>
        <div class="modal-backdrop show"></div>
    </div>
</template>

<script>
  import productAPI from '@/api/products'
  export default {
    name: 'ItemDetail',
    props: {
        producto: Object,
        isNew: Boolean
    },
    data() {
      let item = this.$props.producto
      let itemNuevo = this.$props.isNew
      const newItem = {
        id: 0,
        price: 0,
        imagen: '',
        title: '',
        resume: '',
        detail: ''
      }
      if(this.$props.isNew){
        item = newItem
      }
      return {
          item,
          itemNuevo
      }
    },
    methods: {
        closeDetail(){
            this.$emit('closeDetail')
        },
        async guardarItem(item){
            if(confirm(`Desea guardar ${item.title}?`)){
                await productAPI.addModProduct(item, this.itemNuevo)
            }
            this.$emit('closeDetail')
        }
    }
}
</script>
<style>
.imgDetail {
    width: 300px;
    height: 300px;
}
</style>
