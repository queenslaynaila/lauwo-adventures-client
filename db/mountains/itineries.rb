 
 #LEMOSHO ITINERY
#Lemosho 6 day intinery
lemosho_route = Route.find_by(route_name: "Lemosho Route")
lemosho_6 = RouteDuration.find_by(route_id: lemosho_route.id, duration_days:6)

# Create 6 Itinery entries for the 6-day Lemosho route
Itinery.create(
  route_duration_id: lemosho_6.id,
  title: 'Day 1: londos Gate to Mti Mkubwa Camp',
  description: 'After breakfast at the hotel in Moshi, we drive to londos Gate, the entrance of the Kilimanjaro National Park. After completing the necessary registration formalities, we drive to Lemosho trailhead. We start our trek through the lush rainforest to Mti Mkubwa Camp, our first camp on the mountain. Along the way, we will have lunch, and there will be plenty of time to admire the beauty of the rainforest.',
  meals: 'Lunch, Dinner',
  distance: '6 km',
  image_URL: 'https://res.cloudinary.com/dp6begzhp/image/upload/v1669124701/lemosho_route/mti_mkubwa_camp.jpg',
 accomodation: 'Tented Camp',
 vegatation: 'Rainforest',
  elevation: '2,650 m'
)

Itinery.create(
  route_duration_id:  lemosho_6.id,
  title: 'Day 2: Mti Mkubwa Camp to Shira 1 Camp',
  description: 'After breakfast, we leave the rainforest behind and enter the heather and moorland zone. We trek up to Shira 1 Camp, our camp for the night. Along the way, we will have lunch and enjoy the stunning views of the Shira Plateau.',
  meals: 'Breakfast, Lunch, Dinner',
  distance: '8 km',
  image_URL: 'https://res.cloudinary.com/dp6begzhp/image/upload/v1669124701/lemosho_route/shira_1_camp.jpg',
 accomodation: 'Tented Camp',
 vegatation: 'Heather and Moorland',
  elevation: '3,505 m'
)

Itinery.create(
  route_duration_id:  lemosho_6.id,
  title: 'Day 3: Shira 1 Camp to Shira 2 Camp',
  description: 'After breakfast, we continue our trek towards Shira 2 Camp. We cross the Shira Plateau and hike up to Lava Tower for lunch. After lunch, we descend to Barranco Camp for the night. This descent is important for acclimatization.',
  meals: 'Breakfast, Lunch, Dinner',
  distance: '10 km',
  image_URL: 'https://res.cloudinary.com/dp6begzhp/image/upload/v1669124701/lemosho_route/shira_2_camp.jpg',
 accomodation: 'Tented Camp',
 vegatation: 'Heather and Moorland',
  elevation: '3,840 m'
)

 # Day 4
Itinery.create(
  route_duration_id:  lemosho_6.id,
  title: 'Lemosho Route - Day 4',
  description: 'After breakfast, we will continue our ascent through the heathland and moorland zones to the Lava Tower.',
  meals: 'Breakfast, Lunch, Dinner',
  distance: '7.0 km',
  image_URL: 'https://example.com/image4.jpg',
  accomodation: 'Camping',
  vegatation: 'Heathland, Moorland',
  elevation: '3,950 m'
)

# Day 5
Itinery.create(
  route_duration_id:  lemosho_6.id,
  title: 'Lemosho Route - Day 5',
  description: 'Today, we will descend to Barranco Campsite which is situated in a valley below the Breach and Great Barranco Wall.',
  meals: 'Breakfast, Lunch, Dinner',
  distance: '6.0 km',
  image_URL: 'https://example.com/image5.jpg',
  accomodation: 'Camping',
  vegatation: 'Semi-Desert',
  elevation: '3,950 m (start) - 3,900 m (finish)'
)

# Day 6
Itinery.create(
  route_duration_id:  lemosho_6.id,
  title: 'Lemosho Route - Day 6',
  description: 'Today, we will continue our ascent to Barafu Campsite which is situated on a rocky, exposed ridge.',
  meals: 'Breakfast, Lunch, Dinner',
  distance: '7.0 km',
  image_URL: 'https://example.com/image6.jpg',
  accomodation: 'Camping',
  vegatation: 'Alpine Desert',
  elevation: '3,900 m (start) - 4,600 m (finish)'
)

# Create 7 Itinery entries for the 7-day Lemosho route
lemosho_7 = RouteDuration.find_by(route_id: lemosho_route.id, duration_days:7)
# Day 1
Itinery .create(
  route_duration_id: lemosho_7.id,
  title: "Day 1: Forest Camp",
  description: "After a short drive from Moshi to the Lemosho Gate, you will embark on your trek into the lush rainforest. Keep an eye out for black and white colobus monkeys, as well as blue monkeys and various bird species. After a 3-4 hour trek, you will arrive at your camp for the night, nestled among the trees.",
  meals: "Lunch, Dinner",
  distance: "7km",
  image_URL: "https://res.cloudinary.com/dqzxpn5db/image/upload/v1648402227/forest_camp_rylri7.jpg",
  accomodation: "Tent",
  vegatation: "Rainforest",
  elevation: "2,650m"
)

