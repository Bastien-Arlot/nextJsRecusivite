console.log("hello");

const computeFactorialIt= (n) => {
    let sum = 1;
   for(let i = 1; i <= n; i++){
       sum *= i;
   }
   return sum
}
console.log(computeFactorialIt(5));


const computeFactorialRec = (n) => {
    return n === 0 ? 1 : n * computeFactorialRec(n - 1);
}

console.log(computeFactorialRec(5));