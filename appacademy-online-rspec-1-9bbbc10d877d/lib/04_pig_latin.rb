
def first_vowel_index(word)
  vowels = %w(a e i o u)
  word.each_char.with_index do |ch, idx|
    if vowels.include?(ch.downcase) && word[idx - 1..idx] != "qu"
      return idx
    end
  end
  return nil
end

def word_punctuated?(word)
  end_punctuation = %w(. ? ! , ; :)
  return true if end_punctuation.include?(word[-1])
  false
end

def translate(sentence)
  sentence.split.map do |word|
    first_vowel_position = first_vowel_index(word)
    if first_vowel_position
      if !word_punctuated?(word)
        translated = word[first_vowel_position..-1] + word[0...first_vowel_position] + "ay"
      else
        translated = word[first_vowel_position...-1] + word[0...first_vowel_position] + "ay" + word[-1]
      end
      adjust_capitalization(word, first_vowel_position, translated)
    else
      word
    end
  end.join(" ")
end

def adjust_capitalization(word, vowel_pos, translated)
  pos_of_old_start_char = word.length - vowel_pos
  pos_of_old_start_char -= 1 if word_punctuated?(word)
  if word[0] == word[0].upcase
    translated[0] = translated[0].upcase
    translated[pos_of_old_start_char] = translated[pos_of_old_start_char].downcase
  end
  translated
end