# Day 2
Itinery .create(
  route_duration_id: lemosho_7.id,
  title: "Day 2: Shira 1 Camp",
  description: "Leaving the forest behind, the trail continues upwards into the heather and moorland zone. On a clear day, you will get stunning views of the Shira Plateau and Mount Meru in the distance. Today's trek will take 5-7 hours, with a steep ascent up to the Shira Cathedral.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "8km",
  image_URL: "https://res.cloudinary.com/dqzxpn5db/image/upload/v1648402227/shira_1_camp_zv1p7n.jpg",
  accomodation: "Tent",
  vegatation: "Heather and Moorland",
  elevation: "3,505m"
)

# Day 3
Itinery .create!(
  route_duration_id: lemosho_7.id,
  title: "Day 3: Shira 2 Camp",
  description: "The trail today follows a gentle incline towards the Shira Plateau. You will trek past the Shira Cathedral and through the vast expanse of the plateau, with stunning views of the mountain and surrounding landscape. Today's trek will take around 5 hours.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "10km",
  image_URL: "https://res.cloudinary.com/dqzxpn5db/image/upload/v1648402227/shira_2_camp_lelnjo.jpg",
  accomodation: "Tent",
  vegatation: "Moorland",
  elevation: "3,840m"
)

# Day 4
Itinery .create(
  route_duration_id: lemosho_7.id,
  title: "Day 4: Barranco Camp",
  description: "Today's trek will take you through some of the most stunning landscapes on the mountain. You will ascend through the alpine desert, crossing the Lava Tower at 4,600m before descending to the Barranco Camp at 3,950m. The trek will take around 6-7 hours.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "10km",
  image_URL: "https://res.cloudinary.com/dqzxpn5db/image/upload/v1648402227/barranco_camp_awhe5g.jpg",
  accomodation: "Tent",
  vegatation: "Alpine Desert",
  elevation: "3,950m"
)

# Day 5
Itinery .create(
  route_duration_id: lemosho_7.id, 
  title: "Day 5: Shira 2 Camp to Barranco Camp", 
  description: "Today, we will ascend to Lava Tower and then descend to Barranco Camp, where we will spend the night. The trek will take approximately 7 hours and cover a distance of about 10 km.", meals: "Breakfast, Lunch, Dinner", 
  distance: "10 km", 
  image_URL: "https://images.unsplash.com/photo-1611186793214-fb18f5bb9d93", 
  accomodation: "Camping", 
  vegatation: "Alpine Desert", 
  elevation: "3,900 m to 3,960 m"
)

Itinery .create(
  route_duration_id: lemosho_7.id, 
  title: "Day 6: Barranco Camp to Karanga Camp", 
  description: "Today, we will climb the Barranco Wall and then trek through Karanga Valley to Karanga Camp. The trek will take approximately 5-6 hours and cover a distance of about 7 km.", 
  meals: "Breakfast, Lunch, Dinner", 
  distance: "7 km", 
  image_URL: "https://images.unsplash.com/photo-1585707642776-0dd04f7d1a2a",
   accomodation: "Camping", 
   vegatation: "Alpine Desert", 
   elevation: "3,960 m to 3,995 m"
  )

Itinery .create(
  route_duration_id: lemosho_7.id, 
  title: "Day 7: Karanga Camp to Barafu Camp", 
  description: "Today, we will trek to Barafu Camp, where we will spend the night. The trek will take approximately 3-4 hours and cover a distance of about 6 km. We will have an early dinner and then rest before the summit climb.", 
  meals: "Breakfast, Lunch, Dinner", 
  distance: "6 km", 
  image_URL: "https://images.unsplash.com/photo-1585707589659-7629d596b87f", 
  accomodation: "Camping", 
  vegatation: "Alpine Desert", 
  elevation: "3,995 m to 4,673 m"
)

# Create 8 Itinery entries for the 8-day Lemosho route
 
lemosho_8 = RouteDuration.find_by(route_id: lemosho_route.id, duration_days: 8)

# Day 1
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Arrival in Moshi",
  description: "Arrive at Kilimanjaro International Airport (JRO) and transfer to your hotel in Moshi.",
  meals: "None",
  distance: "",
  image_URL: "",
  accomodation: "Hotel",
  vegatation: "",
  elevation: ""
)

# Day 2
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "londos Gate to Mti Mkubwa",
  description: "Drive to londos Gate to get permits before continuing to the Lemosho trailhead. Hike through the lush rainforest to Mti Mkubwa camp.",
  meals: "Lunch, Dinner",
  distance: "7km",
  image_URL: "",
  accomodation: "Tent",
  vegatation: "Rainforest",
  elevation: "2,650m"
)

# Day 3
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Mti Mkubwa to Shira 1 Camp",
  description: "Continue through the rainforest until reaching the Shira Plateau. Hike across the plateau to Shira 1 Camp.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "8km",
  image_URL: "",
  accomodation: "Tent",
  vegatation: "Rainforest, Moorland",
  elevation: "3,505m"
)

# Day 4
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Shira 1 Camp to Shira 2 Camp",
  description: "Hike from Shira 1 Camp to Shira 2 Camp while enjoying views of Mount Meru and the Shira Plateau.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "10km",
  image_URL: "",
  accomodation: "Tent",
  vegatation: "Moorland",
  elevation: "3,810m"
)

