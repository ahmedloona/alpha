import functools

# EASY

# Define a method that returns an array of only the even numbers in its argument
# (an array of integers).
def get_evens_list_comp(arr):
    return [num for num in arr if num % 2 == 0]

def get_evens_filter(arr):
    return list(filter(lambda el: el % 2 == 0, arr));

# Define a method that returns a new array of all the elements in its argument
# doubled. This method should *not* modify the original array.
def calculate_doubles(arr):
    return [num *  2 for num in arr]
# Define a method that returns its argument with all the argument's elements
# doubled. This method should modify the original array.
def calculate_doubles_mutate(arr):
    for index, num in enumerate(arr):
        arr[index] = num * 2
    return arr

# Define a method that returns the sum of each element in its argument
# multiplied by its index. array_sum_with_index([2, 9, 7]) => 23 because (2 * 0) +
# (9 * 1) + (7 * 2) = 0 + 9 + 14 = 23
def array_sum_with_index(arr):
    num_times_index = [num * index for index, num in enumerate(arr)]
    #print (num_times_index)
    sum = 0
    for num in num_times_index:
        sum += num
    return sum

# MEDIUM

# Given an array of bids and an actual retail price, return the bid closest to
# the actual retail price without going over that price. Assume there is always
# at least one bid below the retail price.


def price_is_right(bids, actual_retail_price):
    closest_bid = 0
    for bid in bids:
        if bid > closest_bid and bid <= actual_retail_price:
            closest_bid = bid
    return closest_bid




# Given an array of numbers, return an array of those numbers that have at least
# n factors (including 1 and the number itself as factors).
# at_least_n_factors([1, 3, 10, 16], 5) => [16] because 16 has five factors (1,
# 2, 4, 8, 16) and the others have fewer than five factors. Consider writing a
# helper method num_factors
def at_least_n_factors(numbers, n):
    enough_factors = lambda number: len([num for num in range(1, number + 1) if number % num == 0]) >= n
    result = list(filter(enough_factors, numbers))
    return result


# HARD

# Define a method that accepts an array of words and returns an array of those
# words whose vowels appear in order. You may wish to write a helper method:
# ordered_vowel_word?
def ordered_vowel_words(words):
    return [word for word in words if is_ordered_vowel_word(word)]


def is_ordered_vowel_word(word):
    vowels = ['a', 'e', 'i', 'o', 'u']
    largest_vowel = 'a'
    for ch in list(word):
        if not ch.lower() in vowels:
            continue
        elif ch.lower() >= largest_vowel:
             largest_vowel = ch.lower()
        else:
            return False
    return True


# Given an array of numbers, return an array of all the products remaining when
# each element is removed from the array. You may wish to write a helper method:
# array_product.

# products_except_me([2, 3, 4]) => [12, 8, 6], where: 12 because you take out 2,
# leaving 3 * 4. 8, because you take out 3, leaving 2 * 4. 6, because you take out
# 4, leaving 2 * 3

# products_except_me([1, 2, 3, 5]) => [30, 15, 10, 6], where: 30 because you
# take out 1, leaving 2 * 3 * 5 15, because you take out 2, leaving 1 * 3 * 5
# 10, because you take out 3, leaving 1 * 2 * 5 6, because you take out 5,
# leaving 1 * 2 * 3
def products_except_me(numbers):
    product = array_product(numbers)
    result = []
    for idx, num in enumerate(numbers):
        if num != 0:
            result.append(product // num)
        else:
            subarray = numbers[0:idx] + numbers[idx+1:-1]
            result.append(array_product(subarray))
    return result


def array_product(array):
    result = 1
    for num in array:
        result *= num
    return result
