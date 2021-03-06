require 'byebug'

# EASY

# Define a method that returns the sum of all the elements in its argument (an
# array of numbers).
def array_sum(arr)
  arr.reduce(0,:+)
end

# Define a method that returns a boolean indicating whether substring is a
# substring of each string in the long_strings array.
# Hint: you may want a sub_tring? helper method
def in_all_strings?(long_strings, substring)
  return false if long_strings.empty?
  long_strings.all? do |string|
    string.include?(substring)
  end
end

# Define a method that accepts a string of lower case words (no punctuation) and
# returns an array of letters that occur more than once, sorted alphabetically.
def non_unique_letters(string)
  array = string.chars.uniq
  array.delete(" ")
  array.select! {|ch| string.count(ch) > 1}
end

# Define a method that returns an array of the longest two words (in order) in
# the method's argument. Ignore punctuation!
def longest_two_words(string)
  punctuation = ",.!?;:"
  words = string.delete(punctuation).split()
  words.sort_by {|word| word.length}[-2..-1]
end

# MEDIUM

# Define a method that takes a string of lower-case letters and returns an array
# of all the letters that do not occur in the method's argument.
def missing_letters(string)
  alphabet = ('a'..'z')
  alphabet.reduce([]) {|acc, ch| !string.include?(ch) ? acc.push(ch) : acc}
end

# Define a method that accepts two years and returns an array of the years
# within that range (inclusive) that have no repeated digits. Hint: helper
# method?
def no_repeat_years(first_yr, last_yr)
  (first_yr..last_yr).select do |yr|
    not_repeat_year?(yr)
  end
end

def not_repeat_year?(year)
  year.to_s.chars.uniq == year.to_s.chars
end

# HARD

# Define a method that, given an array of songs at the top of the charts,
# returns the songs that only stayed on the chart for a week at a time. Each
# element corresponds to a song at the top of the charts for one particular
# week. Songs CAN reappear on the chart, but if they don't appear in consecutive
# weeks, they're "one-week wonders." Suggested strategy: find the songs that
# appear multiple times in a row and remove them. You may wish to write a helper
# method no_repeats?
def one_week_wonders(songs)
  songs.uniq.select {|song| no_repeats?(song, songs)}
end

def no_repeats?(song_name, songs)
  songs.each_with_index.reduce(true) do |acc, (song, idx)|
    if songs[idx, 2] == [song_name, song_name]
      return false
    else
      true
    end
  end
end

# Define a method that, given a string of words, returns the word that has the
# letter "c" closest to the end of it. If there's a tie, return the earlier
# word. Ignore punctuation. If there's no "c", return an empty string. You may
# wish to write the helper methods c_distance and remove_punctuation.

def for_cs_sake(string)
  string_filtered = remove_punctuation(string);
  string_filtered.split().sort_by { |word| c_distance(word) }.first;
end

def c_distance(word)
  c_index = word.reverse.index('c')
  c_index || 1.0/0.0
end

def remove_punctuation(string)
  punctuation = %w(, . ! ? ; : ');
  string.each_char.reduce("") { |acc, ch| (punctuation.include?(ch)) ? acc : acc + ch }
end

# Define a method that, given an array of numbers, returns a nested array of
# two-element arrays that each contain the start and end indices of whenever a
# number appears multiple times in a row. repeated_number_ranges([1, 1, 2]) =>
# [[0, 1]] repeated_number_ranges([1, 2, 3, 3, 4, 4, 4]) => [[2, 3], [4, 6]]

def repeated_number_ranges(arr)
  indices = []
  arr.each_with_index.reduce([]) do |acc, (num, idx)|
    indices.push(idx)
    if num != arr[idx + 1]
      acc << [indices.first, indices.last] if indices.length >= 2
      indices = []
    end
    acc
  end
end
