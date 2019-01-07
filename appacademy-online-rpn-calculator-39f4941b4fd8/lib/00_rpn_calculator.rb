class RPNCalculator
  # TODO: your code goes here!
  OPERATORS = %w(* / + -)


  attr_reader :value
  def initialize
    @store = []
    @value = 0
  end

  def push(num)
    @store << num
  end

  def plus
    raise "calculator is empty" if @store.count < 2
    @value = @store.pop + @store.pop
    @store.push(@value)
  end

  def minus
    raise "calculator is empty" if @store.count < 2
    @value = -1 * (@store.pop - @store.pop)
    @store.push(@value)
  end

  def times
    raise "calculator is empty" if @store.count < 2
    @value = @store.pop * @store.pop
    @store.push(@value)
  end

  def divide
    raise "calculator is empty" if @store.count < 2
    divisor = @store.pop
    dividend = @store.pop
    @value = dividend.fdiv(divisor) unless divisor.zero?
    @store.push(@value)
  end

  def tokens(string)
    string.split.map do |ch|
      if OPERATORS.include?(ch)
        ch.to_sym
      else
        ch.to_i
      end
    end
  end

  def evaluate(string)
    tokens = self.tokens(string)
    tokens.each do |token|
      case token
      when :+ then self.plus
      when :- then self.minus
      when :* then self.times
      when :/ then self.divide
      else @store << token
      end
    end
    @value
  end
end
