//# EASY

//# Define a method that returns an array of only the even numbers in its argument
//# (an array of integers).
function getEvens(arr) {
  return arr.filter( num => num % 2 === 0);
}



//# Define a method that returns a new array of all the elements in its argument
//# doubled. This method should *not* modify the original array.
function calculateDoubles(arr) {
  return arr.map( num => num * 2 );
}


//# Define a method that returns its argument with all the argument's elements
//# doubled. This method should modify the original array.
function calculateDoublesMutated(arr) {
  arr.forEach( (num, index) => arr[index] = num * 2 );
  return arr
}


//# Define a method that returns the sum of each element in its argument
//# multiplied by its index. array_sum_with_index([2, 9, 7]) => 23 because (2 * 0) +
//# (9 * 1) + (7 * 2) = 0 + 9 + 14 = 23
function arraySumWithIndex(arr) {
  let num_times_index = arr.map( (num, index) => num * index );
  let sum = 0;
  num_times_index.forEach( num => sum += num );
  return sum;
}


//# MEDIUM

//# Given an array of bids and an actual retail price, return the bid closest to
//# the actual retail price without going over that price. Assume there is always
//# at least one bid below the retail price.
function priceIsRight(bids, actualRetailPrice) {
  let result = bids.reduce( (closestBid, bid) => {
    if (bid > closestBid && bid <= actualRetailPrice){
      closestBid = bid;
    }
    return closestBid;

  }, 0);
  return result;
}




//# Given an array of numbers, return an array of those numbers that have at least
//# n factors (including 1 and the number itself as factors).
//# at_least_n_factors([1, 3, 10, 16], 5) => [16] because 16 has five factors (1,
//# 2, 4, 8, 16) and the others have fewer than five factors. Consider writing a
//# helper method num_factors
function atLeastNFactors(numbers, n){
  let result = numbers.filter(  (number) => {
      let count = 0;
      for(let candidate = 1; candidate <= number; candidate++){
        if (number % candidate === 0) count += 1;
      }
      console.log(count);
      return (count >= n)? true : false;
    });
    return result;
}

//# HARD

//# Define a method that accepts an array of words and returns an array of those
//# words whose vowels appear in order. You may wish to write a helper method:
//# ordered_vowel_word?
function getOrderedVowelWords(words) {

}

function isOrderedVowelWord(word) {
  let unordered = false;
  const vowels = 'aeiou'.split("");
  word.split("").reduce( (biggest_vowel, ch) => {
    if (!vowels.includes(ch.toLowerCase())) return biggest_vowel;
    if (ch.toLowerCase() >= biggest_vowel) {
      return ch.toLowerCase();
    } else {
      unordered = true
      break
    }
  }, 'a');
  return true;
}


/*
# Given an array of numbers, return an array of all the products remaining when
# each element is removed from the array. You may wish to write a helper method:
# array_product.

//# products_except_me([2, 3, 4]) => [12, 8, 6], where: 12 because you take out 2,
# leaving 3 * 4. 8, because you take out 3, leaving 2 * 4. 6, because you take out
# 4, leaving 2 * 3

# products_except_me([1, 2, 3, 5]) => [30, 15, 10, 6], where: 30 because you
# take out 1, leaving 2 * 3 * 5 15, because you take out 2, leaving 1 * 3 * 5
# 10, because you take out 3, leaving 1 * 2 * 5 6, because you take out 5,
# leaving 1 * 2 * 3
*/
function productsExceptMe(numbers) {
  const product = arrayProduct(numbers);
  let result = [];
  numbers.forEach( (num, idx) => {
    if (num !== 0){
      result.push(product / num)
    } else {
      const subarray = numbers.slice(0, idx).concat(numbers.slice(idx+1));
      console.log(subarray);
      result.push( arrayProduct(subarray));
    }
  });
  return result;

}

function arrayProduct(array) {
  const result = array.reduce( (product, current_element) => {
    return product * current_element
  });
  return result;
}

module.exports.getEvens = getEvens;
module.exports.calculateDoubles = calculateDoubles;
module.exports.calculateDoublesMutated = calculateDoublesMutated;
module.exports.arraySumWithIndex = arraySumWithIndex;
module.exports.priceIsRight = priceIsRight;
module.exports.atLeastNFactors = atLeastNFactors;
module.exports.getOrderedVowelWords = getOrderedVowelWords;
module.exports.isOrderedVowelWord = isOrderedVowelWord;
module.exports.productsExceptMe = productsExceptMe;
module.exports.arrayProduct = arrayProduct;