# Day 5
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Shira 2 Camp to Lava Tower",
  description: "Climb to Lava Tower for acclimatization before descending to Barranco Camp.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "10km",
  image_URL: "",
  accomodation: "Tent",
  vegatation: "Semi-Desert",
  elevation: "4,640m"
)

# Day 6
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Barranco Camp to Karanga Camp",
  description: "Hike the Barranco Wall before traversing the southern circuit to Karanga Camp.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "6km",
  image_URL: "",
  accomodation: "Tent",
  vegatation: "Alpine Desert",
  elevation: "3,995m"
)

# Day 7
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Karanga Camp (3,995m)",
  description: "From the Barranco Camp, we ascend a steep ridge which takes us to an altitude of 4200m. From here, we enjoy fantastic views of the Heim Glacier and Mt. Meru. We then descend to the Karanga Valley (3930m) where we rest for the night.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5 km",
  image_URL: "https://res.cloudinary.com/dsfcvvmnk/image/upload/v1662431347/karanga_camp_dtvpuj.jpg",
  accomodation: "Tents",
  vegatation: "Alpine Desert",
  elevation: "3,995m"
)

# Day 8
Itinery .create(
  route_duration_id: lemosho_8.id,
  title: "Barafu Camp (4,673m)",
  description: "We start the day with a steep ascent to Barafu Camp at an altitude of 4600m. This is our base camp for the final push to the summit. After lunch and a rest, we begin our summit climb at midnight.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "4 km",
  image_URL: "https://res.cloudinary.com/dsfcvvmnk/image/upload/v1662431367/barafu_camp_eaxqf3.jpg",
  accomodation: "Tents",
  vegatation: "Alpine Desert",
  elevation: "4,673m"
)
#MACHAME ITINERIES
#Machame 6 day itineries
machame_route = Route.find_by(route_name: "Machame Route")
machame_6 = RouteDuration.find_by(route_id: machame_route.id, duration_days: 6)
#Day 1
Itinery .create(
  route_duration_id: machame_6.id, 
  title: "Day 1: Arrival in Moshi", 
  description: "Arrive in Moshi, Tanzania, and transfer to your hotel.", 
  meals: "Dinner", 
  distance: "N/A", 
  image_URL: "", 
  accomodation: "Hotel", 
  vegatation: "N/A", 
  elevation: "N/A"
)
#Day 2
Itinery .create(
  route_duration_id: machame_6.id, 
  title: "Day 2: Machame Gate to Machame Camp", 
  description: "Drive to the Machame Gate and start your trek through the rainforest to Machame Camp.", meals: "Breakfast, Lunch, Dinner", 
  distance: "11km", 
  image_URL: "", 
  accomodation: "Tents", 
  vegatation: "Rainforest", 
  elevation: "1830m to 3100m"
)
Itinery .create(
  route_duration_id: machame_6.id, 
  title: "Day 3: Machame Camp to Shira Camp",
  description: "Trek through the heather and moorland zone to Shira Camp.", 
  meals: "Breakfast, Lunch, Dinner", 
  distance: "5km", 
  image_URL: "", 
  accomodation: "Tents", 
  vegatation: "Heather and Moorland", 
  elevation: "3100m to 3840m"
)
Itinery .create(
  route_duration_id: machame_6.id, 
  title: "Day 4: Shira Camp to Barranco Camp", 
  description: "Hike across the Shira Plateau and down to Barranco Camp.", 
  meals: "Breakfast, Lunch, Dinner", 
  distance: "10km", 
  image_URL: "", 
  accomodation: "Tents", 
  vegatation: "Semi-Desert", 
  elevation: "3840m to 3950m (Lava Tower) to 3900m (Barranco Camp)"
)
Itinery .create(
  route_duration_id: machame_6.id,
   title: "Day 5: Barranco Camp to Karanga Camp", 
   description: "Trek up the Barranco Wall and across the Karanga Valley to Karanga Camp.",
  meals: "Breakfast, Lunch, Dinner", 
  distance: "5km", 
  image_URL: "", 
  accomodation: "Tents", 
  vegatation: "Alpine Desert", 
  elevation: "3900m to 4200m"
)
Itinery .create(
  route_duration_id: machame_6.id, 
  title: "Day 6: Karanga Camp to Barafu Camp", 
  description: "Trek through the rocky landscape to Barafu Camp, your last stop before the summit.", meals: "Breakfast, Lunch, Dinner", 
  distance: "4km", 
  image_URL: "", 
  accomodation: "Tents", 
  vegatation: "Alpine Desert", 
  elevation: "4200m to 4600m"
)
  
#Machame 7 day itineries
# Retrieve route duration for Machame 7-day route
machame_7 = RouteDuration.find_by(route_id: machame_route.id, duration_days: 7)

