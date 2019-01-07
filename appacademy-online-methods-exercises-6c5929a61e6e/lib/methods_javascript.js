// EASY

// Write a method that returns its argument converted to a string.
function myToString(arg) {
  return String(arg);
}


// Write a method that returns its argument rounded to the nearest integer.
function myRound(num) {
  return Math.round(num);
}


// Write a method that returns the remainder of its two arguments.
// You may use the modulo operator.
function myModulo(dividend, divisor) {
  return dividend % divisor;
}


//# Write a method that returns the least common multiple of its two arguments.
//# You may use the lcm method.
function myLcm(int_one, int_two) {
  return "js does not have a lcm method";
}

// Write a method that returns its argument converted to a float then
// converted to a string.
function toStringifiedFloat(int) {
  return String(int.toFixed(1));
}


// Write a method that returns the sum of the absolute values of its arguments.
function absoluteSum(num_one, num_two) {
  return Math.abs(num_one) + Math.abs(num_two);
}

//# Write a method that returns the negative value of its argument.
//# If the argument is negative, the method simply returns the argument.
//# (negative(-1) => -1, negative(1) => -1, negative(0) => 0)
//# HINT: use the abs method
function negative(num) {
  return -1 * Math.abs(num);
}

//# MEDIUM

//# Write a method that returns the last digit of its argument.
//# Assume the argument is an integer.
//# HINT: What is the return value of 142 % 10? How about 2 % 10?
function lastDigit(int) {
  return (int >= 0) ? int % 10 : -1 * int % 10;
}


//# Write a method that returns a boolean indicating whether
//# the last digit of the method's argument is odd.
//# Assume the argument is an integer.
//# Bonus points if you use last_digit as a helper method.
function lastDigitOdd(int) {
  return (lastDigit(int) % 2 !== 0) ? true : false;
}


//# Write a method that returns the greatest common divisor of the last
//# digit of each of its arguments. Assume the arguments are integers.
//# (gcd_of_last_digits(93, 9) = 3.gcd(9) => 3)
//# Bonus points if you use last_digit as a helper method.
function gcd_of_last_digits(int_one, int_two) {
  int_one = lastDigit(int_one);
  int_two = lastDigit(int_two);

  let smaller, larger;

  if (int_one <= int_two) {
    [smaller, larger] = [int_one, int_two];
  } else {
    [smaller, larger] = [int_two, int_one];
  }

  let candidate = smaller;
  while (candidate > 0) {
    if ((smaller % candidate === 0) && (larger % candidate === 0)){
      return candidate
    }
    candidate -= 1;
  }
  return 1;
}

gcd_of_last_digits( 3, 6);



//# Write a method that returns the last n digits of its first argument,
//# where n is the second argument.
//# Assume both arguments are non-zero integers.
//# (last_n_digits(1234, 2) => 34)
//# HINT: What is the return value of 1234 % 100? How about 4 % 100?
function lastNDigits(num, n) {
  divisor = 10 ** n;
  return (num >= 0) ? num % divisor : -1 * num % divisor;
}


//#HARD

//# Write a method that returns the decimal remainder of dividing two floats.
//# The decimal remainder is the right side of the decimal point
//# (the "fractional part") of the quotient.
//# (dec_remainder_of_two_floats(8.0, 5.0) => 0.6 because 8.0 / 5.0 => 1.6)
function dec_remainder_of_two_floats(f_dividend, f_divisor) {
  return (f_dividend % f_divisor) / f_divisor;
}

/*
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
end */
