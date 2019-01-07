# EASY

# Return the argument with all its lowercase characters removed.
def destructive_uppercase(str):
    result = ""
    for ch in list(str):
        if ch != ch.lower():
            result += ch
    return result


# Return the middle character of a string. Return the middle two characters if
# the word is of even length, e.g. middle_substring("middle") => "dd",
# middle_substring("mid") => "i"
def middle_substring(str):
    length = len(str)
    middle = length // 2
    return str[middle] if (length % 2 != 0) else str[middle - 1: middle + 1]


# Return the number of vowels in a string.

def num_vowels(str):
    count = 0
    vowels = list('aeiou')
    for char in list(str):
        if char.lower() in vowels:
            count += 1
    return count

# Return the factoral of the argument (num). A number's factorial is the product
# of all whole numbers between 1 and the number itself. Assume the argument will
# be > 0.
def factorial(num):
    return 1 if (num == 0) else num * factorial(num - 1)


# MEDIUM

# Write your own version of the join method. separator = "" ensures that the
# default seperator is an empty string.
def my_join(arr, separator= ""):
    result = ""
    for el in arr:
        result += str(el) + separator
    return result[:-1] if (separator != "") else result


# Write a method that converts its argument to weirdcase, where every odd
# character is lowercase and every even is uppercase, e.g.
# weirdcase("weirdcase") => "wEiRdCaSe"
def weirdcase(str):
    result = ""
    for index, char in enumerate(list(str)):
        result += char.lower() if (index % 2 == 0) else char.upper()
    return result

# Reverse all words of five more more letters in a string. Return the resulting
# string, e.g., reverse_five("Looks like my luck has reversed") => "skooL like
# my luck has desrever")
def reverse_five(str):
    array = str.split()
    for index, word in enumerate(array):
        array[index] = word if (len(word) < 5) else word[::-1]
    return ' '.join(array)


# Return an array of integers from 1 to n (inclusive), except for each multiple
# of 3 replace the integer with "fizz", for each multiple of 5 replace the
# integer with "buzz", and for each multiple of both 3 and 5, replace the
# integer with "fizzbuzz".
def fizzbuzz(n):
    result = [];
    for number in list(range(1, n + 1)):
        if (number % 3 == 0 and number % 5 == 0):
            result.append("fizzbuzz")
        elif (number % 3 == 0):
            result.append("fizz")
        elif (number % 5 == 0):
            result.append("buzz")
        else:
            result.append(number)
    return result





# HARD

# Write a method that returns a new array containing all the elements of the
# original array in reverse order.
def my_reverse(arr):
    middle_index = len(arr) // 2
    for index in range(0, middle_index):
        arr[index], arr[-index - 1] = arr[-index - 1], arr[index]
    print (index)
    return arr

# Write a method that returns a boolean indicating whether the argument is
# prime.
def is_prime(num):
    if num == 0 or num == 1:
        return False
    for candidate_divisor in range(2, num):
        if num % candidate_divisor == 0:
            return False
    return True




# Write a method that returns a sorted array of the factors of its argument.
def factors(num):
    result = []
    for candidate in range(1, (num // 2) + 1):
        if num % candidate == 0:
            result.append(candidate)
    if num != 0:
        result.append(num)
    return result



# Write a method that returns a sorted array of the prime factors of its argument.
def prime_factors(num):
    result = []
    for factor in factors(num):
        if is_prime(factor):
            result.append(factor)
    return result

# Write a method that returns the number of prime factors of its argument.
def num_prime_factors(num):
    return len(prime_factors(num))



# EXPERT

# Return the one integer in an array that is even or odd while the rest are of
# opposite parity, e.g. oddball([1,2,3]) => 2, oddball([2,4,5,6] => 5)
def count(array, target):
    count = 0
    for element in array:
        if element == target:
            count += 1
    return count


def different(subarray, index):
    remainder_array = []
    for number in subarray:
        if number % 2 == 0:
            remainder_array.append(0)
        else:
            remainder_array.append(1)
    if count(remainder_array, remainder_array[index]) == 1:
        return True
    return False

def oddball(arr):
    result = None
    for index, num in enumerate(arr):
        if index == 0:
            if different(arr[0:0+3], 0):
                result = arr[index]
        elif index == len(arr) - 1:
            if different(arr[-3:], 2):
                result = arr[index]
        else:
            if different(arr[index - 1:index + 2], 1):
                result = arr[index]
    return result