# Create itineraries for Machame 7-day route
Itinery .create(
  route_duration_id: machame_7.id,
  title: "Day 1 - Machame Gate to Machame Camp",
  description: "After breakfast, transfer from Moshi to the Machame Gate. After registering with the park authority, begin your climb through the dense forest of the Machame rainforest. Take a break for lunch at the halfway point before continuing to Machame Camp for the night. The climb takes 5-7 hours and covers 11km.",
  meals: "Lunch, Dinner",
  distance: "11km",
  image_URL: "https://images.unsplash.com/photo-1579683284228-229b97c456df",
  accomodation: "Camping",
  vegatation: "Rainforest",
  elevation: "1,640m to 2,850m"
)

Itinery .create(
  route_duration_id: machame_7.id,
  title: "Day 2 - Machame Camp to Shira Camp",
  description: "After breakfast, begin your ascent through the remaining rainforest towards the Shira Plateau. Take a break for lunch before continuing to Shira Camp, where you will stay for the night. The climb takes 4-6 hours and covers 5km.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5km",
  image_URL: "https://images.unsplash.com/photo-1579683284244-4f4ac9ce3aa3",
  accomodation: "Camping",
  vegatation: "Rainforest, Heath",
  elevation: "2,850m to 3,610m"
)

Itinery .create(
  route_duration_id: machame_7.id,
  title: "Day 3 - Shira Camp to Lava Tower to Barranco Camp",
  description: "After breakfast, begin your climb towards Lava Tower, a rocky outcropping at 4,600m. Take a break for lunch before descending to Barranco Camp for the night. The climb takes 6-8 hours and covers 10km.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "10km",
  image_URL: "https://images.unsplash.com/photo-1579683284237-e26dfecb04c3",
  accomodation: "Camping",
  vegatation: "Heath",
  elevation: "3,610m to 3,960m (Lava Tower), then down to 3,950m (Barranco Camp)"
)

Itinery .create(
  route_duration_id: machame_7.id,
  title: "Day 4 - Barranco Camp to Karanga Camp",
  description: "After breakfast, climb the Barranco Wall and continue on to Karanga Camp, where you will stay for the night. The climb takes 4-6 hours and covers 5km.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5km",
  image_URL: "https://images.unsplash.com/photo-1579683284231-2075c65fa81c",
  accomodation: "Camping",
  vegatation: "Alpine Desert",
  elevation: "3,950m to 4,035m"
)

 # Day 5
Itinery.create(
  route_duration_id: machame_7.id,
  title: "Machame Camp to Karanga Camp",
  description: "Today's trek is short but steep, as we climb up to the rocky section of the trail known as the Barranco Wall. After traversing this challenging section, we descend into the Karanga Valley before climbing up again to Karanga Camp.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5km",
  image_URL: "https://res.cloudinary.com/dk4rjadwm/image/upload/v1649151216/machame_karanga_kqtzhd.jpg",
  accomodation: "Tents",
  vegatation: "Alpine Desert",
  elevation: "3,995m"
)

# Day 6
Itinery.create(
  route_duration_id: machame_7.id,
  title: "Karanga Camp to Barafu Camp",
  description: "We continue our ascent to Barafu Camp, where we will rest and prepare for our final push to the summit. The landscape becomes increasingly barren as we enter the high alpine zone.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "4km",
  image_URL: "https://res.cloudinary.com/dk4rjadwm/image/upload/v1649151216/machame_barafu_fskt4v.jpg",
  accomodation: "Tents",
  vegatation: "Alpine Desert",
  elevation: "4,673m"
)

# Day 7
Itinery.create(
  route_duration_id: machame_7.id,
  title: "Barafu Camp to Uhuru Peak to Mweka Camp",
  description: "We begin our ascent to the summit around midnight, using headlamps to guide us up the scree slope. As the sun rises, we will reach Stella Point and continue along the crater rim to Uhuru Peak, the highest point in Africa. After taking in the views from the summit, we will begin our descent to Mweka Camp, where we will spend our final night on the mountain.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "16km",
  image_URL: "https://res.cloudinary.com/dk4rjadwm/image/upload/v1649151216/machame_summit_jdlyhc.jpg",
  accomodation: "Tents",
  vegatation: "Glacier",
  elevation: "5,895m"
)

#Marangu itineries
 
marangu_route = Route.find_by(route_name: "Marangu Route")
marangu_6 = RouteDuration.find_by(route_id: marangu_route.id, duration_days: 6)

Itinery .create!(
  route_duration_id: marangu_6.id,
  title: "Day 1: Marangu Gate to Mandara Hut",
  description: "After breakfast, you will be collected from your hotel and driven to the Marangu Gate on the eastern side of Kilimanjaro. After registration, you will start your climb through the dense forest up to the first hut, Mandara.",
  meals: "Lunch, Dinner",
  distance: "8km",
  image_URL: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  accomodation: "Mandara Hut",
  vegatation: "Montane Forest",
  elevation: "1860m to 2700m"
)

Itinery .create!(
  route_duration_id: marangu_6.id,
  title: "Day 2: Mandara Hut to Horombo Hut",
  description: "Today’s trek takes you through the last section of forest before reaching the heath zone and ultimately the moorland. Horombo Hut is located in the heath zone where you can get your first views of the summit.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "11km",
  image_URL: "https://images.unsplash.com/photo-1502672134261-7e5797720549",
  accomodation: "Horombo Hut",
  vegatation: "Heath Zone, Moorland",
  elevation: "2700m to 3720m"
)

