class Temperature
  # TODO: your code goes here!
  attr_writer :temperature
  def self.from_celsius(temperature)
    Temperature.new({c: temperature})
  end

  def self.from_fahrenheit(temperature)
    Temperature.new({f: temperature})
  end

  def self.ftoc(temperature)
    (temperature - 32) * 5.fdiv(9)
  end

  def self.ctof(temperature)
    temperature * 9.fdiv(5) + 32
  end


  def initialize(options = {})
    if options[:f]
      @temperature = self.class.ftoc(options[:f])
    else
      @temperature = options[:c]
    end
  end

  def in_fahrenheit
    self.class.ctof(@temperature)
  end

  def in_celsius
    @temperature
  end
end

# Subclasses/Inheritance
class Celsius < Temperature
  def initialize(temperature)
    @temperature = temperature
  end
end

class Fahrenheit < Temperature
  def initialize(temperature)
    @temperature = temperature
  end
end
