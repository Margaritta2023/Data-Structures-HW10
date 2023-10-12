function removeDublicates(arr) {
    return arr.filter((item, index) => index === arr.indexOf(item) )
}

let arr = [1,2,3,4,2,1,5,3]
console.log(removeDublicates(arr))