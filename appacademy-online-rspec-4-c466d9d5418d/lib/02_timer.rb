class Timer
  # TODO: your code goes here!
  attr_accessor :seconds
  def initialize()
    @seconds = 0
  end

  def time_string
    hours = @seconds / 3600
    minutes = (@seconds - hours * 3600) / 60
    seconds = (@seconds - hours * 3600) % 60
    hours = padded(hours)
    minutes = padded(minutes)
    seconds = padded(seconds)
    "#{hours}:#{minutes}:#{seconds}"
  end

  def padded(num)
    (num.to_s.length == 1) ? "0#{num}" : "#{num}"
  end
end
