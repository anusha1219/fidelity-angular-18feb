var fibNumbers = [0, 1, 2, 3, 5, 8];
var friendsOfSam = [
    'David',
    'Peter',
    'Sally'
];
var things = ['Car', 43, true, null];
//Array methods
for (var i = 0; i < fibNumbers.length; i++) {
    console.log(fibNumbers[i] * 2);
}
fibNumbers.forEach(function (e) { return console.log(e * 2); });
var dblFibNumbers = fibNumbers.map(function (n) { return n * 2; });
console.log(dblFibNumbers);
var evenFibNumbers = fibNumbers.filter(function (n) { return n % 2 == 0; });
console.log(evenFibNumbers);
var sum = fibNumbers.reduce(function (res, n) { return res + n; }, 0);
console.log(sum);
var prod = fibNumbers.reduce(function (res, n) { return res * n; }, 1);
var numbers = [32, 1, 44, 77, 2, 3, 7];
var largest = numbers.reduce(function (res, n) { return res > n ? res : n; }, numbers[0]);
console.log(largest);
var sumOfEvenFibNumbers = fibNumbers
    .filter(function (n) { return n % 2 == 0; })
    .reduce(function (res, n) { return res + n; }, 0);
console.log(sumOfEvenFibNumbers);
