let arr = Array.from(Array(50))

arr = arr.map
    ((i) => Math.round(Math.random() * 50))

console.log(arr)
let minNum = arr[0]

for (let a = 1; a <= arr.length; a++) {
    maxNum = arr[a]

    if (maxNum < minNum) {
        minNum = maxNum
    }
}

console.log(minNum)