Itinery .create!(
  route_duration_id: marangu_6.id,
  title: "Day 3: Horombo Hut to Kibo Hut",
  description: "Today’s trek is short and steep, climbing through the moorland and into the highland desert towards Kibo. You will arrive at Kibo Hut in the early afternoon where you will rest and prepare for the summit attempt.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "9km",
  image_URL: "https://images.unsplash.com/photo-1502690594181-0a8c78ba1592",
  accomodation: "Kibo Hut",
  vegatation: "Moorland, Highland Desert",
  elevation: "3720m to 4700m"
)

Itinery .create!(
  route_duration_id: marangu_6.id,
  title: "Day 4: Kibo Hut to Uhuru Peak to Horombo Hut",
  description: "You will start your ascent to the summit very early in the morning, around midnight. The climb to Uhuru Peak is long and demanding but the reward is the breathtaking view from the top. After taking photos and enjoying the view, you will descend back to Kibo Hut for a rest before continuing to Horombo Hut.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "21km",
  image_URL: "https://images.unsplash.com/photo-1529113312161-4ad06e861c81",
  accomodation: "Horombo Hut",
  vegatation: "Highland Desert, Moorland",
  elevation: "4700m to 5895m and back down to 3720m"
)
Itinery .create(
  route_duration_id: marangu_6.id,
  title: "Day 5: Kibo Hut to Uhuru Peak and back to Horombo Hut",
  description: "At midnight, you will begin your ascent to the summit. It will be a long and challenging hike, but once you reach Uhuru Peak, you will be rewarded with stunning views of the surrounding landscape. After taking in the views and celebrating your achievement, you will descend back to Kibo Hut for a short rest before continuing on to Horombo Hut.",
  meals: "Breakfast, lunch, and dinner",
  distance: "21 km",
  image_URL: "https://res.cloudinary.com/dgt29uccp/image/upload/v1649108724/marangu-uhuru_y9h6hu.jpg",
  accomodation: "Horombo Hut",
  vegatation: "Alpine desert",
  elevation: "3,761 m (summit) - 3,720 m (Horombo Hut)"
)

 Itinery .create(
  route_duration_id: marangu_6.id,
  title: "Day 6: Horombo Hut to Marangu Gate",
  description: "After breakfast, you will continue your descent down to Marangu Gate. You will pass through Mandara Hut and the rainforest, where you may have a chance to see some wildlife. Once you reach Marangu Gate, you will receive your summit certificates and say goodbye to your mountain crew before heading back to your hotel in Moshi.",
  meals: "Breakfast and lunch",
  distance: "20 km",
  image_URL: "https://res.cloudinary.com/dgt29uccp/image/upload/v1649108724/marangu-gate_olvq5q.jpg",
  accomodation: "Hotel in Moshi",
  vegatation: "Rainforest",
  elevation: "3,720 m (Horombo Hut) - 1,830 m (Marangu Gate)"
)
#Londos route itineries
londos_route = Route.find_by(route_name: "Londos Route")
londos_7 = RouteDuration.find_by(route_id: londos_route.id, duration_days: 7)

Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Day 1: londos Gate to Mti Mkubwa",
  description: "After breakfast, we will drive to the londos Gate for registration before driving to the Lemosho starting point. From there, we will trek through the forest to the Mti Mkubwa campsite.",
  meals: "Lunch, Dinner",
  distance: "6.8 km",
  image_URL: "https://res.cloudinary.com/diby2nljo/image/upload/v1649544526/londorossi_7_day/1_qnsb5m.jpg",
  accomodation: "Tent",
  vegatation: "Montane forest",
  elevation: "2,250m to 2,820m"
)

Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Day 2: Mti Mkubwa to Shira 1",
  description: "Today we will continue trekking through the forest before entering the moorland zone with giant heather. We will camp at the Shira 1 campsite.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "8 km",
  image_URL: "https://res.cloudinary.com/diby2nljo/image/upload/v1649544527/londorossi_7_day/2_vxbgud.jpg",
  accomodation: "Tent",
  vegatation: "Moorland",
  elevation: "2,820m to 3,610m"
)

Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Day 3: Shira 1 to Shira 2",
  description: "We will trek to the Shira 2 campsite, passing through the low alpine zone with its unique plants and volcanic rock formations. Today will be an acclimatization day, and we will trek to a high point of 4,100m before returning to camp.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "9 km",
  image_URL: "https://res.cloudinary.com/diby2nljo/image/upload/v1649544526/londorossi_7_day/3_k2eqaw.jpg",
  accomodation: "Tent",
  vegatation: "Low alpine",
  elevation: "3,610m to 3,840m"
)

Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Day 4: Shira 2 to Barranco",
  description: "Today we will trek to the Barranco campsite via the Lava Tower, a towering volcanic rock formation that stands at 4,600m. The trek to the campsite involves some scrambling over rocks and boulders.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "15 km",
  image_URL: "https://res.cloudinary.com/diby2nljo/image/upload/v1649544527/londorossi_7_day/4_rniyvt.jpg",
  accomodation: "Tent",
  vegatation: "Semi-desert",
  elevation: "3,840m to 3,960m"
)

 # Day 5
Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Shira Camp 2 to Barranco Camp",
  description: "Today's trek begins with an ascent to Lava Tower before descending down to Barranco Campsite. We will pass through the beautiful semi-desert landscape and see various plants and wildlife along the way. This will be a long day of trekking and we will be rewarded with stunning views of the Barranco Valley.",
  meals: "Breakfast, lunch, dinner",
  distance: "Approximately 10km",
  image_URL: "https://res.cloudinary.com/dgfalpt5t/image/upload/v1649211132/Day_5_Londorossi_7_kmjqpe.jpg",
  accomodation: "Tents",
  vegatation: "Semi-desert",
  elevation: "From 3,850m to 3,900m to 3,976m and down to 3,960m"
)

