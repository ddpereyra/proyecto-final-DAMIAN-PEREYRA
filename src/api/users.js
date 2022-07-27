import axios from "axios"

let userAPI = {
    async getUsers () {
        try {
            return await axios.get(`https://62df41869c47ff309e834551.mockapi.io/api/v1/users`)
        } catch (error) {
            console.log(error)
        }
    },
    async getUserByUserName (userName) {
        try {
            return await axios.get(`https://62df41869c47ff309e834551.mockapi.io/api/v1/users?usuario=${userName}`)
        } catch (error) {
            console.log(error)
        }
    },
    async insertUser (user) {
        try {
            console.log(user)
            await axios.post(`https://62df41869c47ff309e834551.mockapi.io/api/v1/users`, user)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default userAPI