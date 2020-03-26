require "romaji"
require "romaji/core_ext/string"
chars = [*"a".."z", *"A".."Z", *"0".."9"]

puts "解読"
keyword = gets.chomp
puts "いくつずらしますか？"
num = gets.to_i
@keyword = keyword.tr(chars.join, chars.rotate(num).join)

puts @keyword.kana