# Day 6
Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Barranco Camp to Karanga Camp",
  description: "Today's trek involves a steep ascent of the Barranco Wall, which requires some scrambling but is not technically difficult. After reaching the top, we will continue along the southern circuit route and pass through the alpine desert to Karanga Camp.",
  meals: "Breakfast, lunch, dinner",
  distance: "Approximately 5km",
  image_URL: "https://res.cloudinary.com/dgfalpt5t/image/upload/v1649211132/Day_6_Londorossi_7_imq4fp.jpg",
  accomodation: "Tents",
  vegatation: "Alpine desert",
  elevation: "From 3,960m to 4,200m"
)

# Day 7
Itinery .create!(
  route_duration_id: londos_7.id,
  title: "Karanga Camp to Barafu Camp",
  description: "We will trek through a rocky and desolate landscape to reach Barafu Camp, which is situated on a ridge. This will be a challenging day of trekking as we will be ascending to a high altitude and will need to rest and hydrate regularly. At Barafu Camp, we will rest and prepare for the summit attempt early the next morning.",
  meals: "Breakfast, lunch, dinner",
  distance: "Approximately 4km",
  image_URL: "https://res.cloudinary.com/dgfalpt5t/image/upload/v1649211132/Day_7_Londorossi_7_lglthb.jpg",
  accomodation: "Tents",
  vegatation: "Alpine desert",
  elevation: "From 4,200m to 4,680m"
)
#Rongai route itineries
rongai_route = Route.find_by(route_name: "Rongai Route")
rongai_8 = RouteDuration.find_by(route_id: rongai_route.id, duration_days: 8)

Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Day 1: Nalemoru Gate to Simba Camp",
  description: "Drive to the gate, register with park authorities, begin the hike through the rainforest, and reach the first camp.",
  meals: "Lunch, Dinner",
  distance: "6.3 km",
  image_URL: "https://example.com/image1.jpg",
  accomodation: "Tents",
  vegatation: "Rainforest",
  elevation: "2,000 m - 2,600 m"
)

Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Day 2: Simba Camp to Kikelelwa Camp",
  description: "Continue through the moorland, with stunning views of Kibo and the eastern ice fields on the crater rim. Cross the flat saddle area between Mawenzi and Kibo.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "9 km",
  image_URL: "https://example.com/image2.jpg",
  accomodation: "Tents",
  vegatation: "Moorland",
  elevation: "2,600 m - 3,600 m"
)

Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Day 3: Kikelelwa Camp to Mawenzi Tarn Camp",
  description: "Continue the ascent up the barren landscape towards Mawenzi. Stop at Mawenzi Tarn Camp for the night.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5 km",
  image_URL: "https://example.com/image3.jpg",
  accomodation: "Tents",
  vegatation: "Alpine desert",
  elevation: "3,600 m - 4,310 m"
)

Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Day 4: Mawenzi Tarn Camp to Kibo Hut",
  description: "Cross the lunar desert of the 'Saddle' between Mawenzi and Kibo, to reach Kibo Hut at the bottom of the Kibo crater wall.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "8 km",
  image_URL: "https://example.com/image4.jpg",
  accomodation: "Huts",
  vegatation: "Alpine desert",
  elevation: "4,310 m - 4,700 m"
)

Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Day 5: Kibo Hut to Uhuru Peak to Horombo Hut",
  description: "Start the summit trek early in the morning to reach Uhuru Peak, the highest point in Africa. Descend back to Horombo Hut.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "22 km",
  image_URL: "https://example.com/image5.jpg",
  accomodation: "Huts",
  vegatation: "Glacier, screed, stone",
  elevation: "4,700 m - 5,895 m - 3,720 m"
)
# Day 6
Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Rongai Third Cave to School Hut",
  description: "The hike today is relatively short and steep, and it should only take about 3-4 hours. You'll pass through the barren landscape of the saddle en route to Kibo, the highest camp on Kilimanjaro. At School Hut, you'll have an early dinner and prepare for the summit day.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "3.5 km",
  image_URL: "https://res.cloudinary.com/dgq3aqljd/image/upload/v1649095704/kilimanjaro/rongai-third-cave-to-school-hut.jpg",
  accomodation: "School Hut",
  vegatation: "Alpine Desert",
  elevation: "3,800m to 4,800m"
)

