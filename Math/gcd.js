// Greatest common divisor
module.exports = function gcd(a, b) {
    if (a > b) {
        const t = b;
        b = a;
        a = t;
    }

    if (b % a == 0) {
        return a;
    }

    let d = 2;

    while (d <= a) {
        if (a % d == 0) {
            return gcd(a / d, b);
        }

        d++;
    }
}