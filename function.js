function pow(base, exponent) {
    let pow = 1;
    for (let i = 0; i < exponent; i++) {
         pow *= base;
        }
        return pow;
}
let number = prompt('Enter a Base Number');
let exponent = prompt('Enter an Exponent');
let result = pow(number, exponent);
alert(result);