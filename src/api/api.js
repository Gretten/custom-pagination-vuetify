import { json } from '@/api/data.js'

export const fetchPartOf = (len) => {
    return new Promise((resolve) => {
        resolve({
            data: json.slice(len, len + 10),
            length: Math.floor((json.length-1) / 10),
        })
    })
}

export const fetchAll = () => {
    return new Promise(resolve => {
        resolve(json)
    })
}

 