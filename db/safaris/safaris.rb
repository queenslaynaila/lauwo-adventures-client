
puts 'Creating safaris..'
puts 'Creating 3 days safari'

Safari.create!(name:"3 day safari", duration: "3 days", image_url:"https://images.unsplash.com/photo-1662003905953-f2aa253c48df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")

puts 'Creating 4 days safari'
Safari.create!(name:"4 days safari", duration:"4 days", image_url:"https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 ")

puts 'Creating 5 days safari'
Safari.create!(name:"5 days safari", duration:"5 days", image_url:"https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")

puts 'Creating 6 days safari'
Safari.create!(name:"6 days safari", duration:"6 days",image_url:"https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" )

puts 'Creating 7 days safari'
Safari.create!(name:"7 days safari", duration:"7 days",image_url:"https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80")

puts 'Creating 8 days safari'
Safari.create!(name:"8 days safari", duration:"8 days",image_url:"https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

puts "Created #{Safari.count} safaris"