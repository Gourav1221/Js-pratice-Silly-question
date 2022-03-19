/// faltened the array

const arr = [
    [1,2],
    [3,4],
    [5,6,7,8],
]

let op = [].concat(...arr)
console.log('op:', op)