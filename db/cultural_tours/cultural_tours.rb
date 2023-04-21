puts "Creating cultural tours ..."
CulturalTour.create!(
  [
    {
      adventure_id: Adventure.find_by(name: "cultural tours").id,
      name: "marangu cultural tour",
      description: "Marangu is home to the Chagga people, one of the largest ethnic groups in Tanzania. As a small town located on the eastern side of Mount Kilimanjaro, it is often considered the starting point for climbers attempting to summit the mountain and also known for its rich cultural heritage and natural green vegetative beauty. 
      During the day trip, you'll have the opportunity to learn more about the Chagga culture and history, including their traditional farming techniques and use of medicinal plants. You'll also visit a local market and have the chance to sample some of the delicious local cuisine.
      In addition to the cultural activities, you'll also get to enjoy the natural beauty of the area with a hike to a beautiful waterfall and a visit to a coffee plantation where you'll learn about the coffee-making process and get to taste some of the local brews.
      Overall, the Marangu day trip is a great way to experience the rich culture and stunning natural beauty of Tanzania in just one day.
      ",
      location: "Marangu Town",
      itinerary: "Start the day by leaving Moshi in the morning and heading towards Kilimanjaro's foothills. First stop will be the Marangu Gate, which is the starting point for the Marangu climbing route. Here, you'll experience the quiet calm of the green montane forest and the excitement of the climbers about to ascend Kilimanjaro.
      Next, you'll visit a local coffee farm in Marangu, where you'll learn about how the locals grow, harvest and process their coffee beans. Get to try your hand at roasting and preparing your own cup of fresh coffee in true local Chagga fashion.
      After that, stop for a delicious traditional Chagga lunch at a local restaurant. Vegetarian options will be available.
      You'll then depart for the Ndoro Waterfalls, and take a thirty-minute hike through lush green forest to the base of the waterfall. You can enjoy the sparkling waters tumbling down the falls or take a refreshing dip in the pool.
      Next, you'll visit the Chagga Underground Caves, built by the Chagga to keep them safe from the Masaai. You'll spend some time at the Chagga Live Museum, which is an outdoor space that provides insight into traditional Chagga life.
      Finally, you'll round off your day with a cheeky banana beer or glass of banana wine - this is banana country, after all! You'll then return to Moshi, where you can sit back and relax as you take in the sights and sounds of the villages, foothills and roadways. Sounds like an action-packed day full of culture, adventure, and natural beauty!",
      inclusions: "transportation, village fees, professional guide, lunch, 1.5L bottle of water, banana wine & beer tasting",
      exclusions: "personal items, gratuities / 'tip' for mountain guide, soda & alcoholic beverages at lunch, travel insurance" 
    }
  ]
)

puts "Created #{CulturalTour.count} cultural tours"