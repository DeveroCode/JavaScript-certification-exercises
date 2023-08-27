const object = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

function convertToRoman(number) {
    let result = '';

    for (let roman in object) {
        result += roman.repeat(Math.floor(number / object[roman]));
        number = number % object[roman]
    };

    return result;
}

console.log(convertToRoman(1200));