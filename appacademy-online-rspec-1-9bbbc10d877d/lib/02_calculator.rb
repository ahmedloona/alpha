
def add(num_one, num_two)
  num_one + num_two
end

def subtract(num_one, num_two)
  num_one - num_two
end

def sum(array)
  array.reduce(0, :+)
end

def multiply(array)
  return nil if array.empty?
  array.reduce(:*)
end

def power(num_one, num_two)
  num_one ** num_two
end

def factorial(num)
  return 1 if num == 0 || num == 1
  (2..num).reduce do |acc, el|
    acc * el
  end
end
