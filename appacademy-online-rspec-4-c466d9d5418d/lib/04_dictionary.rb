class Dictionary
  # TODO: your code goes here!
  attr_accessor :entries, :keywords
  def initialize
    @entries = {}
    @keywords = []
  end

  def add(entry = {})

    if entry.is_a? Hash
      @entries = @entries.merge(entry)
      @keywords << entry.keys[0]
    else
      @entries[entry] = nil
      @keywords << entry
    end
    @keywords.sort!
  end

  def include?(key)
    @keywords.include?(key) ? true : false
  end

  def find(key)
    @entries.select do |k, v|
      k.include?(key)
    end
  end

  def printable
    result = ""
    @entries.sort.each do |k, v|
      result << "[" + k + "]" + " " + '"' + v + '"' + "\n"
    end
    result.chomp
  end

end
