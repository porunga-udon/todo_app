class Todo < ActiveRecord::Base
  validates :content, presence: true
  require "romaji"
  require "romaji/core_ext/string"

  def self.search(input)
    return nil if input == ""
    Todo.where(['content LIKE ?', "%#{input}%"] )
  end

  def encryption
    chars = [*"a".."z", *"A".."Z", *"0".."9"]
    romaji = content.romaji
    self.content = romaji.tr(chars.join, chars.rotate(key).join)
  end

  def decryption
    chars = [*"a".."z", *"A".."Z", *"0".."9"]
    @content = content.tr(chars.join, chars.rotate(-key).join)
    self.content = @content.kana
  end

end
 