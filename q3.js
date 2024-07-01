function primeNumber(a) {
    for (var i = 3; i <= a; i++) {
        if (a == i) {
            return "Yes";
        }
        if (a % i == 0) {
            return "No";
        }
    }
    return "Yes";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//Nanthawat Sirisuksumran 660612149
