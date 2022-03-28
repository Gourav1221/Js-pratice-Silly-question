


let arr = [5,2,6,1]
let op = []
for(let i = 0;i<arr.length;i++){
    let count = 0
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            count++
        }
    }
    op.push(count)
}

console.log(op.join(" "))


let str = "aman"
let k = "a";
let count = 0
for(let i = 0;i<str.length;i++){
    for(let j = i;j<str.length;j++){
        var bag = ""
        for(let l = i;l<=j;l++){
            bag = bag+str[l]
        }
        if(bag[bag.length-1]==k){
            count++
        }
       
    }
}

console.log(count)