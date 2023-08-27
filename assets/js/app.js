function palindrome(word) {
    word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const palindrome = word.split('').reverse().join('');

    if (word === palindrome) {
        return true;
    } else {
        return false;
    };
}


console.log(palindrome("racecar"));
console.log(palindrome("RaceCar"));
console.log(palindrome("race CAR"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("2A3 3a2"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("hello"));  