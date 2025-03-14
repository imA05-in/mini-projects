let result = "1+3-2"
let [a,b,c] = result.match(/\d+/g).map(Number)

console.log(a);
