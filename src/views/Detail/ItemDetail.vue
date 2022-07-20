<template>
    <div>
        <div class="modal show" style="display: block;">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{producto.title}}</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeDetail"></button>
                </div>
                <div class="modal-body">
                <img class="card-img-top" src="../../imgs/box.jpeg" alt="Card image cap">
                <p> {{producto.detail}} </p>
                </div>
                <div class="modal-footer">
                    <h3 class="card-text text-success">Precio unitario: $ {{producto.price}}</h3>
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
