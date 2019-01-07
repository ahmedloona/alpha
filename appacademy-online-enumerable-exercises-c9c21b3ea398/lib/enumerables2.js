//require 'byebug'

//# EASY

//# Define a method that returns the sum of all the elements in its argument (an
//# array of numbers).
function arraySum(arr) {
  const sum = arr.reduce( (acc, num) => {
    return acc + num;
  }, 0);
  return sum;
}


//# Define a method that returns a boolean indicating whether substring is a
//# substring of each string in the long_strings array.
//# Hint: you may want a sub_tring? helper method
function inAllStrings(longStrings, substring) {
  const result = longStrings.every( string => {
    return string.includes(substring);
  });
  return result;
}


//# Define a method that accepts a string of lower case words (no punctuation) and
//# returns an array of letters that occur more than once, sorted alphabetically.
function nonUniqueLetters(string) {
  const uniq = [];
  const repeats = [];
  string.split("").forEach( ch => {
    if (!uniq.includes(ch)){
      uniq.push(ch);
    } else if (!repeats.includes(ch)) {
      repeats.push(ch);
    }
  });
  const repeatsLessSpaces = repeats.reduce( (acc, ch) => {
    if (!(ch === " ")) {
      acc.push(ch);
    }
    return acc;
  }, []);
  return repeatsLessSpaces.sort();
}


//# Define a method that returns an array of the longest two words (in order) in
//# the method's argument. Ignore punctuation!
function longestTwoWords(string) {
  const words = string.split(" ");
  words.sort( (wordOne, wordTwo) => wordOne.length - wordTwo.length );
  return words.slice(-2);
}



//# MEDIUM

//# Define a method that takes a string of lower-case letters and returns an array
//# of all the letters that do not occur in the method's argument.
function missingLetters(string) {
  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    alphabet.push(char);
  }

  const result = alphabet.reduce( (acc, ch) => {
    if (!string.includes(ch)) {
      acc.push(ch)
    }
    return acc;
  }, []);

  return result;
}



//# Define a method that accepts two years and returns an array of the years
//# within that range (inclusive) that have no repeated digits. Hint: helper
//# method?
function noRepeatYears(first_yr, last_yr) {
  let years = [];
  for (let i = first_yr; i <= last_yr; i++) {
    years.push(i);
  }
  let result = years.filter( (year) => {
    return notRepeatYear(year);
  });
  return result;
}


function notRepeatYear(year) {
  const yearString = String(year);
  const seenDigits = [];
  let result = true;
  yearString.split("").forEach( digit => {
    if (seenDigits.includes(digit)) {
      result = false;
    } else {
      seenDigits.push(digit);
    }
  });
  return result;
}


/*
# HARD

# Define a method that, given an array of songs at the top of the charts,
# returns the songs that only stayed on the chart for a week at a time. Each
# element corresponds to a song at the top of the charts for one particular
# week. Songs CAN reappear on the chart, but if they don't appear in consecutive
# weeks, they're "one-week wonders." Suggested strategy: find the songs that
# appear multiple times in a row and remove them. You may wish to write a helper
# method no_repeats?
*/

function oneWeekWonders(songs) {
  let uniqueSongs = uniq(songs);
  let result = uniqueSongs.filter( song => {
    return noRepeats(song, songs);
  });
  return result;
}

function uniq(songs) {
  let uniq = songs.reduce( (acc, song) => {
    if (!acc.includes(song)) {
      acc.push(song);
    }
    return acc;
  }, []);
  return uniq;
}

function noRepeats(songName, songs) {
  let noRepetition = true;
  songs.forEach( (song, idx) => {
    if ((songName === song) && (songName === songs[idx + 1])) {
      noRepetition = false;
    }
  });
  return noRepetition;
}

/*
# Define a method that, given a string of words, returns the word that has the
# letter "c" closest to the end of it. If there's a tie, return the earlier
# word. Ignore punctuation. If there's no "c", return an empty string. You may
# wish to write the helper methods c_distance and remove_punctuation.
*/
function forCsSake(string) {
  let stringFiltered = removePunctuation(string);
  const words = stringFiltered.split(' ');
  let sortedWords = words.sort( (wordOne, wordTwo) => {
    if (wordOne < wordTwo) {
      return -1;
    } else if (wordOne > wordTwo) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedWords[0];
}

function cDistance(word) {
  const cIndex = word.split('').reverse().indexOf('c');
  return (cIndex !== -1)? cIndex : Infinity;
}

function removePunctuation(string) {
  const punctuation = ',.!?;:\'';
  let result = string.split("").reduce( (acc, ch) => {
    if (!punctuation.includes(ch)) {
      return acc + ch;
    }
    return acc;
  }, '');
  return result;
}


/*
# Define a method that, given an array of numbers, returns a nested array of
# two-element arrays that each contain the start and end indices of whenever a
# number appears multiple times in a row. repeated_number_ranges([1, 1, 2]) =>
# [[0, 1]] repeated_number_ranges([1, 2, 3, 3, 4, 4, 4]) => [[2, 3], [4, 6]]
*/
function repeatedNumberRanges(arr) {
  let range_indices = [];
  let result = arr.reduce( (acc, num, idx) => {
    range_indices.push(idx);
    if (num !== arr[idx + 1]) {
      if (range_indices.length >= 2) {
        acc.push([range_indices[0], range_indices[range_indices.length - 1]]);
      }
      range_indices = [];
    }
    return acc;
  }, []);
  return result;
}


module.exports.arraySum = arraySum;
module.exports.inAllStrings = inAllStrings;
module.exports.nonUniqueLetters = nonUniqueLetters;
module.exports.longestTwoWords = longestTwoWords;
module.exports.missingLetters = missingLetters;
module.exports.noRepeatYears = noRepeatYears;
module.exports.notRepeatYear = notRepeatYear;
module.exports.oneWeekWonders = oneWeekWonders;
module.exports.noRepeats = noRepeats;
module.exports.uniq = uniq;
module.exports.removePunctuation = removePunctuation;
module.exports.cDistance = cDistance;
module.exports.forCsSake = forCsSake;
module.exports.repeatedNumberRanges = repeatedNumberRanges;
