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
console.log(computePowerIt(2, 6));
console.log(computePowerIt2(2, 3));

const computePowerRec = (n, p) =>{
    return p === 0 ? 1: n * computePowerRec(n, (p - 1));

}
console.log(computePowerRec(2,6));
//Not my way but account for all case
const computePerfectSquareRoot = (n) => {
    const sqrt = (n, i) => {
        if (i * i > n) {
            return `${n} isn't a perfect square`;
        }
        if (i * i === n) {
            return i;
        }
        return sqrt(n, i + 1);
    };
    let i = 1;
    return sqrt(n, i);
};

console.log(computePerfectSquareRoot(121));
//My way to do it but don't account for number with no square root ( or square root that aint whole number).
const computeSquareRoot = (n,p) => {
    return p * p === n ? p :  computeSquareRoot(n, (p+1));
}
console.log(computeSquareRoot(121,1));

const isPrimeNumber = (n) => {
    if (n <= 1) {
        return false;
    }

    let i = 2;
    const prime = (n, i) => {
        if (n === i) {
            return true;
        }
        if (n % i === 0) {
            return false;
        }
        return prime(n, i + 1);
    };

    return prime(n, i);
};

console.log(isPrimeNumber(9));

const findSupPrime = (n) => {
    return isPrimeNumber(n) ? n : findSupPrime(n+1);
};

console.log(findSupPrime(7));

