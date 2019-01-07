
from collections import defaultdict
# EASY

# Define a method that, given a sentence, returns a hash of each of the words as
# keys with their lengths as values. Assume the argument lacks punctuation.
def word_lengths(str):
    hash = {}
    for word in str.split():
        hash[word] = len(word)
    return hash


# Define a method that, given a hash with integers as values, returns the key
# with the largest value.
def greatest_key_by_val(hash):
    largest = []
    for k, v in hash.items():
        if not largest:
            largest = [k, v]
        elif v >= largest[-1]:
            largest = [k, v]
    return largest[0]



# Define a method that accepts two hashes as arguments: an older inventory and a
# newer one. The method should update keys in the older inventory with values
# from the newer one as well as add new key-value pairs to the older inventory.
# The method should return the older inventory as a result. march = {rubies: 10,
# emeralds: 14, diamonds: 2} april = {emeralds: 27, moonstones: 5}
# update_inventory(march, april) => {rubies: 10, emeralds: 27, diamonds: 2,
# moonstones: 5}
def update_inventory(older, newer):
    for key, value in newer.items():
        older[key] = value
    return older


# Define a method that, given a word, returns a hash with the letters in the
# word as keys and the frequencies of the letters as values.
def letter_counts(word):
    hash = defaultdict(lambda: 0)
    for ch in list(word):
        hash[ch] += 1
    return dict(hash)


# MEDIUM

# Define a method that, given an array, returns that array without duplicates.
# Use a hash! Don't use the uniq method.
def my_uniq(arr):
    elements_hash = {}
    for element in arr:
        elements_hash[element] = True
    return list(elements_hash.keys())


# Define a method that, given an array of numbers, returns a hash with "even"
# and "odd" as keys and the frequency of each parity as values.

def evens_and_odds(numbers):
    hash = {'even': 0, 'odd': 0}
    for num in numbers:
        if num % 2 == 0:
            hash['even'] += 1
        else:
            hash['odd'] += 1
    return hash


# Define a method that, given a string, returns the most common vowel. Do
# not worry about ordering in the case of a tie. Assume all letters are
# lower case.
def most_common_vowel(string):
    vowels = 'aeiou'
    distribution = defaultdict(lambda: 0)
    for ch in string:
        if ch in vowels:
            distribution[ch] += 1

    items = list(distribution.items())
    items.sort(key= lambda k_v_pair: k_v_pair[1])
    return items[-1][0]

# HARD

# Define a method that, given a hash with keys as student names and values as
# their birthday months (numerically, e.g., 1 corresponds to January), returns
# every combination of students whose birthdays fall in the second half of the
# year (months 7-12). students_with_birthdays = { "Asher" => 6, "Bertie" => 11,
# "Dottie" => 8, "Warren" => 9 }
# fall_and_winter_birthdays(students_with_birthdays) => [ ["Bertie", "Dottie"],
# ["Bertie", "Warren"], ["Dottie", "Warren"] ]
def fall_and_winter_birthdays(students):
    filtered = {name: month for name, month in students.items() if month >= 7}
    names = list(filtered.keys())
    combinations = []
    for index1, name in enumerate(names):
        for index2 in range(index1 + 1, len(names)):
            combinations.append([names[index1], names[index2]])
    return combinations


# Define a method that, given an array of specimens, returns the biodiversity
# index as defined by the following formula: number_of_species**2 *
# smallest_population_size / largest_population_size biodiversity_index(["cat",
# "cat", "cat"]) => 1 biodiversity_index(["cat", "leopard-spotted ferret",
# "dog"]) => 9
def biodiversity_index(specimens):
    distribution = defaultdict(lambda: 0)
    for specimen in specimens:
        distribution[specimen] += 1
    smallest_population_size = min(distribution.values())
    largest_population_size = max(distribution.values())
    index = len(distribution.keys()) ** 2 * smallest_population_size // largest_population_size
    return index


# Define a method that, given the string of a respectable business sign, returns
# a boolean indicating whether pranksters can make a given vandalized string
# using the available letters. Ignore capitalization and punctuation.
# can_tweak_sign("We're having a yellow ferret sale for a good cause over at the
# pet shop!", "Leopard ferrets forever yo") => true
def can_tweak_sign(normal_sign, vandalized_sign):
    norm_sign_distribution = character_count(normal_sign)
    vandalized_sign_distribution = character_count(vandalized_sign)
    print(norm_sign_distribution)
    print(vandalized_sign_distribution)
    return all([True if v <= norm_sign_distribution[k] else False for k, v in vandalized_sign_distribution.items()])

def character_count(str):
    punctuation = '!?,.;:\'" "'
    distribution = defaultdict(lambda: 0)
    for ch in str:
        if ch not in punctuation:
            distribution[ch.lower()] += 1
    return distribution
