/**
 * 封装axios请求
 */
import axios from "axios"

const request =axios.create({
    baseURL: "https://www.fastmock.site/mock/6c2ee05de2ec94ddeee9ec73ccb38a7a/bank"
})

export default request
