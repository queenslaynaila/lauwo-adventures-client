puts "Creating adventures/adventures..."
Adventure.create!(
  [
    {name: "mountain trekking"},
    {name: "safaris"},
    {name: "cultural tours"},
    {name: "cycling tours"},
    {name: "day trips"},
  ]
)
puts "Created #{Adventure.count} adventures/adventures"