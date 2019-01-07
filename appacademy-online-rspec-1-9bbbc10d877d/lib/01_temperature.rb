def ctof(celsius_temperature)
  celsius_temperature * 9.fdiv(5) + 32
end

def ftoc(fahrenheit_temperature)
  (fahrenheit_temperature - 32) * 5.fdiv(9)
end
