export const generator = (len) => {
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    let arr = []
    for (let i = 0; i <= len; i++) {
        arr.push({
            'name': makeid(7),
            'id': i,
        })
    }
    return new Promise(resolve => {
        resolve(arr)
    })
}

 