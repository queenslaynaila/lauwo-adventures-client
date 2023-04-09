meru= Mountain.find_by( mountain_name:"Mount Meru")
kilimanjaro= Mountain.find_by( mountain_name:"Mount Kilimanjaro")
# Your code for the itineraries seed file goes here

momela_route = meru.routes.create(
    route_name: "Momela Route", 
    description: "Experience an adventure like no other and see wild animals up close on foot! The lower section of the Meru trek takes you through a forest teeming with game animals, including Cape buffalo and elephants. An armed ranger accompanies hikers for safety. See wildlife like giraffes, waterbucks, and monkeys, and spot traces of leopards and other elusive creatures. Bird lovers will also be amazed by the thousands of European and African migrant species around the Momella Lakes. Don't miss out on this unique and exciting opportunity. Book your Meru trek today!",
    image_URL: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_1633357501_1_.jpg"
)
lemosho_route = Route.create(
    route_name: "Lemosho Route", 
    description: "Lemosho “wine route” is located on the Western side of Mount Kilimanjaro. It is a unique route for its abundance of wild animals on Mount Kilimanjaro during the dry seasons and its clear view of Shira plateau which is the first peak to be formed and currently one of the three faces of Kilimanjaro. It offers a moderately challenging hike with adequate acclimatization period before conquering the summit and is the most favored route to reach the peak with a high summit success rate.", 
    image_URL: "https://www.shadowsofafrica.com/media/wysiwyg/pages/Acclimatization.jpg", 
    mountain: kilimanjaro
)
  
machame_route = Route.create(
    route_name: "Machame Route", 
    description: "Also known as the “Whiskey Route”, the Machame route is popular for its gradual climb that eases acclimatization when trekking up and down Mount Kilimanjaro. With abundant greenery and an impressive forest coverage on the first and last day, the route has the highest successful summit rates at affordable prices. This route offers enough acclimatization to the high altitude from day one as well as a great view lush green forests with tropical vegetation.", 
    image_URL: "https://media-cdn.tripadvisor.com/media/photo-o/03/9e/d4/63/mont-kilimandjaro.jpg", 
    mountain: kilimanjaro
)
  
marangu_route = Route.create(
    route_name: "Marangu Route", 
    description: "This is the most luxurious and easiest Kilimanjaro route also known as “coca cola” trail. With Marangu route, mountain climbers get to sleep in huts booked in advance, opposed to the traditional camping under tents in other routes. Difference in the packing list for the Coca Cola route is emphasized in the itinerary while booking. It is also the shortest route to climb Mount Kilimanjaro with a maximum of 5 trekking days. Book now and experience climbing the mountain on a route with additional amenities such as Wi-Fi and hot water.", 
    image_URL: "https://www.shadowsofafrica.com/media/wysiwyg/pages/Kilimandjaro_climbers2.jpg", 
    mountain: kilimanjaro
)
  
londos_route = Route.create(
    route_name: "Londos Route", 
    description: "The Londos Route on Mount Kilimanjaro's western side is a preferred choice for climbers with limited time. It offers moderate difficulty with ample acclimatization, allowing for a high summit success rate. Highlights include the abundance of wildlife during dry seasons and clear views of the Shira Plateau. The route passes through a fascinating man-made forest with local agricultural activities, and is also popular for cyclists and runners. With its unique cultural experience and adventurous nature, the Londorossi Route is favored by those seeking a rewarding climb.",
    image_URL: "https://www.shadowsofafrica.com/media/wysiwyg/Itineraries/Kilimanjaro_climbing/Machame/shutterstock_277812548.jpg", 
    mountain: kilimanjaro
)
  
rongai_route = Route.create(
    route_name: "Rongai Route", 
    description: "The Rongai route is the only route that approaches Kilimanjaro from the north, close to the Kenyan border. It is gaining popularity among climbers due to its low traffic and less crowded trails. It is preferred by those who want a more private hike or are climbing during the rainy seasons (April to May and November to December) as it receives less precipitation on the north side. The minimum number of days required for this route is six days, though seven days are recommended for better acclimatization. The trek also passes through true wilderness before joining the Marangu route at Kibo camp, and the descent follows the Marangu route.
    ", 
    image_URL: "https://www.shadowsofafrica.com/media/wysiwyg/pages/Climbing.jpg", 
    mountain: kilimanjaro
)
  
umbwe_route = Route.create(
     route_name: "Umbwe Route",
     description: "The Umbwe Route is a challenging hiking trail up Mount Kilimanjaro, known for its steep and rocky terrain. Recommended for experienced hikers, this route is shorter but demands a high level of fitness and hiking skills. Along the way, you'll encounter breathtaking rainforest scenery, unique flora and fauna, and panoramic views of the surrounding landscape. It's important to be well-prepared with proper equipment and acclimatization strategies to ensure a safe and successful climb. Keep in mind that the Umbwe Route is not for beginners, so make sure to assess your abilities before embarking on this thrilling adventure to the 'Roof of Africa'.", 
     image_URL: "https://www.shadowsofafrica.com/media/wysiwyg/pages/Umbwe.jpg", 
     mountain: kilimanjaro
)
routes = Route.all
total_routes = routes.count
routes_per_mountain = routes.group_by(&:mountain_id)

puts "Total routes: #{total_routes}"

routes_per_mountain.each do |mountain_id, routes|
  mountain = Mountain.find(mountain_id)
  puts "#{mountain.mountain_name}: #{routes.count} route#{'s' if routes.count > 1}"
end