# Day 7
Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "School Hut to Uhuru Peak to Horombo Hut",
  description: "Wake up just before midnight in the cover of darkness. We begin a steep climb over loose volcanic scree has some well-graded zig-zags and a slow but steady pace will take us to rim of the main crater, Gillman’s 5,685 m. We will rest there for few minutes to enjoy the sunrise over Mawenzi. Those who are still feeling good can continue slowly to make the three hour round trip from here along the crater rim to Uhuru Peak 5,895 m. which is the highest point in Africa. After a few minutes to appreciate your accomplishment we descend to Kibo Hut for some refreshment, we continue to descend to reach Horombo Hut.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "14 km",
  image_URL: "https://res.cloudinary.com/dgq3aqljd/image/upload/v1649095704/kilimanjaro/school-hut-to-uhuru-peak-to-horombo-hut.jpg",
  accomodation: "Horombo Hut",
  vegatation: "Alpine Desert/Moorland",
  elevation: "4,800m to 5,895m and down to 3,700m"
)

# Day 8
Itinery .create!(
  route_duration_id: rongai_8.id,
  title: "Horombo Hut to Marangu Gate",
  description: "After breakfast, you'll descend through the moorland to the Mandara escarpment, then continue through lush forest to the park gate. At the gate, you'll receive your Kilimanjaro summit certificate if you reached Uhuru Peak, then drive back to Moshi or Arusha for a long overdue hot shower and celebrations!!",
  meals: "Breakfast, Lunch",
  distance: "20 km",
  image_URL: "https://res.cloudinary.com/dgq3aqljd/image/upload/v1649095704/kilimanjaro/horombo-hut-to-marangu-gate.jpg",
  accomodation: nil,
  vegatation: "Moorland/ Rainforest",
  elevation: "3,700m to 1,860m"
)

 #rongai route 9 days
 rongai_9 = RouteDuration.find_by(route_id: rongai_route.id, duration_days: 9)

Itinery .create!(
  route_duration: rongai_9,
  title: "Day 1: Simba Camp",
  description: "After breakfast, drive from Moshi to the Rongai Gate. After registering at the gate, begin your climb to Simba Camp.",
  meals: "Lunch, Dinner",
  distance: "8km",
  image_URL: "https://res.cloudinary.com/dq3iyw6ri/image/upload/v1649169791/rongai_route_day1_image_xpfwfv.jpg",
  accomodation: "Tents",
  vegatation: "Rainforest",
  elevation: "1,800m to 2,600m"
)

Itinery .create!(
  route_duration: rongai_9,
  title: "Day 2: Kikelewa Camp",
  description: "Hike to Kikelewa Camp, crossing the Second Cave en-route. The views start to open up and you begin to feel you're on a really big mountain!",
  meals: "Breakfast, Lunch, Dinner",
  distance: "12km",
  image_URL: "https://res.cloudinary.com/dq3iyw6ri/image/upload/v1649169792/rongai_route_day2_image_nzwvqn.jpg",
  accomodation: "Tents",
  vegatation: "Heath",
  elevation: "2,600m to 3,600m"
)

Itinery .create!(
  route_duration: rongai_9,
  title: "Day 3: Mawenzi Tarn",
  description: "A short but steep climb up grassy slopes offers superb views of this wilderness area. The vegatation zone ends shortly before you reach your next camp at Mawenzi Tarn spectacularly situated beneath the towering spires of Mawenzi. Spend the afternoon acclimatizing and exploring the area.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5km",
  image_URL: "https://res.cloudinary.com/dq3iyw6ri/image/upload/v1649169792/rongai_route_day3_image_h2nujl.jpg",
  accomodation: "Tents",
  vegatation: "Alpine desert",
  elevation: "3,600m to 4,315m"
)

Itinery .create!(
  route_duration: rongai_9,
  title: "Day 4: Kibo Hut",
  description: "Cross the lunar desert of the saddle between Mawenzi and Kibo to reach Kibo campsite at the bottom of the Kibo crater wall. The remainder of the day is spent resting in preparation for the final ascent, which begins around midnight.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "9km",
  image_URL: "https://res.cloudinary.com/dq3iyw6ri/image/upload/v1649169793/rongai_route_day4_image_bazgag.jpg",
  accomodation: "Tents",
  vegatation: "Alpine desert",
  elevation: "4,315m to 4,700m"
)

 # Rongai 9-day route itinerary
rongai_9 = RouteDuration.find_by(route_id: rongai_route.id, duration_days: 9)

# Day 5
day_5 = Itinery .create(
  route_duration_id: rongai_9.id,
  title: "Rongai Third Cave to School Hut",
  description: "A steady ascent up the saddle to School Hut Camp.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "7 km",
  image_URL: "https://images.unsplash.com/photo-1628532144136-956cd6cfc7d3",
  accomodation: "School Hut Camp",
  vegatation: "Alpine Desert",
  elevation: "3,600 m to 4,800 m"
)

# Day 6
day_6 = Itinery .create(
  route_duration_id: rongai_9.id,
  title: "School Hut to Uhuru Peak to Horombo Hut",
  description: "A long and challenging day with an early start. Trek via Gilman's Point to Uhuru Peak. Descend to Horombo Hut.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "20 km",
  image_URL: "https://images.unsplash.com/photo-1629319192671-7042d7e75d32",
  accomodation: "Horombo Hut",
  vegatation: "Alpine Desert and Moorland",
  elevation: "4,800 m to 5,895 m to 3,720 m"
)

