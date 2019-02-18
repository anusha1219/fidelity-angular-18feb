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
