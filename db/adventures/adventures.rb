puts "Creating adventures/adventures..."
Adventure.create!(
  [
    {name: "mountain trekking"},
    {name: "safaris"},
    {name: "cultural tours"},
    {name: "day trips"},
    {name: "zanzibar"},
  ]
)


puts "Created #{Adventure.count} adventures/adventures"