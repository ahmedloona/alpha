//# EASY

//# Define a method that, given a sentence, returns a hash of each of the words as
//# keys with their lengths as values. Assume the argument lacks punctuation.
function wordLengths(str) {
  let result = str.split(' ').reduce( (acc, word) => {
    acc[word] = word.length;
    return acc;
  }, {})
  return result;
}

//# Define a method that, given a hash with integers as values, returns the key
//# with the largest value.
function greatestKeyByVal(hash) {
  let sortedByValue = Object.entries(hash).sort( ([k1, v1], [k2, v2]) => {
    if (v1 < v2) {
      return -1;
    } else if (v1 === v2) {
      return 0;
    } else {
      return 1;
    }
  });
  return sortedByValue.slice(-1)[0][0];
}

/*
# Define a method that accepts two hashes as arguments: an older inventory and a
# newer one. The method should update keys in the older inventory with values
# from the newer one as well as add new key-value pairs to the older inventory.
# The method should return the older inventory as a result. march = {rubies: 10,
# emeralds: 14, diamonds: 2} april = {emeralds: 27, moonstones: 5}
# update_inventory(march, april) => {rubies: 10, emeralds: 27, diamonds: 2,
# moonstones: 5}
*/

function updateInventory(older, newer) {
  Object.entries(newer).forEach( ([key, value]) => {
    newer[key] = value;
  });
  return newer;
}

/*
# Define a method that, given a word, returns a hash with the letters in the
# word as keys and the frequencies of the letters as values.
*/

function letterCounts(word) {
  let counterHash = word.split('').reduce( (acc, ch) => {
    acc[ch] = 0;
    return acc;
  }, {});

  let result = word.split('').reduce( (acc, ch) => {
    acc[ch] += 1;
    return acc;
  }, counterHash);

  return result;
}

//# MEDIUM

//# Define a method that, given an array, returns that array without duplicates.
//# Use a hash! Don't use the uniq method.
function myUniq(arr) {
  const uniques = Object.create(null);
  arr.forEach( element => {
    uniques[element] = true;
  });
  return Object.keys(uniques);
}

//# Define a method that, given an array of numbers, returns a hash with "even"
//# and "odd" as keys and the frequency of each parity as values.
function evensAndOdds(numbers) {
  return numbers.reduce ( (acc, num) => {
    if (num % 2 === 0) {
      acc['even'] += 1;
    } else {
      acc['odd'] += 1;
    }
    return acc;
  }, {'even': 0, 'odd': 0});
}


//# Define a method that, given a string, returns the most common vowel. Do
//# not worry about ordering in the case of a tie. Assume all letters are
//# lower case.
function mostCommonVowel(string) {
  const vowels = 'aeiou';
  let vowelDistribution = string.split('').reduce( (acc, ch) => {
    if (vowels.includes(ch)) {
      if (!(acc.hasOwnProperty(ch))) acc[ch] = 0;
      acc[ch] += 1;
    }
    return acc;
  }, {});

  let sorted = Object.entries(vowelDistribution).sort( ([k1, v1], [k2, v2] ) => {
    if (v1 < v2){
      return 1;
    } else if (v1 == v2) {
      return (k1 > k2)? 1 : 0;
    } else {
      return -1;
    }
  });
  return sorted[0][0];
}

/*
# HARD

# Define a method that, given a hash with keys as student names and values as
# their birthday months (numerically, e.g., 1 corresponds to January), returns
# every combination of students whose birthdays fall in the second half of the
# year (months 7-12). students_with_birthdays = { "Asher" => 6, "Bertie" => 11,
# "Dottie" => 8, "Warren" => 9 }
# fall_and_winter_birthdays(students_with_birthdays) => [ ["Bertie", "Dottie"],
# ["Bertie", "Warren"], ["Dottie", "Warren"] ]
*/

function fallAndWinterBirthdays(students) {
  const names = Object.entries(students);
  const filteredNames = names.reduce((acc, [name, month]) => {
    if (month >= 7) {
      acc.push(name);
    }
    return acc;
  }, []);
  const combinations = [];
  filteredNames.forEach( (name, idx1) => {
    for(let idx2 = idx1 + 1; idx2 < filteredNames.length; idx2++) {
      combination = [filteredNames[idx1], filteredNames[idx2]];
      combinations.push(combination);
    }
  });
  return combinations;
}

/*
# Define a method that, given an array of specimens, returns the biodiversity
# index as defined by the following formula: number_of_species**2 *
# smallest_population_size / largest_population_size biodiversity_index(["cat",
# "cat", "cat"]) => 1 biodiversity_index(["cat", "leopard-spotted ferret",
# "dog"]) => 9

*/
function biodiversityIndex(specimens) {

  const uniqueSpecimens = specimens.reduce( (acc, specimen) => {
    acc[specimen] = 0;
    return acc;
  }, {});

  const specimenDistribution = specimens.forEach( specimen => {
    uniqueSpecimens[specimen] += 1;
  });

  const largestPopulationSize = Math.max(...Object.values(uniqueSpecimens));
  const smallestPopulationSize = Math.min(...Object.values(uniqueSpecimens));
  const numSpecies = Object.keys(uniqueSpecimens).length;

  const index = numSpecies ** 2 * smallestPopulationSize / largestPopulationSize;
  return index;
}


/*
# Define a method that, given the string of a respectable business sign, returns
# a boolean indicating whether pranksters can make a given vandalized string
# using the available letters. Ignore capitalization and punctuation.
# can_tweak_sign("We're having a yellow ferret sale for a good cause over at the
# pet shop!", "Leopard ferrets forever yo") => true
*/

function canTweakSign(normalSign, vandalizedSign) {
  const normalSignDist = characterCount(normalSign);
  const vandalizedSignDist = characterCount(vandalizedSign);

  const result = Object.entries(vandalizedSignDist).every(([k, v]) => {
    return v <= normalSignDist[k];
  });
  return result;
}

function characterCount(str) {
  const punctuation = ',.!?;:\'" "';
  const distribution = str.split('').reduce( (acc, ch) => {
    const c = ch.toLowerCase();
    if (!acc.hasOwnProperty(c) && !punctuation.includes(c)) {
      acc[c] = 1;
    } else if (acc.hasOwnProperty(c)) {
      acc[c] += 1;
    }
    return acc;
  }, {});
  return distribution;
}



module.exports.wordLengths = wordLengths;
module.exports.greatestKeyByVal = greatestKeyByVal;
module.exports.letterCounts = letterCounts;
module.exports.updateInventory = updateInventory;
module.exports.myUniq = myUniq;
module.exports.evensAndOdds = evensAndOdds;
module.exports.mostCommonVowel = mostCommonVowel;
module.exports.fallAndWinterBirthdays = fallAndWinterBirthdays;
module.exports.biodiversityIndex = biodiversityIndex;
module.exports.canTweakSign = canTweakSign;
