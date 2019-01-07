class MyHashSet
  # TODO: your code goes here!

  def initialize
    @store = {}
  end

  def store
    @store
  end

  def insert(el)
    @store[el] = true
  end

  def include?(el)
    @store.include?(el) ? true : false
  end

  def delete(el)
    @store.delete(el)
  end

  def to_a
    @store.keys
  end

  def union(another_set)
    result = MyHashSet.new
    @store.each_key { |k| result.insert(k) }
    another_set.store.each_key { |k| result.insert(k) }
    result
  end

  def intersect(another_set)
    result  = MyHashSet.new
    @store.each_key { |k| result.insert(k) if another_set.include?(k) }
    result
  end

  def minus(another_set)
    result = MyHashSet.new
    @store.each_key { |k| result.insert(k) unless another_set.include?(k) }
    result
  end

end
