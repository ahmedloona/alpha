# EASY

# Define a method that, given a sentence, returns a hash of each of the words as
# keys with their lengths as values. Assume the argument lacks punctuation.
def word_lengths(str)
  str.split.reduce({}) do |acc, word|
    acc[word] = word.length
    acc
  end
end

# Define a method that, given a hash with integers as values, returns the key
# with the largest value.
def greatest_key_by_val(hash)
  hash.sort_by {|key, value| value}.last.first
end

# Define a method that accepts two hashes as arguments: an older inventory and a
# newer one. The method should update keys in the older inventory with values
# from the newer one as well as add new key-value pairs to the older inventory.
# The method should return the older inventory as a result. march = {rubies: 10,
# emeralds: 14, diamonds: 2} april = {emeralds: 27, moonstones: 5}
# update_inventory(march, april) => {rubies: 10, emeralds: 27, diamonds: 2,
# moonstones: 5}
def update_inventory(older, newer)
  newer.each do |key, value|
    older[key] = value
  end
  older
end

# Define a method that, given a word, returns a hash with the letters in the
# word as keys and the frequencies of the letters as values.
def letter_counts(word)
  hash = Hash.new(0)
  word.each_char do |ch|
    hash[ch] += 1
  end
  hash
end

# MEDIUM

# Define a method that, given an array, returns that array without duplicates.
# Use a hash! Don't use the uniq method.
def my_uniq(arr)
  unique_set = arr.reduce({}) do |acc, el|
    acc[el] = true
    acc
  end
  unique_set.keys
end

# Define a method that, given an array of numbers, returns a hash with "even"
# and "odd" as keys and the frequency of each parity as values.
def evens_and_odds(numbers)
  numbers.reduce({even: 0, odd: 0}) do |acc, num|
    num.even? ? acc[:even] += 1 : acc[:odd] += 1
    acc
  end

end

# Define a method that, given a string, returns the most common vowel. Do
# not worry about ordering in the case of a tie. Assume all letters are
# lower case.
def most_common_vowel(string)
  vowels = %w(a e i o u)
  most_common = ['a', 0]
  string.each_char.reduce(Hash.new(0)) do |acc, ch|
    acc[ch] += 1 if vowels.include?(ch)
    if acc[ch] > most_common.last
      most_common = [ch, acc[ch]]
    elsif acc[ch] == most_common.last && ch < most_common.first
      most_common = [ch, acc[ch]]
    end
    acc
  end
  most_common.first
end

# HARD

# Define a method that, given a hash with keys as student names and values as
# their birthday months (numerically, e.g., 1 corresponds to January), returns
# every combination of students whose birthdays fall in the second half of the
# year (months 7-12). students_with_birthdays = { "Asher" => 6, "Bertie" => 11,
# "Dottie" => 8, "Warren" => 9 }
# fall_and_winter_birthdays(students_with_birthdays) => [ ["Bertie", "Dottie"],
# ["Bertie", "Warren"], ["Dottie", "Warren"] ]
def fall_and_winter_birthdays(students)
  filtered_names = students.select { |name, month| month >= 7 }
  filtered_names = filtered_names.keys
  combinations = []
  filtered_names.length.times do |left_idx|
    (left_idx + 1...filtered_names.length).each do |right_idx|
      combinations << [filtered_names[left_idx], filtered_names[right_idx]]
    end
  end
  combinations
end

# Define a method that, given an array of specimens, returns the biodiversity
# index as defined by the following formula: number_of_species**2 *
# smallest_population_size / largest_population_size biodiversity_index(["cat",
# "cat", "cat"]) => 1 biodiversity_index(["cat", "leopard-spotted ferret",
# "dog"]) => 9
def biodiversity_index(specimens)
  distribution = Hash.new(0)
  specimens.each do |specimen|
    distribution[specimen] += 1
  end
  smallest_population_size = distribution.values.min
  largest_population_size = distribution.values.max
  index = distribution.length ** 2 * smallest_population_size / largest_population_size
end

# Define a method that, given the string of a respectable business sign, returns
# a boolean indicating whether pranksters can make a given vandalized string
# using the available letters. Ignore capitalization and punctuation.
# can_tweak_sign("We're having a yellow ferret sale for a good cause over at the
# pet shop!", "Leopard ferrets forever yo") => true
def can_tweak_sign?(normal_sign, vandalized_sign)
  dist_normal_sign = character_count(normal_sign)
  dist_vandalized_sign = character_count(vandalized_sign)
  dist_vandalized_sign.all?{ |ch, freq| freq <= dist_normal_sign[ch] }
end

def character_count(str)
  punctuation = %w(, . ; : ' ! ? ' ')
  distribution = Hash.new(0)
  str.each_char {|ch| distribution[ch.downcase] += 1 if !punctuation.include?(ch)}
  distribution
end
