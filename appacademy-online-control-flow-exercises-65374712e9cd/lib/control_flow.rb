# EASY

# Return the argument with all its lowercase characters removed.
def destructive_uppercase(str)
  result = ""
  str.each_char {|ch| result.concat(ch) if ch.downcase != ch}
  result
end

# Return the middle character of a string. Return the middle two characters if
# the word is of even length, e.g. middle_substring("middle") => "dd",
# middle_substring("mid") => "i"
def middle_substring(str)
  length = str.length
  middle = str.length / 2
  length.odd? ? str[middle] : str[middle - 1, 2]
end

# Return the number of vowels in a string.
VOWELS = %w(a e i o u)
def num_vowels(str)
  str.each_char.count {|el| VOWELS.include?(el)}
end

# Return the factoral of the argument (num). A number's factorial is the product
# of all whole numbers between 1 and the number itself. Assume the argument will
# be > 0.
def factorial(num)
  num == 0 ? 1 : num * factorial(num - 1)
end


# MEDIUM

# Write your own version of the join method. separator = "" ensures that the
# default seperator is an empty string.
def my_join(arr, separator="")
  result = ""
  arr.each do |el|
    result << el + separator
  end
  return result if separator == ""
  result[0...-1]
end

# Write a method that converts its argument to weirdcase, where every odd
# character is lowercase and every even is uppercase, e.g.
# weirdcase("weirdcase") => "wEiRdCaSe"
def weirdcase(str)
  str.each_char.with_index do |ch, index|
    index.even? ? str[index] = ch.downcase : str[index] = ch.upcase
  end
end

# Reverse all words of five more more letters in a string. Return the resulting
# string, e.g., reverse_five("Looks like my luck has reversed") => "skooL like
# my luck has desrever")
def reverse_five(str)
  arr = str.split()
  arr.each_with_index do |word, index|
    arr[index] = (word.length >= 5)? word.reverse : word
  end.join(" ")
end

# Return an array of integers from 1 to n (inclusive), except for each multiple
# of 3 replace the integer with "fizz", for each multiple of 5 replace the
# integer with "buzz", and for each multiple of both 3 and 5, replace the
# integer with "fizzbuzz".
def fizzbuzz(n)
  result = []
  n.times do |iteration|
    number = iteration + 1
    if number % 3 == 0 && number % 5 == 0
      result << "fizzbuzz"
    elsif number % 5 == 0
      result << "buzz"
    elsif number % 3 == 0
      result << "fizz"
    else
      result << number
    end
  end
  result
end


# HARD

# Write a method that returns a new array containing all the elements of the
# original array in reverse order.
def my_reverse(arr)
  middle_index = arr.length / 2 - 1
  0.upto(middle_index) do |index|
    arr[index], arr[-index - 1] = arr[-index - 1], arr[index]
  end
  arr
end

# Write a method that returns a boolean indicating whether the argument is
# prime.
def prime?(num)
  return false if num == 0 || num == 1
  (2...num).each do |candidate_divisor|
    return false if num % candidate_divisor == 0
  end
  true
end


# Write a method that returns a sorted array of the factors of its argument.
def factors(num)
  result = []
  (1..num).each do |candidate|
     result << candidate if num % candidate == 0
     break if candidate == num / 2
  end
  result.push(num)
end

# Write a method that returns a sorted array of the prime factors of its argument.
def prime_factors(num)
  result = []
  factors(num).each do |factor|
    result << factor if prime?(factor)
  end
  result
end

# Write a method that returns the number of prime factors of its argument.
def num_prime_factors(num)
  prime_factors(num).length
end


# EXPERT

# Return the one integer in an array that is even or odd while the rest are of
# opposite parity, e.g. oddball([1,2,3]) => 2, oddball([2,4,5,6] => 5)
def different(subarray, index)
  subarray = subarray.map{|el| el % 2}
  subarray.count(subarray[index]) == 1
end

def oddball(arr)
  arr.each_with_index do |el, index|
    if index == 0
      break arr[index] if different(arr[0..2], 0)
    elsif index == arr.length - 1
      break arr[index] if different(arr[-3..-1], -1)
    else
      break arr[index] if different(arr[index - 1..index + 1], 1)
    end
  end
end
