import axios from "axios"

let productAPI = {
    async getProducts () {
        try {
            return await axios.get(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products`)
        } catch (error) {
            console.log(error)
        }
    },
    async addProduct (product) {
        try {
            await axios.post(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products`, product)
        } catch (error) {
            console.log(error)
        }
    },
    async modProduct (product) {
        try {
            //me esta tirando un 404 solo en el put y el item existe. ver. delete funciona
            await axios.put(`https://62df41869c47ff309e834551.mockapi.io/api/v1/products/${product.id}`, product)
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