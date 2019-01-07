def reverser(&prc)
  if !prc.nil?
    prc.call.split(" ").map do |word|
      word.reverse
    end.join(" ")
  end
end

def adder(increment = 1, &prc)
    prc.call + increment if !prc.nil?
end

def repeater(repeats = 1, &prc)
  if !prc.nil?
    repeats.times do
      prc.call()
    end
  end
end
