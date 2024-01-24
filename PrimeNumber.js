const n = 9;
function isPrime(number){
    if(number % number === 1 && number % 1 === number){
        return true
    }
    return false
}

isPrime(n)  //false
