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

const computePowerIt = (n, p) => {
    let sum = n**p;
    return sum;
}
const computePowerIt2 = (n,p) =>{
    let sum = 1;
    for(let i = 1; i <= p; i++){
        sum *= n;
    }
    return sum;
}
console.log(computePowerIt(2, 3));
console.log(computePowerIt2(2, 3));

const computePowerRec = (n, p) =>{
    return p === 0 ? 1: n * computePowerRec(n, (p - 1));

}
console.log(computePowerRec(2,3));