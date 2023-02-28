puts "Digite um número:"
num = gets.chomp.to_i

a = 0
b = 1
while b <= num
  if b == num
    puts "#{num} pertence à sequência ;)"
    break
  end
  c = a + b
  a = b
  b = c
end

if b > num
  puts "#{num} não pertence à sequência :("
end
