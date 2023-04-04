meru= Mountain.find_by( mountain_name:"Mount Meru")
kilimanjaro= Mountain.find_by( mountain_name:"Mount Kilimanjaro")
# Your code for the itineraries seed file goes here

momela_route = meru.routes.create(
    route_name: "Momela Route", 
    description: "Experience an adventure like no other and see wild animals up close on foot! The lower section of the Meru trek takes you through a forest teeming with game animals, including Cape buffalo and elephants. An armed ranger accompanies hikers for safety. See wildlife like giraffes, waterbucks, and monkeys, and spot traces of leopards and other elusive creatures. Bird lovers will also be amazed by the thousands of European and African migrant species around the Momella Lakes. Don't miss out on this unique and exciting opportunity. Book your Meru trek today!",
    image_URL: "https://example.com/momela.jpg"
)
lemosho_route = Route.create(
    route_name: "Lemosho Route", 
    description: "The Lemosho Route is a beautiful and unspoilt route for Kilimanjaro climbing. It has beautiful forests, wildlife sightings, and scenic views of Kilimanjaro.", 
    image_URL: "https://example.com/lemosho.jpg", 
    mountain: kilimanjaro
)
  
machame_route = Route.create(
    route_name: "Machame Route", 
    description: "The Machame Route is a popular route for climbing Kilimanjaro. It has stunning views and allows for excellent acclimatization.", 
    image_URL: "https://example.com/machame.jpg", 
    mountain: kilimanjaro
)
  
marangu_route = Route.create(
    route_name: "Marangu Route", 
    description: "The Marangu Route is the most popular route for climbing Kilimanjaro. It has hut accommodations and is known as the 'Coca-Cola' route.", 
    image_URL: "https://example.com/marangu.jpg", 
    mountain: kilimanjaro
)
  
londos_route = Route.create(
    route_name: "Londos Route", 
    description: "The Londos Route is a beautiful and remote route for climbing Kilimanjaro. It starts in the rainforest and crosses the Shira Plateau before joining with the Lemosho Route.",
    image_URL: "https://example.com/londos.jpg", 
    mountain: kilimanjaro
)
  
rongai_route = Route.create(
    route_name: "Rongai Route", 
    description: "The Rongai Route is a less-travelled route for climbing Kilimanjaro. It starts on the north side of the mountain and has beautiful views of the Kenyan plains.", 
    image_URL: "https://example.com/rongai.jpg", 
    mountain: kilimanjaro
)
  
umbwe_route = Route.create(
     route_name: "Umbwe Route",
     description: "The Umbwe Route is a steep and challenging route for climbing Kilimanjaro. It has beautiful views of the Western Breach and Arrow Glacier.", 
     image_URL: "https://example.com/umbwe.jpg", 
     mountain: kilimanjaro
)
 