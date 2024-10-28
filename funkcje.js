/**
 *
 * @param n - number, indicating witch n number of the Fibonacci sequence will be returned
 * @returns {number} - the nth number
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 6;
console.log(fibonacci(n));

/**
 *
 * @param word - string
 * @returns {boolean} - true if the word is palindrome or false if not.
 */
function palindrome(word) {
    word = word.toLowerCase();
    let palindrome = word.split("").reverse().join("");
    return palindrome === word;

}

let word = "kajak";
console.log(word + ":");
console.log(palindrome(word));
word = "java";
console.log(word + ":");
console.log(palindrome(word));

function getType(x){
    return typeof(x);
}

let x = 6;
console.log(getType(x));

/**
 *
 * @param amount - number
 * @param coins - array of coins
 * @returns {*[]} - all coins combinations
 */
function amountToCoins(amount, coins){
    const res = [];

    function findCombination(amount, combination, i){
        if (i === coins.length - 1){
            combination.push(amount/coins[i]);
            res.push(combination);
            return;
        }
        const coinsCount = Math.floor(amount / coins[i]);
        for (let j = 0; j <= coinsCount; j++) {
            const newCombination = [...combination, j];
            let newAmount = amount - j * coins[i];
            findCombination(newAmount, newCombination, i+1);
        }
    }

    findCombination(amount,[],0);
    return res;
}

let amount = 196;
let tab = [25,10,5,2,1];
console.log(amountToCoins(amount,tab));