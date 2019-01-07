def measure(n = 1, &prc)
  start = Time.now
  n.times { prc.call if !prc.nil? }
  finish = Time.now
  (finish - start).fdiv(n)
end
