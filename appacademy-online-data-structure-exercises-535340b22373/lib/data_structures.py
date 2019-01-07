# EASY

# Write a method that returns the range of its argument (an array of integers).

def range(arr):
    return max(arr) - min(arr)


# Write a method that returns a boolean indicating whether an array is in sorted
# order. Use the equality operator (==), which returns a boolean indicating
# whether its operands are equal, e.g., 2 == 2 => true, ["cat", "dog"] ==
# ["dog", "cat"] => false
def in_order(arr):
    # your code goes here
    return arr == sorted(arr)



# MEDIUM

# Write a method that returns the number of vowels in its argument
def num_vowels(str):
    # your code goes here
    vowels_list = ['a', 'e', 'i', 'o', 'u']
    vowel_count = 0
    for ch in list(str):
        if (ch.lower() in vowels_list):
            vowel_count += 1
    return vowel_count



# Write a method that returns its argument with all its vowels removed.
def devowel(str):
    result = ''
    vowels_list = ['a', 'e', 'i', 'o', 'u']
    for ch in list(str):
        if ch not in vowels_list:
            result += ch
    return result


# HARD

# Write a method that returns the returns an array of the digits of a
# non-negative integer in descending order and as strings, e.g.,
# descending_digits(4291) #=> ["9", "4", "2", "1"]
def descending_digits(int):
    string = str(int)
    array = list(string)
    array.sort()
    array.reverse()
    return array


# Write a method that returns a boolean indicating whether a string has
# repeating letters. Capital letters count as repeats of lowercase ones, e.g.,
# repeating_letters?("Aa") => true
def repeating_letters(str):
    return len(set(list(str.lower()))) != len(list(str.lower()))


# Write a method that converts an array of ten integers into a phone number in
# the format "(123) 456-7890".
def to_phone_number(arr):
    start = '(' + ''.join([str(x) for x in arr[0:0+3]]) + ')'
    middle = ' ' +''.join([str(x) for x in arr[3:3+3]]) + '-'
    end = ''.join([str(x) for x in arr[6:]])
    return start + middle + end


# Write a method that returns the range of a string of comma-separated integers,
# e.g., str_range("4,1,8") #=> 7
def str_range(str):
    return int(max(str)) - int(min(str))


#EXPERT

# Write a method that is functionally equivalent to the rotate(offset) method of
# arrays. offset=1 ensures that the value of offset is 1 if no argument is
# provided. HINT: use the take(num) and drop(num) methods. You won't need much
# code, but the solution is tricky!
def my_rotate(arr, offset=1):
    length = len(arr)
    if (offset >= 0):
        offset = offset % length
    else:
        offset = (length + offset) % length
    for i in range(offset):
        arr.append((arr.pop(0)))
    return arr
