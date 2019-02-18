let fibNumbers : number[] = [0,1,2,3,5,8];
let friendsOfSam : string[] = [
    'David',
    'Peter',
    'Sally'
];

let things = ['Car', 43, true, null];

//Array methods

for(let i = 0; i < fibNumbers.length; i++) {
    console.log(fibNumbers[i]*2);
}

fibNumbers.forEach( e => console.log(e*2) );

let dblFibNumbers = fibNumbers.map( n => n*2 );
console.log(dblFibNumbers);

let evenFibNumbers = fibNumbers.filter( n => n%2 == 0 );
console.log(evenFibNumbers);

let sum = fibNumbers.reduce( (res, n) => res + n, 0);
console.log(sum);

let prod = fibNumbers.reduce( (res, n) => res*n, 1);

let numbers = [32,1,44,77,2,3,7];

let largest = numbers.reduce((res, n) => res > n ? res : n, numbers[0] );
console.log(largest);

let sumOfEvenFibNumbers = fibNumbers
    .filter( n => n%2 == 0)
    .reduce( (res, n) => res + n, 0);

console.log(sumOfEvenFibNumbers);

