<template>
    <div>
        En Desarrollo

        <button @click="closeCart">Volver</button>
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