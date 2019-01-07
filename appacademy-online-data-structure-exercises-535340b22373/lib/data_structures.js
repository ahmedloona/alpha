//# EASY

//# Write a method that returns the range of its argument (an array of integers).
function range(arr) {
  //# your code goes here
  return Math.max(...arr) - Math.min(...arr);
}

/*
# Write a method that returns a boolean indicating whether an array is in sorted
# order. Use the equality operator (==), which returns a boolean indicating
# whether its operands are equal, e.g., 2 == 2 => true, ["cat", "dog"] ==
# ["dog", "cat"] => false
def in_order?(arr)
  # your code goes here
end
*/

//# MEDIUM

//# Write a method that returns the number of vowels in its argument
function numVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowel_count = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (vowels.includes(str.slice(index, index + 1).toLowerCase())) {
      vowel_count += 1;
    }
  }
  return vowel_count;
}

//# Write a method that returns its argument with all its vowels removed.
function devowel(str) {
  let result = '';
  vowelsList = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < str.length; index += 1) {
      char = str.slice(index, index + 1).toLowerCase();
      if (!vowelsList.includes(char)) result += char;
  }
  return result;
}


/*
# HARD

# Write a method that returns the returns an array of the digits of a
# non-negative integer in descending order and as strings, e.g.,
# descending_digits(4291) #=> ["9", "4", "2", "1"]
def descending_digits(int)
  # your code goes here
end
*/
//# Write a method that returns a boolean indicating whether a string has
//# repeating letters. Capital letters count as repeats of lowercase ones, e.g.,
//# repeating_letters?("Aa") => true
function removeDuplicates(array) {
  let result = [];
  let seen = [];
  for (let index = 0; index < array.length; index += 1) {
    let char = array[index].toLowerCase();
    if (!seen.includes(char)) {
      result.push(char);
      seen.push(char);
    }
  }
  return result;
}

function repeatingLetters(str) {
  const array = str.split('');
  let withoutDuplicates = removeDuplicates(array);
  return array.length !== withoutDuplicates.length;
}



//# Write a method that converts an array of ten integers into a phone number in
//# the format "(123) 456-7890".
function toPhoneNumber(arr){
  const first = '(' + arr.slice(0, 3).join('') + ')';
  const middle = ' ' + arr.slice(3, 6).join('') + '-';
  const last = arr.slice(6).join('');
  return first + middle + last;
}


//# Write a method that returns the range of a string of comma-separated integers,
//# e.g., str_range("4,1,8") #=> 7
function strRange(str) {
  array = str.split(',');
  return Number(Math.max(...array)) - Number(Math.min(...array))
}


//#EXPERT

//# Write a method that is functionally equivalent to the rotate(offset) method of
//# arrays. offset=1 ensures that the value of offset is 1 if no argument is
//# provided. HINT: use the take(num) and drop(num) methods. You won't need much
//# code, but the solution is tricky!
function myRotate(arr, offset=1) {
  let length = arr.length;
  offset = (offset >= 0) ? offset % length : Math.abs(offset % length);
  for(let i = 1; i <= offset; i += 1) {
    arr.push(arr.shift())
  }
  return arr;
}


module.exports.range = range;
module.exports.numVowels = numVowels;
module.exports.devowel = devowel;
module.exports.repeatingLetters = repeatingLetters;
module.exports.toPhoneNumber = toPhoneNumber;
module.exports.strRange = strRange;
module.exports.myRotate = myRotate;
