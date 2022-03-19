/// faltened the array

const arr = [
    [1,2],
    [3,4],
    [5,6,7,8],
]

let op = [].concat(...arr)
console.log('op:', op)

console.log(arr.flat())


const arr2 = [
    [1,2],
    [3,4],
    [5,6,7,8],
    [8,9,10,11,[12,13,14]]
]

console.log(arr2.flat(2))