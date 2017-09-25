/**
 * 遍历encode所有值
 */
export default function encode(data) {
    const identify = Object.prototype.toString.call(data)
    let result

    if (identify === '[object Array]') {
        result = []
        Object.keys(data).forEach(key => {
            result.push(encode(data[key]))
        })
    } else if (identify === '[object Object]') {
        result = {}
        Object.keys(data).forEach(key => {
            result[key] = encode(data[key])
        })
    } else {
        if (result === undefined || result === null) {
            result = '' // 无需encode undefined和null
        } else {
            result = encodeURIComponent(data)
        }
    }

    return result
}

let json = {
    name: '12313123&123312',
    obj: {
        c: [{
            a: '12313&cc'
        }]
    },
    address: [{
        a: '123&cc',
        b: 'c&&c'
    }, {
        a: '123&cc',
        b: 'c&&c',
    }]
}

console.log(encode(json))

