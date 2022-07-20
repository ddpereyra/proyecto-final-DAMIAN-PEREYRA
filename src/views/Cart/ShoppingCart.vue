<template>
    <div>
        <div class="modal show" style="display: block;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger">EN DESARROLLO</h5>
                        <button type="button" class="btn-close" aria-label="Close" @click="closeCart"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ShoppingCart',
    props: {
        producto: Object
    },
    methods: {
        closeCart(){
            this.$emit('closeCart')
        }
    }
}
</script>