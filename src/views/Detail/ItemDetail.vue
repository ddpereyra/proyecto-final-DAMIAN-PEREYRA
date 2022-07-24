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
                <p> {{producto.detail}} </p>
                </div>
                <div class="modal-footer">
                    <button v-if="!esAdmin" type="button" class="btn btn-success m-1" @click="ShowCart">Comprar/Agregar</button>
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
    data() {
        console.log('show', this.$props.show)
        return {
            visible: false
        }
    },
    methods: {
        closeDetail(){
            this.$emit('closeDetail')
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
