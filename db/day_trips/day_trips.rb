puts "Creating Day Trips..."
DayTrip.create!([
  {
    adventure_id: Adventure.find_by(name: "day trips").id,
    name:"Marangu to Mandara Hut",
    description: "This is a popular one-day hike option for those who want to experience the beautiful rainforest on Mount Kilimanjaro and get a taste of what it's like to hike on the mountain. Take time to hike up to Mandara Hut, which is the first camp on the Marangu Route of Mount Kilimanjaro, and then descending back to Marangu Gate.",
    itinerary: "We will pick you up at around 8:00 am from your hotel in Moshi and transfer you to Marangu Gate. After registering, we will begin the hike. The one-day trip leads you up to Mandara Hut and back to the entry gate. If you choose the Marangu route, you will enjoy the tropical wilderness of the rainforest. Later, you will proceed to descend through the forest trail back to the gate. From there, we will transfer you back to your hotel.",
    inclusions: "All taxes and VAT applicable, all park fees, picnic lunch on the 1-day trip, transfer from Moshi and back to Moshi, professional english guides licenced by Kilimanjaro national park",
    exclusions: "Tips for the guides and crew, accommodation and meals, insurance, international flights"
  },
  {
    adventure_id: Adventure.find_by(name: "day trips").id,
    name:"Arusha National Park ",
    description: "Arusha National park located in northern Tanzania, is in a protected area near the town of Arusha. It covers an area of about 137 square kilometers (52.9 square miles) and is known for its diverse landscapes, including forests, grasslands, and volcanic mountains. The park is home to a variety of wildlife, including giraffes, buffalos, zebras, and colobus monkeys, as well as over 400 species of birds.
    One of the unique features of Arusha National Park is the presence of Mount Meru, which is the fifth-highest mountain in Africa, and the second-highest peak in Tanzania after Mount Kilimanjaro. The mountain can be climbed in 3-4 days and offers spectacular views of the surrounding areas.
    Arusha National Park is also home to several lakes, including Momela Lake, which is known for its large population of flamingos. Visitors can also enjoy activities such as game drives, and hiking in the park.
    "
  },
  {
    adventure_id: Adventure.find_by(name: "day trips").id,
    name:"Kikuletwa Hot Springs",
    description:"Known as Chemka Hot Springs, it is a natural oasis located in the midst of a dry and dusty landscape in Moshi-Kilimanjaro. The crystal clear, turquoise waters are surrounded by lush greenery, making it a perfect spot for swimming, relaxing, and taking in the natural beauty of Tanzania.
    Enjoy a relaxing day trip to the Kikuletwa Hot Springs, where you can take a dip in the refreshing waters and soak up the serene atmosphere. You'll also have the opportunity to explore the surrounding area, which is home to a variety of plant and animal life.",
    itinerary: "9:00 AM: Pick up from your hotel in Arusha or Moshi Your driver/guide will pick you up from your hotel in Arusha or Moshi at 9:00 AM and you'll begin the scenic drive to Kikuletwa Hot Springs.
    11:30 AM: Arrival at Kikuletwa Hot Springs After a 2-hour drive, you'll arrive at Kikuletwa Hot Springs. You'll have plenty of time to swim in the clear, refreshing waters and relax in the peaceful surroundings. You can also take a short hike to explore the area and spot some of the local wildlife.
    Picnic Lunch
    Enjoy a delicious picnic lunch in a shaded area near the hot springs after your swim.
    Departure from Kikuletwa Hot Springs After lunch, you'll begin the journey back to your hotel in Arusha or Moshi.
    ",
    inclusions:"Transportation to and from Kikuletwa Hot Springs, English-speaking driver/guide, Picnic lunch, Bottled water",
    exclusions: "Gratuities (optional), Personal expenses and souvenir purchases"
  },
  {
    adventure_id: Adventure.find_by(name: "day trips").id,
    name:"Maasai",
    description: "Experience the rich cultural traditions of the Maasai tribe on this immersive two-day tour in Tanzania. As a country with almost 125 different ethnic groups, the Maasai are one of the most well-known. Their culture is rooted in beautiful beadwork and intricate hairstyles that signify their social status and age.",
    itinerary: "During this tour, you will have the opportunity to spend a day and overnight in a 100% traditionally built Maasai Village, where you will learn about their art and dance, spiritual customs, medical and herbal practices, and delicious cuisine. You will also have a guided tour of the village, which includes a visit to a small market, and a herbal walk in the bush with Maasai herbal specialists.
    In the evening, you will have the chance to engage in deep cross-cultural conversations around a campfire before retiring to a traditional Maasai hut for the night. This tour offers a unique and authentic experience of Maasai culture and traditions that is not to be missed.
    ",
    inclusions:"Transport, Village fees , 1 night accommodation in a traditional Maasai hut, Driver guide, local English speaking Maasai guide and cook, 1 traditional lunch, 1 BBQ dinner, 1 breakfast, 1.5L bottle of water",
    exclusions: "Personal items, Gratuities/tip for guides, Sodas and alcoholic beverages, Travel insurance"
  }
])

puts "Created #{DayTrip.count} Day Trips"