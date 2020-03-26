json.array! @dates do |date|
  json.id date.id
  json.content date.content
  json.created_at date.created_at
end
