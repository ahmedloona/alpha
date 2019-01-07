#require 'byebug'

# EASY

# Define a method that returns the sum of all the elements in its argument (an
# array of numbers).
def array_sum(arr):
    result = 0
    for num in arr:
        result += num
    return result


# Define a method that returns a boolean indicating whether substring is a
# substring of each string in the long_strings array.
# Hint: you may want a sub_tring? helper method
def in_all_strings(long_strings, substring):
    if not []: return False
    return all(list(map(lambda string: substring in string, long_strings)))


# Define a method that accepts a string of lower case words (no punctuation) and
# returns an array of letters that occur more than once, sorted alphabetically.
def non_unique_letters(string):
    array = list(string)
    unique_characters = list(set(array))
    if " " in unique_characters:
        unique_characters.remove(" ")
    result = [char for char in unique_characters if array.count(char) > 1]
    result.sort()
    return result


# Define a method that returns an array of the longest two words (in order) in
# the method's argument. Ignore punctuation!
def longest_two_words(string):
    punctuation = ",.!?;:"
    characters = list(string)
    cleaned = ""
    for ch in characters:
        if ch not in punctuation:
            cleaned += ch
    cleaned = cleaned.split()
    cleaned.sort(key=len)
    return cleaned[-2:]


# MEDIUM

# Define a method that takes a string of lower-case letters and returns an array
# of all the letters that do not occur in the method's argument.
def missing_letters(string):
    alphabet = [chr(num) for num in range(97, 123)]
    result = []
    for ch in alphabet:
        if ch not in string:
            result.append(ch)
    return result


# Define a method that accepts two years and returns an array of the years
# within that range (inclusive) that have no repeated digits. Hint: helper
# method?
def no_repeat_years(first_yr, last_yr):
    return [year for year in range(first_yr, last_yr + 1) if not_repeat_year(year)]

def not_repeat_year(year):
    year = str(year)
    seen = []
    for digit in year:
        if digit not in seen:
            seen.append(digit)
        else:
            return False
    return True

# HARD

# Define a method that, given an array of songs at the top of the charts,
# returns the songs that only stayed on the chart for a week at a time. Each
# element corresponds to a song at the top of the charts for one particular
# week. Songs CAN reappear on the chart, but if they don't appear in consecutive
# weeks, they're "one-week wonders." Suggested strategy: find the songs that
# appear multiple times in a row and remove them. You may wish to write a helper
# method no_repeats?
def one_week_wonders(songs):
    unique_songs = set(songs)
    return [song for song in unique_songs if no_repeats(song, songs)]

def no_repeats(song_name, songs):
    for idx, song in enumerate(songs):
        if not song == song_name:
            continue
        else:
            if songs[idx:idx+2] == [song_name, song_name]:
                return False
    return True

# Define a method that, given a string of words, returns the word that has the
# letter "c" closest to the end of it. If there's a tie, return the earlier
# word. Ignore punctuation. If there's no "c", return an empty string. You may
# wish to write the helper methods c_distance and remove_punctuation.

def for_cs_sake(string):
    words = remove_punctuation(string).split()
    words.sort(key=c_distance)
    return words[0]

def c_distance(word):
    if 'c' in word:
        return word[::-1].index('c')
    return float('inf')

def remove_punctuation(string):
    punctuation = ',.!?;:\''
    return ''.join([ch for ch in string if not ch in punctuation])

# Define a method that, given an array of numbers, returns a nested array of
# two-element arrays that each contain the start and end indices of whenever a
# number appears multiple times in a row. repeated_number_ranges([1, 1, 2]) =>
# [[0, 1]] repeated_number_ranges([1, 2, 3, 3, 4, 4, 4]) => [[2, 3], [4, 6]]

def repeated_number_ranges(arr):
    ranges = []
    range_indices = []
    for idx, num in enumerate(arr):
        range_indices.append(idx)
        if (idx == len(arr) - 1) or not (num == arr[idx + 1]):
            if len(range_indices) >= 2:
                ranges.append([range_indices[0], range_indices[-1]])
            range_indices = []
    return ranges
