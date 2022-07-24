<template>
    <div>
        <div class="modal show" style="display: block;">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="card-text text-success">${{producto.price}}</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeDetail"></button>
                </div>
                <div class="modal-body">
                <img class="imgDetail" :src="require(`../../imgs/Products/${producto.imagen}`)">
                <textarea rows=4 class="form-control" :value="producto.detail" style="margin: 5pt;resize: none;">
                </textarea>
                </div>
                <div class="modal-footer">
                    <button v-if="!esAdmin" type="button" class="btn btn-success m-1" @click="modificarItem(producto)">Guardar</button>
                </div>
            </div>
            </div>
        </div>
        <div class="modal-backdrop show"></div>
    </div>
</template>

<script>
  export default {
    name: 'ItemDetail',
    props: {
        producto: Object
    },
    methods: {
        closeDetail(){
            this.$emit('closeDetail')
        },
        modificarItem(item){
            if(confirm(`Desea modificar ${item.title}?`)){
                alert("modificado")
            }
        }
    }
}
</script>
<style>
.imgDetail {
    width: 300px;
    header: 300px;
}
</style>
