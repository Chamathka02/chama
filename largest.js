let n = 145683;
console.log(n%10);
console.log(Math.floor(n/10)); //floor- only int numbers,no double numbers


let max=0;
while(n>0){
    let rem = n%10;
    if(rem>=max){
        max=rem;
    }
    n=Math.floor(n/10)
}

console.log(max);