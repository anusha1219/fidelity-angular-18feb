
function add (n1, n2){
    return n1 + n2;
}

let sum = add('Hello',4);

console.log(sum);

//another way

// let product = function (n1, n2) {
//     return n1*n2;
// }

// fat arrow syntax
let product =  (n1, n2) => n1*n2;
let square = n => n*n;
let sumFunction = (n1, n2) => n1 + n2;

console.log(product(2,3));
console.log(square(9));

//pass funnction as values
let average = (n1, n2, s) => s(n1,n2)/2;

//console.log(average(3,7,sumFunction));
console.log(average(3,7,(n1, n2) => n1 + n2));


