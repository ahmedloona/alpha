//# EASY

//# Return the argument with all its lowercase characters removed.
function destructiveUppercase(str) {
  let result = "";
  const chars = str.split("");
  chars.forEach( (ch) => {
    if (ch != ch.toLowerCase()) result += ch;
  });
  return result
}



//# Return the middle character of a string. Return the middle two characters if
//# middle_substring("mid") => "i"
function middleSubstring(str) {
  const length = str.length;
  const middle = Math.floor(length / 2);
  return (length % 2 == 0)? str.slice(middle - 1, middle + 1) : str[middle];
}

//# Return the number of vowels in a string.
function numVowels(str) {
  let count = 0;
  const vowels = 'aeiou';
  str.split("").forEach( (ch) => {
    if (vowels.includes(ch.toLowerCase())) count += 1;
  });
  return count;
}



//# Return the factoral of the argument (num). A number's factorial is the product
//# of all whole numbers between 1 and the number itself. Assume the argument will
//# be > 0.
function factorial(num) {
  return (num === 0)? 1 : num * factorial(num - 1);
}




//# MEDIUM

//# Write your own version of the join method. separator = "" ensures that the
//# default seperator is an empty string.
function myJoin(arr, separator = "") {
  let result = "";
  arr.forEach( (el) => {
    result += el + separator;
  });
  return (separator === "")? result : result.slice(0, -1)
}

//# Write a method that converts its argument to weirdcase, where every odd
//# character is lowercase and every even is uppercase, e.g.
//# weirdcase("weirdcase") => "wEiRdCaSe"
function weirdcase(str){
  let result = "";
  str.split("").forEach( (ch, index) => {
    result += (index % 2 === 0)? ch.toLowerCase() : ch.toUpperCase();
  });
  return result;
}



//# Reverse all words of five more more letters in a string. Return the resulting
//# string, e.g., reverse_five("Looks like my luck has reversed") => "skooL like
//# my luck has desrever")
function reverseFive(str) {
  const array = str.split(" ");
  array.forEach( (word, index) => {
    array[index] = (word.length < 5)? word :
                   word.split("").reverse().join("");
  });
  return array.join(" ");
}



//# Return an array of integers from 1 to n (inclusive), except for each multiple
//# of 3 replace the integer with "fizz", for each multiple of 5 replace the
//# integer with "buzz", and for each multiple of both 3 and 5, replace the
//# integer with "fizzbuzz".
function fizzbuzz(n) {
  const result = [];
  for (let counter = 1; counter <= n; counter++) {
    if(counter % 3 === 0 && counter % 5 === 0) {
      result.push('fizzbuzz');
    } else if(counter % 3 === 0) {
      result.push('fizz');
    } else if(counter % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(counter);
    }
  }
  return result;
}

//# HARD

//# Write a method that returns a new array containing all the elements of the
//# original array in reverse order.
function myReverse(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const length = arr.length;
  for (let index = 0; index < middleIndex; index++) {
    temp = arr[index];
    arr[index] = arr[length - 1 - index];
    arr[length - 1 - index] = temp;
  }
  return arr;
}



//# Write a method that returns a boolean indicating whether the argument is
//# prime.
function isPrime(num) {
  if (num == 0 || num == 1) return false;
  for(let candidateDivisor = 2; candidateDivisor < num; candidateDivisor++) {
    if (num % candidateDivisor === 0) return false;
  }
  return true;
}

//# Write a method that returns a sorted array of the factors of its argument.
function factors(num) {
  const result = [];
  for (let candidate = 1; candidate <= num/2; candidate++) {
    if (num % candidate === 0){
      result.push(candidate);
    }
  }
  if (num !== 0) {
    result.push(num);
  }
  return result;
}


//# Write a method that returns a sorted array of the prime factors of its argument.
function primeFactors(num) {
  const result = [];
  factors(num).forEach( (factor) => {
    if (isPrime(factor)) {
      result.push(factor);
    }
  });
  return result;
}

//# Write a method that returns the number of prime factors of its argument.
function numPrimeFactors(num) {
  return primeFactors(num).length;
}


/*

# EXPERT

# Return the one integer in an array that is even or odd while the rest are of
# opposite parity, e.g. oddball([1,2,3]) => 2, oddball([2,4,5,6] => 5)
def oddball(arr)

end*/

module.exports.destructiveUppercase = destructiveUppercase;
module.exports.middleSubstring = middleSubstring;
module.exports.numVowels = numVowels;
module.exports.factorial = factorial;
module.exports.myJoin = myJoin;
module.exports.weirdcase = weirdcase;
module.exports.reverseFive = reverseFive;
module.exports.fizzbuzz = fizzbuzz;
module.exports.myReverse = myReverse;
module.exports.isPrime = isPrime;
module.exports.factors = factors;
module.exports.primeFactors = primeFactors;
module.exports.numPrimeFactors = numPrimeFactors;
