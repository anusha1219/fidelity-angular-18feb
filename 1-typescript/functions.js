function add(n1, n2) {
    return n1 + n2;
}
var sum = add('Hello', 4);
console.log(sum);
//another way
// let product = function (n1, n2) {
//     return n1*n2;
// }
// fat arrow syntax
var product = function (n1, n2) { return n1 * n2; };
var square = function (n) { return n * n; };
var sumFunction = function (n1, n2) { return n1 + n2; };
console.log(product(2, 3));
console.log(square(9));
//pass funnction as values
var average = function (n1, n2, s) { return s(n1, n2) / 2; };
//console.log(average(3,7,sumFunction));
console.log(average(3, 7, function (n1, n2) { return n1 + n2; }));
