function memoizing(func) {
    let cash = new Map();
    
    return function (argument) {
        let key = argument;
        
    if (cash.has(key)) {
        return cash.get(key);
    }else{
     const result =  func(argument);
     cash.set(key, result);
     return result;
    }
  }
}

function factorial(n) {
    if (n == 1) return 1;
    else return n*factorial(n-1)
}
let memi = memoizing(factorial)

console.log(factorial(5))
console.log(memi(5))
console.log(memi(2))
console.log(memi(1))
console.log(memi(5))
console.log(memi(4))
console.log(memi(5))