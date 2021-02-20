// const axios = require('axios')
// import { generator } from '@/helpers/helpers.js'
import { json } from '@/api/staticApi.js'

export const fetchPartOf = (len) => {
    return new Promise((resolve) => {
        resolve({
            data: json.slice(len, len + 10),
            length: Math.floor(json.length / 10),
        })
    })
}

export const fetchAll = () => {
    return new Promise(resolve => {
        resolve(json)
    })
}

 