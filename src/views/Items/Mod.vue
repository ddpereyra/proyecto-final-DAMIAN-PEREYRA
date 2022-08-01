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
                <img class="imgDetail" :src="item.imagen" style="margin:2pt">
                <br>
                Url
                <input class="form-control" type="text" name="urlImg" v-model.lazy="item.imagen">
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
      const item = this.$props.producto
      return {
          item
      }
    },
    methods: {
        closeDetail(){
            this.$emit('closeDetail')
        },
        async guardarItem(item){
            if(confirm(`Desea modificar ${item.title}?`)){
                await productAPI(item, this.$props.isNew)
            }
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
