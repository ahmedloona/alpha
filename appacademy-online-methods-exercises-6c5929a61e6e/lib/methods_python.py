# EASY

# Write a method that returns its argument converted to a string.
def my_to_s(arg):
    return str(arg)


# Write a method that returns its argument rounded to the nearest integer.
def my_round(num):
    return round(num)

# Write a method that returns the remainder of its two arguments.
# You may use the modulo operator.
def my_modulo(dividend, divisor):
    return dividend % divisor


# Write a method that returns the least common multiple of its two arguments.
# You may use the lcm method.
def my_lcm(int_one, int_two):
    return "python does not have an lcm method"

# Write a method that returns its argument converted to a float then
# converted to a string.
def to_stringified_float(int):
    return str(float(int))

# Write a method that returns the sum of the absolute values of its arguments.
def absolute_sum(num_one, num_two):
    return abs(num_one) + abs(num_two)

# Write a method that returns the negative value of its argument.
# If the argument is negative, the method simply returns the argument.
# (negative(-1) => -1, negative(1) => -1, negative(0) => 0)
# HINT: use the abs method
def negative(num):
    return -1 * abs(num)


# MEDIUM

# Write a method that returns the last digit of its argument.
# Assume the argument is an integer.
# HINT: What is the return value of 142 % 10? How about 2 % 10?
def last_digit(int):
    return int % 10 if (int >= 0) else (10 - int % 10)


# Write a method that returns a boolean indicating whether
# the last digit of the method's argument is odd.
# Assume the argument is an integer.
# Bonus points if you use last_digit as a helper method.
def last_digit_odd(int):
    return True if (last_digit(int) % 2 != 0) else False

# Write a method that returns the greatest common divisor of the last
# digit of each of its arguments. Assume the arguments are integers.
# (gcd_of_last_digits(93, 9) = 3.gcd(9) => 3)
# Bonus points if you use last_digit as a helper method.
def gcd_of_last_digits(int_one, int_two):
    int_one = last_digit(int_one)
    int_two = last_digit(int_two)
    if ((int_one == 0) or (int_two == 0)):
        return "undefined"
    if (int_one <= int_two):
        smaller, larger = int_one, int_two
    else:
        smaller, larger = int_two, int_one
    candidate = smaller
    while candidate > 0:
        if (smaller % candidate == 0 and larger % candidate == 0):
            return candidate
        candidate -= 1
    return 1


# Write a method that returns the last n digits of its first argument,
# where n is the second argument.
# Assume both arguments are non-zero integers.
# (last_n_digits(1234, 2) => 34)
# HINT: What is the return value of 1234 % 100? How about 4 % 100?
def last_n_digits(num, n):
    divisor = 10 ** n
    return num % divisor if num >= 0 else divisor - num % divisor



#HARD

# Write a method that returns the decimal remainder of dividing two floats.
# The decimal remainder is the right side of the decimal point
# (the "fractional part") of the quotient.
# (dec_remainder_of_two_floats(8.0, 5.0) => 0.6 because 8.0 / 5.0 => 1.6)
def dec_remainder_of_two_floats(f_dividend, f_divisor):
    return (f_dividend % f_divisor) / f_divisor

# Write a method that returns the decimal remainder of dividing two integers.
# HINT: Use dec_remainder_of_two_floats as a helper method,
# but don't forget to pass the proper type of argument
def dec_remainder_of_two_integers(i_dividend, i_divisor)

end


# EXPERT

# Write a method that returns the integer remainder of its two arguments.
# (i.e., what using the modulo operator would return).
# You may not use the modulo operator.
# Assume the arguments are integers.
# HINT: Use dec_remainder_of_two_integers as a helper method
def int_remainder_without_modulo(i_dividend, i_divisor)
end
