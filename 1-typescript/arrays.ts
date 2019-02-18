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