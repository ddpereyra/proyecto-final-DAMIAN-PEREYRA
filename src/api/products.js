import axios from "axios"

let productAPI = {
    async getProducts () {
        try {
            return await axios.get(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products`)
        } catch (error) {
            console.log(error)
        }
    },
    async addModProduct (product, isNew) {
        try {
            if(isNew){
                const productos = this.getProducts()
                product.id = productos.length + 1
                await axios.post(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products`, product)
            }else{
                await axios.put(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products/${product.id}`, product)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async delProduct (product) {
        try {
            await axios.delete(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products/${product.id}`)
        } catch (error) {
            console.log(error)
        }
    }
}

export default productAPI