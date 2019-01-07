def echo(message)
  message
end

def shout(message)
  message.upcase
end

def repeat(message, repetition = 2)
  ((message + " ") * repetition)[0...-1]
end

def start_of_word(word, index)
  word[0...index]
end

def first_word(string)
  string.split.first
end

def titleize(string)
  little_words = %w(and the over)
  string.split.map.with_index do |word, idx|
    if idx == 0 || !little_words.include?(word)
      word.capitalize
    else
      word
    end
  end.join(" ")
end