# Day 8
day_8 = Itinery .create(
  route_duration_id: rongai_9.id,
  title: "Horombo Hut to Marangu Gate",
  description: "Descend from Horombo Hut to Marangu Gate where you will receive your summit certificates.",
  meals: "Breakfast, Lunch",
  distance: "18 km",
  image_URL: "https://images.unsplash.com/photo-1562518595-60b5d00cb9c5",
  accomodation: "None",
  vegatation: "Moorland and Rainforest",
  elevation: "3,720 m to 1,860 m"
)

# Day 9
day_9 = Itinery .create(
  route_duration_id: rongai_9.id,
  title: "Departure",
  description: "After breakfast, say goodbye to the mountain crew and transfer to Kilimanjaro Airport or continue with your safari itinerary.",
  meals: "Breakfast",
  distance: "N/A",
  image_URL: "https://images.unsplash.com/photo-1548357885-1b2b9d6eae7f",
  accomodation: "None",
  vegatation: "N/A",
  elevation: "N/A"
)

#Umbwe route itineries
umbwe_route = Route.find_by(route_name: "Umbwe Route")
umbwe_6 = RouteDuration.find_by(route_id: umbwe_route.id, duration_days: 6)

# Day 1
Itinery .create(
  route_duration_id: umbwe_6.id,
  title: "Arrival at Umbwe Gate",
  description: "The trip starts with a drive to Umbwe gate. After the necessary registration, we begin the hike through the rainforest. The trail is steep and can be slippery when wet. Camp is set up at Umbwe Cave.",
  meals: "Lunch, Dinner",
  distance: "Approx. 11km",
  image_URL: "https://res.cloudinary.com/dbacvk3x1/image/upload/v1649011493/Umbwe_1_zhbhzs.jpg",
  accomodation: "Tents",
  vegatation: "Rainforest",
  elevation: "From 1,600m to 2,940m"
)

# Day 2
Itinery .create(
  route_duration_id: umbwe_6.id,
  title: "Umbwe Cave to Barranco Camp",
  description: "Today we hike through the moorland and have our first view of the Western Breach. After lunch at Lava Tower, we descend to Barranco Camp through the scenic Barranco Valley. This is a long and tough day, but our aim is to acclimatize to the altitude.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "Approx. 6km",
  image_URL: "https://res.cloudinary.com/dbacvk3x1/image/upload/v1649011550/Umbwe_2_huomwt.jpg",
  accomodation: "Tents",
  vegatation: "Moorland",
  elevation: "From 2,940m to 3,900m (Lava Tower), then down to 3,976m at Barranco Camp"
)

# Day 3
Itinery .create(
  route_duration_id: umbwe_6.id,
  title: "Barranco Camp to Karanga Camp",
  description: "The day starts with a climb up the Barranco Wall, which is steep but not technical. From the top of the wall, we continue to Karanga Camp, which is set on a rocky ridge overlooking the Southern Icefields.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "Approx. 6km",
  image_URL: "https://res.cloudinary.com/dbacvk3x1/image/upload/v1649011622/Umbwe_3_p9hxqa.jpg",
  accomodation: "Tents",
  vegatation: "Alpine desert",
  elevation: "From 3,976m to 4,035m"
)

#Day 4
Itinery .create!(
  route_duration_id: umbwe_6.id,
  title: "Barranco Camp to Karanga Camp",
  description: "Today's trek begins with a steep scramble up the Barranco Wall. After reaching the top, we will continue through the Karanga Valley and make our way to Karanga Camp, where we will rest for the night.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "5km",
  image_URL: "https://res.cloudinary.com/dzmp6xumb/image/upload/v1649258969/umbwe-barranco-to-karanga_q0iylu.jpg",
  accomodation: "Tents",
  vegatation: "Alpine Desert",
  elevation: "3,900m - 4,200m"
)

# Day 5
Itinery .create!(
  route_duration_id: umbwe_6.id,
  title: "Karanga Camp to Barafu Camp",
  description: "We'll leave Karanga Camp and trek through a rocky and rugged terrain. After a steep climb, we will reach Barafu Camp, where we will rest and prepare for the final ascent to the summit.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "6km",
  image_URL: "https://res.cloudinary.com/dzmp6xumb/image/upload/v1649258970/umbwe-karanga-to-barafu_lckxqu.jpg",
  accomodation: "Tents",
  vegatation: "Alpine Desert",
  elevation: "4,200m - 4,600m"
)

# Day 6
Itinery .create!(
  route_duration_id: umbwe_6.id,
  title: "Barafu Camp to Uhuru Peak to Mweka Camp",
  description: "Today is the summit day! We will wake up in the middle of the night and begin the ascent to the summit, Uhuru Peak. After reaching the summit, we will descend to Mweka Camp for a well-deserved rest.",
  meals: "Breakfast, Lunch, Dinner",
  distance: "18km",
  image_URL: "https://res.cloudinary.com/dzmp6xumb/image/upload/v1649258969/umbwe-barafu-to-uhuru_lfhlh4.jpg",
  accomodation: "Tents",
  vegatation: "Arctic",
  elevation: "4,600m - 5,895m - 3,100m"
)
