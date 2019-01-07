class Book
  # TODO: your code goes here!
  EXCEPTIONS = %w(the a an and in the of)

  def title
    @title
  end

  def title=(title)
    @title = title.split(" ").map.with_index do |word, idx|
      if !EXCEPTIONS.include?(word) || idx == 0
        word.capitalize
      else
        word
      end
    end.join(" ")
  end

end
