#MOMELA MERU ROUTE ITINERY
  momela_route = Route.find_by(route_name: "Momela Route")
  momela_4 = RouteDuration.find_by(route_id: momela_route.id, duration_days:4)

  Itinery.create(
    route_duration_id:momela_4.id,
    day_no: '01',
    title: 'Momela Gate to Mariakamba Hut',
    description: 'Embark on an exciting journey of mountain climbing in Africa, as you leave Moshi for Arusha National Park, where the thrilling Mt Meru awaits you. After arriving at the Momella Gate, complete the necessary formalities and meet your experienced guide, porters, and ranger, who will accompany you throughout the climb. Start your trek through the lush crater floor, where you will pass the giant fig tree arch and the Itikoni clearing, where buffalos often graze. Cross a large stream above the stunning Maio waterfalls and take a steep path up the crater rim wall to reach Miriakamba Hut. Along the way, you might encounter elephants, and an armed ranger will ensure your safety. Enjoy a well-deserved dinner and spend the night at the comfortable Miriakamba Hut.',
    hiking_time:'4-5hours',
    distance: 'N/I',
    max_altitude: ' 2541m',
    vegatation: 'Forest',
    meals: ' Full board',
    accomodation: 'Hut'
  )
  Itinery.create(
    route_duration_id:momela_4.id,
    day_no:'02',
    title: 'Miriakamba Hut to Saddle Hut',
    description: 'On day 2, hike through a mix of trees and pleasant glades. You/ll also come across Mgongo wa Tembo, also known as Elephant Ridge, which offers breathtaking views of the Meru crater and the cliffs below the summit. The pass between the slopes of Meru and the peak of Little Meru will lead you to Saddle Hut. You/ll have the option of taking a 1 to 1.5 hour round trip hike to the summit of Little Meru from Saddle Hut, which is a great opportunity to take in the stunning scenery of the African mountain landscape while challenging yourself with some mountain climbing and hiking.',
    hiking_time:'3-4 hours',
    distance: '1029m',
    max_altitude: '2541M-3570 m',
    vegatation: 'Forest',
    meals: ' Full board',
    accomodation: 'Hut'
  )
  Itinery.create(
    route_duration_id:momela_4.id,
    day_no:'03',
    title: 'Saddle Hut –Rhino Point To Peak ',
    description: 'Missing',
    hiking_time:' 10 hours',
    distance: '5km ',
    max_altitude: ' 4566 m',
    vegatation: 'Summit',
    meals: ' Full board',
    accomodation: 'Hut'
  )
  Itinery.create(
    route_duration_id:momela_4.id,
    day_no: '04',
    title: 'Summit MIRIAKAMBA HUT ~ MOMELLA GATE',
    description: 'During the summit night, you/ll be woken up at around 3am to begin trekking between 3:30 to 4am. The trek of approximately 4 to 5 hours will take you along a narrow ridge, situated between the sheer cliffs and the sloping outer wall, to the summit at 14,979 ft. (4566 mt.). This leg of the trek is known to be both exhilarating and nerve-wracking, and the stunning sunrise over Kilimanjaro at the summit will make it all worthwhile. After reaching the summit, you/ll retrace your steps back to Saddle Hut for a well-deserved rest before descending down the ridge to Miriakamba. This day/s trek will take around 8 to 11 hours in total, and it/ll offer a memorable hiking and mountain climbing experience in the beautiful landscape of Africa.After a well-deserved rest, the trek continues down through open mountain meadows and wooded streams, offering a chance to spot some wildlife such as buffalo, giraffe, and colobus monkeys. The trail eventually leads to the Momella Gate, where your hiking safari adventure comes to an end. Here, you will be met by your driver and transferred back to Moshi for some rest and relaxation after the strenuous climb. While the total trekking time this day is from 3 to 4 hours, we highly recommend the 4-day trip for a more enjoyable and less strenuous experience.',
    hiking_time:' 8-11 hours',
    max_altitude: ' 4566 m',
    vegatation: 'Summit',
    meals: ' Full board',
    accomodation: 'Hut'
  )
  Itinery.create(
    route_duration_id:momela_4.id,
    day_no: '05',
    title: ' Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings.     ',
    description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.'
  )

#LEMOSHO ROUTES ITINERIES
 lemosho_route = Route.find_by(route_name: "Lemosho Route")
 # Create 6 Itinery entries for the 6-day Lemosho route
  lemosho_6 = RouteDuration.find_by(route_id: lemosho_route.id, duration_days:6)
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no: '01',
    title: 'Arrival and Pick – Up',
    description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.    ',
    meals: 'Breakfast',
    accomodation: 'Panama hotel ',
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no:'02',
    title: ' LONDOROSSI GATE TO MTI MKUBWA CAMP',
    description: 'The 6 days trek begins with registration at Londorossi Park Gate. Our porters prepare and pack our supplies and luggage before starting our ascent along the forest trail to our first stop at Mti Mkubwa (Big Tree) campsite. The forest provides a spectacular view of white colobus monkey, blue monkey and varied flora and fauna. Camp overnight at Mti Mkubwa camp and enjoy evening story telling sessions in camaraderie.',
    hiking_time:'3 - 4 hours',
    distance: '5km',
    max_altitude: '2895 m',
    vegatation: 'Forest',
    meals: ' Full board',
    accomodation: 'Camping',
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no:'03',
    title: ' MTI MKUBWA CAMP TO SHIRA 2 CAMP ',
    description: 'We trek across picturesque moorland meadows, making our way to the Shira 1 Camp for a brief break as we have our lunch. The trek continues through breathtaking valleys, cathedral like structures that make up the Shira caldera and views of the Western Kilimanjaro plains. As the sun sets, temperatures will drop significantly, making for a much chillier night than the previous one. As you embark on the climb, you will experience a true sense of the wilderness, especially when the afternoon mist descends. The day’s hike comes to an end at Shira 2 camp. Bask in the unforgettable sights of Mt. Meru and the surreal evening sunset over Shira Peak after a long day trekking. ',
    hiking_time:'7-8hrs',
    distance: ' 17km',
    max_altitude: '2650m, 3810 m',
    vegatation: 'Moorland',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no: '04',
    title: 'SHIRA 2 CAMP TO BARANKO CAMP',
    description: 'Embark on an exhilarating Kilimanjaro hiking adventure via the picturesque Lemosho route, where you will experience a sustained ascent with breathtaking panoramic views. After a morning of trekking, refuel with a well-deserved lunch break near Lava Tower, standing tall at 14,900 feet. The trail then descends to the Barranco Valley, nestled at 12,800 feet, offering a spectacular view of towering cliffs and sweeping vistas of the plains far below. Stay overnight at the stunning Barranco Camp, where you can bask in the beauty of the surrounding landscape and marvel at the wonders of nature.',
    hiking_time:' 6-7 hours',
    distance: ' 11km',
    max_altitude: '4600m',
    vegatation: 'N/I',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no: '05',
    title: 'BARANKO TO BARAFU BASE CAMP',
    description: 'Leave Barranco Camp after breakfast for Karanga Valley. The day begins with an hour and a half scramble up the Barranco Wall. This is the best part of the trek and also the most challenging part of the day. In some places you may have to use your hands to pull your body up. After reaching the top, hike through fairly level terrain before making a short but steep descent into the greener Karanga River Valley. At Karanga last water point, we will have lunch before continuing with the climb towards barafu base Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail. At the Barafu camp site we will have a briefing on the guidelines for the summit night followed by a recommended short nap. ',
    hiking_time:'8hrs',
    distance: ' 1O km',
    max_altitude: '5895 m',
    vegatation: 'N/I',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no: '06',
    title: 'BARAFU BASE CAMP TO MWEKA CAMP',
    description: 'Passing close to the spectacular glaciers and ice cliffs that still occupy most of the summit area, the descent to Barafu is surprisingly fast, and after some refreshments, we continue to descend to reach our final campsite, mweka Camp (12,500 ft).',
    hiking_time:'4 hrs',
    distance: ' 11 km',
    max_altitude: '4600m',
    vegatation: 'N/I',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no: '07',
    title: ' MWEKA CAMP TO MWEKA GATE TO MOSHI TOWN    ',
    description: 'A sustained descent on a well constructed path takes us through a lovely tropical forest alive with birdsong and boasting lush undergrowth with considerable botanical interest. Our route winds down to the Kilimanjaro National Park gate at Mweka (5,400 ft); and on through coffee and banana farms to Mweka village, where we are transferred to your accommodation.',
  )
  Itinery.create(
    route_duration_id:lemosho_6.id,
    day_no: '08',
    title: ' Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings.  ',
    description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.',
  )



 # Create 7 Itinery entries for the 7-day Lemosho route
   lemosho_7 = RouteDuration.find_by(route_id: lemosho_route.id, duration_days:7)
   Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '01',
    title: ' Arrival and Pick – Up',
    description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.',
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no:'02',
    title: 'LONDOROSSI GATE TO MTI MKUBWA CAMP',
    description: 'The 7 days trek begins with registration at Londorossi Park Gate. Our porters prepare and pack our supplies and luggage before starting our ascent along the forest trail to our first stop at Mti Mkubwa (Big Tree) campsite. The forest provides a spectacular view of white colobus monkey, blue monkey and varied flora and fauna. Camp overnight at Mti Mkubwa camp and enjoy evening story telling sessions in camaraderie.',
    distance: '5km',
    hiking_time:': 3 - 4 hours    ',
    max_altitude: '2895 m',
    vegatation: 'Forest',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no:'03',
    title: ' MTI MKUBWA CAMP TO SHIRA 2 CAMP ',
    description: 'We trek across picturesque moorland meadows, making our way to the Shira 1 Camp for a brief break as we have our lunch. The trek continues through breathtaking valleys, cathedral like structures that make up the Shira caldera and views of the Western Kilimanjaro plains. As the sun sets, temperatures will drop significantly, making for a much chillier night than the previous one. As you embark on the climb, you will experience a true sense of the wilderness, especially when the afternoon mist descends. The day’s hike comes to an end at Shira 2 camp. Bask in the unforgettable sights of Mt. Meru and the surreal evening sunset over Shira Peak after a long day trekking.    ',
    distance: '17km',
    hiking_time:'7-8hrs',
    max_altitude: '3810 m    ',
    vegatation: 'Moorland',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '04',
    title: 'SHIRA 2 CAMP TO BARANKO CAMP',
    description: 'Embark on an exhilarating Kilimanjaro hiking adventure via the picturesque Lemosho route, where you will experience a sustained ascent with breathtaking panoramic views. After a morning of trekking, refuel with a well-deserved lunch break near Lava Tower, standing tall at 14,900 feet. The trail then descends to the Barranco Valley, nestled at 12,800 feet, offering a spectacular view of towering cliffs and sweeping vistas of the plains far below. Stay overnight at the stunning Barranco Camp, where you can bask in the beauty of the surrounding landscape and marvel at the wonders of nature.',
    distance: '11km',
    hiking_time:' 6-7 hours',
    max_altitude: ' 4600m    ',
    vegatation: 'Moorland',
    meals: 'Full board',
    accomodation: 'Camping',
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '05',
    title: ' BARANKO TO KARANGA CAMP',
    description: 'Leave Barranco Camp after breakfast for Karanga Valley. The day begins with an hour and a half scramble up the Barranco Wall. This is the best part of the trek and also the most challenging part of the day. In some places you may have to use your hands to pull your body up. After reaching the top, hike through fairly level terrain before making a short but steep descent into the greener Karanga River Valley. Karanga Camp is located on the ridge above the river valley. ',
    distance: '6km',
    hiking_time:' 4- 5hours',
    max_altitude: '3990 m',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '06',
    title: ' KARANGA CAMP TO BARAFU BASE CAMP',
    description: 'After breakfast, begin the hike to Barafu Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail.When we reach to Barafu base camp, start our ascent by torchlight about 1 a.m. so that we can be up on the crater rim by sunrise. The steep climb over loose volcanic screen has some well-graded zigzags and a slow but steady pace will take us to Stella Point (18,800 ft), in about five or six hours. We will rest there for a short time to enjoy the sunrise over Mawenzi. Those who are still feeling strong can make the one-hour round trip from here along the crater rim to Uhuru Peak (19,345 ft). We spend few minutes at the summit for photos and then we begin the descent down to the base camp.',
    distance: '6km',
    hiking_time:' 4- 5hours',
    max_altitude: '5895 m',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '07',
    title: ' BARAFU BASE CAMP TO MWEKA CAMP',
    description: 'Passing close to the spectacular glaciers and ice cliffs that still occupy most of the summit area, the descent to Barafu is surprisingly fast, and after some refreshments, we continue to descend to reach our final campsite, mweka Camp (12,500 ft). ',
    distance: '11 km',
    hiking_time:' 4 hours',
    max_altitude: '4600 m',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '08',
    title: 'MWEKA CAMP TO MWEKA GATE TO MOSHI TOWN',
    description: 'A sustained descent on a well constructed path takes us through a lovely tropical forest alive with birdsong and boasting lush undergrowth with considerable botanical interest. Our route winds down to the Kilimanjaro National Park gate at Mweka (5,400 ft); and on through coffee and banana farms to Mweka village, where we are transferred to your accommodation.  '
  )
  Itinery.create(
    route_duration_id:lemosho_7.id,
    day_no: '09',
    title: 'Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings',
    description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.    '
  )

 # Create 8 Itinery entries for the 8-day Lemosho route
   lemosho_8 = RouteDuration.find_by(route_id: lemosho_route.id, duration_days: 8)
   Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '06',
    title: 'Arrival and Pick – Up',
    description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive..',
    meals: 'Breakfast',
    accomodation: 'Hotel'
  )
   Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no:'02',
    title: 'LONDOROSSI GATE TO MTI MKUBWA CAMP',
    description: 'The 8 days trek begins with registration at Londorossi Park Gate. Our porters prepare and pack our supplies and luggage before starting our ascent along the forest trail to our first stop at Mti Mkubwa (Big Tree) campsite. The forest provides a spectacular view of white colobus monkey, blue monkey and varied flora and fauna. Camp overnight at Mti Mkubwa camp and enjoy evening story telling sessions in camaraderie.',
    distance: '5km',
    hiking_time:'3 - 4 hours',
    max_altitude: '2895 m',
    vegatation: 'Forest',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no:'03',
    title: 'MTI MKUBWA CAMP TO SHIRA 1 CAMP ',
    description: 'We trek across picturesque moorland meadows, making our way to the Shira 1 Camp where we/ll enjoy a delicious dinner and spend the night. Along the way, we/ll be treated to breathtaking views of the valleys, cathedral like structures that make up the Shira caldera and plane land of Western Kilimanjaro. As the sun sets, temperatures will drop significantly, making for a much chillier night than the previous one.',
    distance: '7km',
    hiking_time:'5 hours',
    max_altitude: '3500 m',
    vegatation: 'Moorland',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '04',
    title: ' SHIRA 1 CAMP TO SHIRA 2 CAMP    ',
    description: 'As you embark on the day three climb, you/ll experience a true sense of the wilderness, particularly when the afternoon mist descends. At the Shira 2 camp, bask in the unforgettable sights of Mt. Meru and the surreal evening sunset over Shira Peak. It/s a breathtaking unforgettable experience on your Kilimanjaro tour.',
    distance: '10km',
    hiking_time:'4-5 hrs',
    max_altitude: '3810 m',
    vegatation: 'Moorland',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '05',
    title: ' SHIRA 2 CAMP TO BARANKO CAMP',
    description: 'Embark on an exhilarating Kilimanjaro hiking adventure via the picturesque Lemosho route, where you will experience a sustained ascent with breathtaking panoramic views. After a morning of trekking, refuel with a well-deserved lunch break near Lava Tower, standing tall at 14,900 feet. The trail then descends to the Barranco Valley, nestled at 12,800 feet, offering a spectacular view of towering cliffs and sweeping vistas of the plains far below. Stay overnight at the stunning Barranco Camp, where you can bask in the beauty of the surrounding landscape and marvel at the wonders of nature.    ',
    distance: '11 km',
    hiking_time:'6-7 hours',
    max_altitude: '4600m ',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '06',
    title: 'BARANKO TO KARANGA CAMP',
    description: 'Leave Barranco Camp after breakfast for Karanga Valley. The day begins with an hour and a half scramble up the Barranco Wall. This is the best part of the trek and also the most challenging part of the day. In some places you may have to use your hands to pull your body up. After reaching the top, hike through fairly level terrain before making a short but steep descent into the greener Karanga River Valley. Karanga Camp is located on the ridge above the river valley.     ',
    distance: '6 km',
    hiking_time:'4- 5hours',
    max_altitude: '3990 m ',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '07',
    title: 'KARANGA CAMP TO BARAFU BASE CAMP',
    description: 'After breakfast, begin the hike to Barafu Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail.When we reach to Barafu base camp, start our ascent by torchlight about 1 a.m. so that we can be up on the crater rim by sunrise. The steep climb over loose volcanic screen has some well-graded zigzags and a slow but steady pace will take us to Stella Point (18,800 ft), in about five or six hours. We will rest there for a short time to enjoy the sunrise over Mawenzi. Those who are still feeling strong can make the one-hour round trip from here along the crater rim to Uhuru Peak (19,345 ft). We spend few minutes at the summit for photos and then we begin the descent down to the base camp.    ',
    distance: '6 km',
    hiking_time:'7 hours',
    max_altitude: '5895 m',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '08',
    title: 'BARAFU BASE CAMP TO MWEKA CAMP',
    description: 'After breakfast, begin the hike to Barafu Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail.When we reach to Barafu base camp, start our ascent by torchlight about 1 a.m. so that we can be up on the crater rim by sunrise. The steep climb over loose volcanic screen has some well-graded zigzags and a slow but steady pace will take us to Stella Point (18,800 ft), in about five or six hours. We will rest there for a short time to enjoy the sunrise over Mawenzi. Those who are still feeling strong can make the one-hour round trip from here along the crater rim to Uhuru Peak (19,345 ft). We spend few minutes at the summit for photos and then we begin the descent down to the base camp.    ',
    distance: '11 km',
    hiking_time:'4 hours',
    max_altitude: '4600 m',
    vegatation: 'N/I',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '09',
    title: 'MWEKA CAMP TO MWEKA GATE TO MOSHI TOWN',
    description: 'A sustained descent on a well constructed path takes us through a lovely tropical forest alive with birdsong and boasting lush undergrowth with considerable botanical interest. Our route winds down to the Kilimanjaro National Park gate at Mweka (5,400 ft); and on through coffee and banana farms to Mweka village, where we are transferred to your accommodation.'
  )
  Itinery.create(
    route_duration_id:lemosho_8.id,
    day_no: '10',
    title: 'Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
    description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip. '
  )
 

#MACHAME ITINERIES
  machame_route = Route.find_by(route_name: "Machame Route")
  #Machame 6 day itineries
    machame_6 = RouteDuration.find_by(route_id: machame_route.id, duration_days: 6)
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '01',
      title: 'Arrival',
      description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.' 
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no:'02',
      title: 'Machame gate to Machame camp ',
      description: 'Upon completion of necessary registration formalities at the Machame National Park gate, the trek begins through a beautiful and lush forest. A picnic lunch is served to all at the national park gate. The first day is relatively challenging due to high altitude but the trails pass through a deep forest and adequate time to acclimatize to the high altitude is offered upon reaching the camp site. The route is the considered the best for understanding one’s body as they gradually adapt to the high altitude. The day ends with setting up camp at Machame campsite.',
      hiking_time:'6 hours',
      distance: '11 km',
      max_altitude: '3021m',
      vegatation: 'Montana forest',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no:'03',
      title: 'Machame gate to Machame camp ',
      description: 'We soon leave the forest behind and enter the moorland zone of giant heather. The trail climbs steadily through rocky hills with wide views of the Shira Plateau. From our camp near Shira Hut, we take in the formidable views of Mt. Meru as she floats atop the clouds. The short day hike provides hot lunch in the afternoon at Shira cave and an opportunity for a leisure walk around the camp site in the cool evenings while enjoying the sunsets.      ',
      hiking_time:'4-5hours',
      distance: '5.3 km',
      max_altitude: '3839m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '04',
      title: 'Shira Camp to Barranco camp      ',
      description: 'Experience a morning of gradual ascent and sweeping views of Kilimanjaro which brings us near the Lava Tower (14,900 ft) where we will have lunch. The trail then descends to the bottom of the Barranco wall (12,800 ft), where we will stay in the spectacular Barranco Camp sheltered by towering cliffs with extensive views of the plains far below. Barranco camp offers a spectacular view of Kibo Peak; one of the three faces of Kilimanajrao.      ',
      hiking_time:'7-8hours',
      distance: '11 km',
      max_altitude: '3986m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '05',
      title: 'BARANKO TO BARAFU BASE CAMP',
      description: 'Leave Barranco Camp after breakfast for Karanga Valley. The day begins with an hour and a half scramble up the Barranco Wall. This is the best part of the trek and also the most challenging part of the day. In some places you may have to use your hands to pull your body up. After reaching the top, hike through fairly level terrain before making a short but steep descent into the greener Karanga River Valley. At Karanga last water point, we will have lunch before continuing with the climb towards barafu base Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail. At the Barafu camp site we will have a briefing on the guidelines for the summit night followed by a recommended short nap. ',
      hiking_time:'7 hours',
      distance: '10 km',
      max_altitude: '5895m',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '06',
      title: ' Barafu camp to Mweka camp ',
      description: 'Passing close to the spectacular glaciers and ice cliffs that still occupy most of the summit area, the descent to Barafu is surprisingly fast, and after some refreshments, we continue to descend to reach our final campsite, Mweka Camp. We recommend clients to head down to Mweka camp for quicker recovery from the high altitude. ',
      hiking_time:'4 hours',
      distance: '11 km',
      max_altitude: '4600m',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '07',
      title: 'Mweka Camp to Moshi Kilimanjaro',
      description: 'The last day on the descending route will expose you to thick canopy forests characterized by thick undergrowth. The route winds down to the Kilimanjaro National Park gate at Mweka where our climb of Mount Kilimanjaro ends. This is followed by farewells as we transfer you back to your accommodation in Moshi Kilimanjaro.',
      distance: '11 km',
      hiking_time:'4 hours',
      max_altitude: '4600m',
      vegatation:'forest',
      meals: ' Half board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '08',
      title: 'Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
      description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.'
    )
    
  #Machame 7 day itineries
    machame_7 = RouteDuration.find_by(route_id: machame_route.id, duration_days: 7)
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '01',
      title: 'ARRIVAL',
      description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no:'02',
      title: 'Machame gate to Machame camp ',
      description: 'Upon completion of necessary registration formalities at the Machame National Park gate, the trek begins through a beautiful and lush forest. A picnic lunch is served to all at the national park gate. The first day is relatively challenging due to high altitude but the trails pass through a deep forest and adequate time to acclimatize to the high altitude is offered upon reaching the camp site. The route is the considered the best for understanding one’s body as they gradually adapt to the high altitude. The day ends with setting up camp at Machame campsite. ',
      hiking_time:'6 hours',
      distance: '11 km',
      max_altitude: '3021 m',
      vegatation: 'Montana forest',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no:'03',
      title: 'Machame Camp to Shira cave  ',
      description: 'We soon leave the forest behind and enter the moorland zone of giant heather. The trail climbs steadily through rocky hills with wide views of the Shira Plateau. From our camp near Shira Hut, we take in the formidable views of Mt. Meru as she floats atop the clouds. The short day hike provides hot lunch in the afternoon at Shira cave and an opportunity for a leisure walk around the camp site in the cool evenings while enjoying the sunsets.',
      hiking_time:'4-5 hours',
      distance: '5.3 km',
      max_altitude: '3839 m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no:'03',
      title: ' Machame Camp to Shira cave  ',
      description: 'We soon leave the forest behind and enter the moorland zone of giant heather. The trail climbs steadily through rocky hills with wide views of the Shira Plateau. From our camp near Shira Hut, we take in the formidable views of Mt. Meru as she floats atop the clouds. The short day hike provides hot lunch in the afternoon at Shira cave and an opportunity for a leisure walk around the camp site in the cool evenings while enjoying the sunsets.',
      hiking_time:'4-5 hours',
      distance: '5.3 KM',
      max_altitude: '3839 m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '04',
      title: 'Shira Camp to Barranco camp',
      description: 'Experience a morning of gradual ascent and sweeping views of Kilimanjaro which brings us near the Lava Tower (14,900 ft) where we will have lunch. The trail then descends to the bottom of the Barranco wall (12,800 ft), where we will stay in the spectacular Barranco Camp sheltered by towering cliffs with extensive views of the plains far below. Barranco camp offers a spectacular view of Kibo Peak; one of the three faces of Kilimanajrao.      ',
      hiking_time:' 7-8 hours',
      distance: '11 km',
      max_altitude: '3986 m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '05',
      title: 'Baranko Camp to Karanga Camp ',
      description: 'Descending from the top of Barranco wall, experience the thrill of climbing the ridges of the wall steadily and gradually as you descend into the last water point at Karanga Valley. Barranco wall offers a mountain climbing experience for beginners due to its scramble nature which allows climbers with limited or no rock-climbing experience to use all limbs to successfully climb the wall to Karanga valley. From the valley, enjoy a bird’s eye view of Moshi town at the foot of the mountain. Get well rested, acclimatize with a perfect view of Kibo peak at Karanga camp.      ',
      hiking_time:' 4-5 hours',
      distance: '5 km',
      max_altitude: '4035 m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '06',
      title: 'Karanga Camp to Barafu Camp (Summit Night)',
      description: 'After breakfast, begin the hike to Barafu Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail.When we reach to Barafu base camp, start our ascent by torchlight about 1 a.m. so that we can be up on the crater rim by sunrise. The steep climb over loose volcanic screen has some well-graded zigzags and a slow but steady pace will take us to Stella Point (18,800 ft), in about five or six hours. We will rest there for a short time to enjoy the sunrise over Mawenzi. Those who are still feeling strong can make the one-hour round trip from here along the crater rim to Uhuru Peak (19,345 ft). We spend few minutes at the summit for photos and then we begin the descent down to the base camp.      ',
      hiking_time:' 7 hours',
      distance: '4 km',
      max_altitude: '5895 m',
      vegatation: ' Alpine Desert',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '07',
      title: 'Barafu camp to Mweka camp ',
      description: 'Passing close to the spectacular glaciers and ice cliffs that still occupy most of the summit area, the descent to Barafu is surprisingly fast, and after some refreshments, we continue to descend to reach our final campsite, Mweka Camp. We recommend clients to head down to Mweka camp for quicker recovery from the high altitude. ',
      hiking_time:' 4 hours',
      distance: '11 km',
      max_altitude: '4600 m',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '08',
      title: 'Mweka Camp to Moshi Kilimanjaro',
      description: 'The last day on the descending route will expose you to thick canopy forests characterized by thick undergrowth. The route winds down to the Kilimanjaro National Park gate at Mweka where our climb of Mount Kilimanjaro ends. This is followed by farewells as we transfer you back to your accommodation in Moshi Kilimanjaro.',
      distance: '11 km',
      hiking_time:' 3-4 hours',
      max_altitude: '4600 m',
      vegatation: ' Forest',
      meals: 'Half board'
    )
    Itinery.create(
      route_duration_id: machame_6.id,
      day_no: '09',
      title: ' Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
      description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.'
    )

#MARANGU ITINERIES
  marangu_route = Route.find_by(route_name: "Marangu Route")
  #Create marangu 5 day itinery
    marangu_5 = RouteDuration.find_by(route_id: marangu_route.id, duration_days: 5)
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no: '01',
      title: 'Arrival and Pick-up',
      description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive'
    )
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no:'02',
      title: 'Marangu gate to Mandara',
      description: 'Day begins with a drive from accommodation to the Kilimanjaro National Park Marangu gate where you will receive the history of Mount Kilimanjaro before registration. After registration, begin the hike at the Kilimanjaro forest filled with monkeys and the beautiful sounds of the turaco. During the ascent, it is common to spot hikers descending after summit. On reaching Mandara camp, you will be served hot beverages and get a chance to shower and walk around before dinner. The guide will be with you to give the next day’s briefing during dinner.',
      hiking_time:'4-5 hours',
      distance: '8.3 km',
      max_altitude: '1860/2700m/8875ft',
      vegatation: 'Forest',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no:'03',
      title: ' Mandara to Horombo',
      description: 'On this day you will experience increase in altitude and vegetation shift from forest and to moorland. If the weather is friendly, you will gate a nice picture of the two faces of Kilimanjaro; Kibo and Mawenzi. You will also pass the Maundi crater where you will get a nice view of lake Challa which is a volcanic lake on the border of Kenya and Tanzania. After the beautiful hike you will reach Horombo camp where you spend the night in comfortable huts fitted with hot water.',
      hiking_time:'6-7 hours',
      distance: '12km',
      max_altitude: ' 2700M to 3700m/',
      vegatation: 'Heathland',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no: '04',
      title: 'Horombo to Kibo',
      description: 'We climb very gradually towards the lunar desert of the Saddle between Mawenzi and Kibo. The terrain changes to resemble high altitude wilderness. We usually reach Kibo Hut at the bottom of the crater wall by midday and the afternoon is free for relaxation and acclimitizing. The remainder of the day is spent resting and eating in preparation for the highly anticipated summit night. You will receive a briefing on the summit night’s requirements and safety measures before an early nap.      ',
      hiking_time:'4-5 hours',
      distance: '9.5 km',
      max_altitude: '3700m to 4714m',
      vegatation: 'Alpine Desert',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no: '05',
      title: 'Kibo base camp to summit/ Horombo camp',
      description: 'We will start our ascent by torchlight at about 1 a.m. so that we can be up at Gillman’s Point by sunrise. The initial climb is steep, but there are some well-graded zigzags and with a slow but steady pace, all should reach Gillman’s point in five to six hours. We will rest here and spend some time taking in the sunrise over Mawenzi. We will reach the summit after an hour and a half. Here time is spent taking pictures and celebrating reaching the summit briefly.',
      hiking_time:'6 hours',
      distance: '6.25 km',
      max_altitude: ' 4714m to 5895m',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no: '06',
      title: 'Horombo to National Park Gate ',
      description: 'We will retrace our steps with a pleasant moorland walk to Mandara followed by a lovely forest walk to the National Park gates. After farewells, we will board the company vehicles and head back to Moshi town marking the end of a successful summit on Mount Kilimanjaro.      ',
      hiking_time:'7 hours',
      distance: '21 km',
      max_altitude: '1860m-3700m',
      vegatation: 'Forest',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_5.id,
      day_no: '07',
      title: 'Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
      description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.'
    )
  #Creatte marangu 6 day itinery
    marangu_6 = RouteDuration.find_by(route_id: marangu_route.id, duration_days: 6)
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no: '01',
      title: 'Arrival and Pick-up',
      description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.' 
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no:'02',
      title: 'Marangu gate to Mandara',
      description: 'Day begins with a drive from accommodation to the Kilimanjaro National Park Marangu gate where you will receive the history of Mount Kilimanjaro before registration. After registration, begin the hike at the Kilimanjaro forest filled with monkeys and the beautiful sounds of the turaco. During the ascent, it is common to spot hikers descending after summit. On reaching Mandara camp, you will be served hot beverages and get a chance to shower and walk around before dinner. The guide will be with you to give the next day’s briefing during dinner.',
      hiking_time:'4-5 hours',
      distance: '8.3 km',
      max_altitude: '2700m',
      vegatation: 'Forest',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no:'03',
      title: 'Mandara to Horombo',
      description: 'On this day you will experience increase in altitude and vegetation shift from forest and to moorland. If the weather is friendly, you will gate a nice picture of the two faces of Kilimanjaro; Kibo and Mawenzi. You will also pass the Maundi crater where you will get a nice view of lake Challa which is a volcanic lake on the border of Kenya and Tanzania. After the beautiful hike you will reach Horombo camp where you spend the night in comfortable huts fitted with hot water. ',
      hiking_time:'6-7 hours',
      distance: '12 km',
      max_altitude: ' 2700/8875ft to 3700m/12,200ft',
      vegatation: 'Heathland',
      meals: 'Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no: '04',
      title: ' Acclimatization at Horombo',
      description: 'Guests spend the day on leisure walks around Horombo camp to acclimatize. Walk up to Zebra rock near Mawenzi peak at a leisure pace, taking scenic pictures of Mawenzi peak followed by a short walk back to the camp site for lunch. This day is specifically set aside for high altitude acclimatization.       ',
      hiking_time:'4 hours',
      distance: '5 km',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no: '05',
      title: 'Horombo to Kibo base camp',
      description: 'We climb very gradually towards the lunar desert of the Saddle between Mawenzi and Kibo. The terrain changes to resemble high altitude wilderness. We usually reach Kibo Hut at the bottom of the crater wall by midday and the afternoon is free for relaxation and acclimitizing. The remainder of the day is spent resting and eating in preparation for the highly anticipated summit night. You will receive a briefing on the summit night’s requirements and safety measures before an early nap.',
      hiking_time:'4-5 hours',
      distance: '9.5 km',
      max_altitude: ' 3700m/12,208ft to 4714m/15.466ft',
      vegatation: 'Alpine Desert',
      meals: ' Full board',
      accomodation: 'Hut'
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no: '06',
      title: 'Kibo base camp to summit/ Horombo camp',
      description: 'We will start our ascent by torchlight at about 1 a.m. so that we can be up at Gillman’s Point by sunrise. The initial climb is steep, but there are some well-graded zigzags and with a slow but steady pace, all should reach Gillman’s point in five to six hours. We will rest here and spend some time taking in the sunrise over Mawenzi. We will reach the summit after an hour and a half. Here time is spent taking pictures and celebrating reaching the summit briefly.',
      hiking_time:'6 hours',
      distance: '6.25 km',
      max_altitude: '4714m to 5895m',
      meals: ' Full board'
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no: '07',
      title: 'Horombo to National Park Gate ',
      description: 'We will retrace our steps with a pleasant moorland walk to Mandara followed by a lovely forest walk to the National Park gates. After farewells, we will board the company vehicles and head back to Moshi town marking the end of a successful summit on Mount Kilimanjaro.',
      hiking_time:'7 hours',
      distance: '21 km',
      max_altitude: '3700m',
      vegatation: 'Forest' 
    )
    Itinery.create(
      route_duration_id: marangu_6.id,
      day_no: '08',
      title: ' Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
      description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.'
    )
   
#LONDOS ITINERIES
 londos_route = Route.find_by(route_name: "Londos Route")
 #Create londos 7 day itinery
   londos_7 = RouteDuration.find_by(route_id: londos_route.id, duration_days: 7)
    Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '01',
    title: ' Arrival and Pick – Up',
    description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.    ',
    meals: 'Breakfast',
    accomodation: 'Hotel'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no:'02',
    title: 'MURAM TO SHIRA 1 CAMP',
    description: 'This is one of the shortest routes you can take from Kilimanjaro in a western side of the mountain. Though you will miss the forest the route is recommended for those who wish to climb the mountain with limited time. The safari jeep with take you into the national park. You will embark on a short trek and pass by rivers and plateaus before reaching Shira 1 camp',
    hiking_time:'3 hours',
    distance: '4 km',
    max_altitude: '3600m',
    vegatation: 'Moorland',
    meals: ' Full board',
    accomodation: 'Camping'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no:'03',
    title: 'SHIRA 1 CAMP TO SHIRA 2 CAMP',
    description: 'As you embark on the day two climb, you/ll experience a true sense of the wilderness, particularly when the afternoon mist descends. At the Shira 2 camp, bask in the unforgettable sights of Mt. Meru and the surreal evening sunset over Shira Peak. It/s a breathtaking unforgettable experience on your Kilimanjaro tour.',
    hiking_time:'4-5 hours',
    distance: '10 km',
    max_altitude: '3810',
    vegatation: 'Moorland',
    meals: ' Full board',
    accomodation: 'Camping'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '04',
    title: 'SHIRA 2 CAMP TO BARANKO CAMP ',
    description: 'Embark on an exhilarating Kilimanjaro hiking adventure via the picturesque Lemosho route, where you will experience a sustained ascent with breathtaking panoramic views. After a morning of trekking, refuel with a well-deserved lunch break near Lava Tower, standing tall at 14,900 feet. The trail then descends to the Barranco Valley, nestled at 12,800 feet, offering a spectacular view of towering cliffs and sweeping vistas of the plains far below. Stay overnight at the stunning Barranco Camp, where you can bask in the beauty of the surrounding landscape and marvel at the wonders of nature.    ',
    hiking_time:'6-7 hours',
    distance: '11 km',
    max_altitude: '4600m',
    vegatation: 'Moorland',
    meals: ' Full board',
    accomodation: 'Camping'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '05',
    title: 'BARANKO TO KARANGA CAMP',
    description: 'Leave Barranco Camp after breakfast for Karanga Valley. The day begins with an hour and a half scramble up the Barranco Wall. This is the best part of the trek and also the most challenging part of the day. In some places you may have to use your hands to pull your body up. After reaching the top, hike through fairly level terrain before making a short but steep descent into the greener Karanga River Valley. Karanga Camp is located on the ridge above the river valley. ',
    hiking_time:'4-5 hours',
    distance: '6 km',
    max_altitude: 'Moorland',
    vegatation: 'Forest',
    meals: ' Full board',
    accomodation: 'Camping'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '06',
    title: 'KARANGA CAMP TO BARAFU BASE CAMP',
    description: 'After breakfast, begin the hike to Barafu Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail.When we reach to Barafu base camp, start our ascent by torchlight about 1 a.m. so that we can be up on the crater rim by sunrise. The steep climb over loose volcanic screen has some well-graded zigzags and a slow but steady pace will take us to Stella Point (18,800 ft), in about five or six hours. We will rest there for a short time to enjoy the sunrise over Mawenzi. Those who are still feeling strong can make the one-hour round trip from here along the crater rim to Uhuru Peak (19,345 ft). We spend few minutes at the summit for photos and then we begin the descent down to the base camp.',
    hiking_time:'7 hours',
    distance: '10 km',
    max_altitude: '5895 m',
    vegatation: 'Alpine Desert',
    meals: ' Full board',
    accomodation: 'Camping'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '07',
    title: 'BARAFU BASE CAMP TO MWEKA CAMP',
    description: 'Passing close to the spectacular glaciers and ice cliffs that still occupy most of the summit area, the descent to Barafu is surprisingly fast, and after some refreshments, we continue to descend to reach our final campsite, mweka Camp (12,500 ft). ',
    hiking_time:'4 hours',
    distance: '11 km',
    max_altitude: '4600 m',
    vegatation: 'Summit zone to rain forest',
    meals: ' Full board',
    accomodation: 'Hut'
   )
   Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '08',
    title: 'Marangu gate to Mandara',
    description: 'A sustained descent on a well constructed path takes us through a lovely tropical forest alive with birdsong and boasting lush undergrowth with considerable botanical interest. Our route winds down to the Kilimanjaro National Park gate at Mweka (5,400 ft); and on through coffee and banana farms to Mweka village, where we are transferred to your accommodation.',
   )

   Itinery.create(
    route_duration_id: londos_7.id,
    day_no: '09',
    title: 'Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
    description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.',
   )

#RONGAI ITINERIES
  rongai_route = Route.find_by(route_name: "Rongai Route")
  #Create Rongai 8 day itinery
    rongai_8 = RouteDuration.find_by(route_id: rongai_route.id, duration_days: 8)
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no: '01',
      title: 'Arrival and Pick-Up',
      description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.  '
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no:'02',
      title: 'Rongai Gate to Simba Camp site',
      description: 'After an early breakfast in Moshi or Arusha, drive to Rongai Gate near the Kenya border. After registering at the gate, begin your climb to Uhuru Peak also known as the roof of Africa. Hike through forests where you may see and hear wildlife. Eat lunch on the trail before continuing to the first campsite. Rongai ascends via the less forested northern side of the mountain. The Rongai Route is one of the least crowded routes on Kilimanjaro because of the long drive to the gate. The Rongai trail is thought to have the best chance of viewing wildlife.      ',
      hiking_time:'4 hours',
      distance: '8.3 km',
      max_altitude: '2600',
      vegatation: 'Forest',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no:'03',
      title: 'Simba camp to Kikelewa Camp',
      description: 'Trek through Mount Kilimanjaro/s moorland on this day and enjoy the view of Mawenzi peak. The Rongai route is relatively short and steep, making for shorter hiking times. Caves, rolling hills and valleys provide the perfect backdrop for this days’ trek towards Kikelewa camp.',
      hiking_time:'6 hours',
      distance: '16 km',
      max_altitude: '3600m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no: '04',
      title: 'Kikelewa Camp to Mawenzi Tarn Hut. ',
      description: 'Take time to acclimatization to the high altitude by hiking in the beginning of the day and resting in the afternoon and evening. The hike is relatively short but steep. The Mawenzi Tarn campsite is situated below Mawenzi Peak and offers stunning views of both Mawenzi and Kibo. ',
      hiking_time:'3 hours',
      distance: '3 km',
      max_altitude: '3600 m',
      vegatation: 'Moorland',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no: '05',
      title: 'Mawenzi  Camp to Kibo base Camp',
      description: 'Cross the lunar landscape of the saddle on this day to arrive at the final campsite. Kibo Camp is situated directly below the Kibo cone, giving you views of your final destination. A briefing for the upcoming summit night trek will be held followed by a recommended nap before the night trek.      ',
      hiking_time:'5 hours',
      distance: '6 km',
      max_altitude: '4720m',
      vegatation: 'Alpine Desert',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no: '06',
      title: ' Horombo to National Park Gate ',
      description: 'We will retrace our steps with a pleasant moorland walk to Mandara followed by a lovely forest walk to the National Park gates. After farewells, we will board the company vehicles and head back to Moshi town marking the end of a successful summit on Mount Kilimanjaro.      ',
      hiking_time:'7 hours',
      distance: '21 km',
      max_altitude: '3700m',
      vegatation: 'Forest',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no: '07',
      title: 'Horombo to National Park Gate ',
      description: 'We will retrace our steps with a pleasant moorland walk to Mandara followed by a lovely forest walk to the National Park gates. After farewells, we will board the company vehicles and head back to Moshi town marking the end of a successful summit on Mount Kilimanjaro.',
      hiking_time:'7 hours',
      distance: '21 km',
      max_altitude: '1860/2700m/8875ft',
      vegatation: 'Forest',
      meals: ' Full board',
      accomodation: 'Camping'
    )
    Itinery.create(
      route_duration_id: rongai_8.id,
      day_no: '08',
      title: 'Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings. ',
      description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.',
    )
     
    

#UMBWE ITINERIES 
 umbwe_route = Route.find_by(route_name: "Umbwe Route")
 #Create umbwe 6 day itinery
   umbwe_6 = RouteDuration.find_by(route_id: umbwe_route.id, duration_days: 6)
   Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no: '01',
    title: 'Arrival and Pick-up',
    description: 'When you land at Kilimanjaro International Airport, Lauwo Adventure staff will be there to welcome you and accompany you throughout your entire Kilimanjaro experience. Your guide will assist you with settling in and provide you with a brief orientation, before driving you to your accommodation for the first night in Kilimanjaro. As a top-ranked Kilimanjaro tour company, we are committed to providing you with exceptional service from the moment you arrive.    '
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no:'02',
    title: 'Umbwe Park Gate to Umbwe Cave camp.',
    description: 'After breakfast, Lauwo Adventures team introduces the crew and drives to Umbwe Park Gate (4100ft) for registration process before starting the hike to the first camp, Umbwe Cave camp. The hike passes through lush Montana Forest with wildlife, small bushbucks, and duikers. Spend the night in a small clearing on the trail.',
    hiking_time:'5-6 hours',
    distance: '11 km',
    max_altitude: '1600 m',
    vegatation: 'Forest',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no:'03',
    title: ' Umbwe Cave Camp to Barranco Camp ',
    description: 'The hike continues through giant heath, gradually narrowing and sharpening into a knife-edge with stunning views of both Kilimanjaro’s southern flank and across Mount Meru. The day ends at Barranco Camp where clients rest up for the night.    ',
    hiking_time:'5 hours',
    distance: '7 km',
    max_altitude: '2940m',
    vegatation: 'Forest',
    meals: 'Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no: '04',
    title: 'Baranko Camp to Karanga Camp ',
    description: 'Descending from the top of Barranco wall, experience the thrill of climbing the ridges of the wall steadily and gradually as you descend into the last water point at Karanga Valley. Barranco wall offers a mountain climbing experience for beginners due to its scramble nature which allows climbers with limited or no rock-climbing experience to use all limbs to successfully climb the wall to Karanga valley. From the valley, enjoy a bird’s eye view of Moshi town at the foot of the mountain. Get well rested, acclimatize with a perfect view of Kibo peak at Karanga camp.    ',
    hiking_time:'4-5 hours',
    distance: '5 km',
    max_altitude: '4035m',
    vegatation: 'Moorland',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no: '05',
    title: ' Karanga Camp to Barafu Camp (Summit Night)',
    description: 'After breakfast, begin the hike to Barafu Camp. On the way to Barafu, view several of Kibo/s glaciers as well as the junction that connects the descent Mweka route with the Machame trail.When we reach to Barafu base camp, start our ascent by torchlight about 1 a.m. so that we can be up on the crater rim by sunrise. The steep climb over loose volcanic screen has some well-graded zigzags and a slow but steady pace will take us to Stella Point (18,800 ft), in about five or six hours. We will rest there for a short time to enjoy the sunrise over Mawenzi. Those who are still feeling strong can make the one-hour round trip from here along the crater rim to Uhuru Peak (19,345 ft). We spend few minutes at the summit for photos and then we begin the descent down to the base camp.    ',
    hiking_time:'7 hours',
    distance: '4 km',
    max_altitude: '5895m',
    vegatation: 'Alpine Desert',
    meals: ' Full board',
    accomodation: 'Camping'
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no: '06',
    title: 'Barafu camp to Mweka camp ',
    description: 'Passing close to the spectacular glaciers and ice cliffs that still occupy most of the summit area, the descent to Barafu is surprisingly fast, and after some refreshments, we continue to descend to reach our final campsite, Mweka Camp. We recommend clients to head down to Mweka camp for quicker recovery from the high altitude.     ',
    hiking_time:'4 hours',
    distance: '11 km',
    max_altitude: '4600m',
    meals: ' Full board',
    accomodation: ' Camping'
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no: '07',
    title: 'Mweka Camp to Moshi Kilimanjaro    ',
    description: 'The last day on the descending route will expose you to thick canopy forests characterized by thick undergrowth. The route winds down to the Kilimanjaro National Park gate at Mweka where our climb of Mount Kilimanjaro ends. This is followed by farewells as we transfer you back to your accommodation in Moshi Kilimanjaro.    ',
    hiking_time:'3-4 hours',
    distance: '11 km',
    vegatation: 'Forest',
    meals: ' Half board'
  )
  Itinery.create(
    route_duration_id: umbwe_6.id,
    day_no: '08',
    title: ' Departure day or Alternate fun activities *A 10% discount offered for mountain + 1 other safari bookings.     ',
    description: 'One can opt for a holiday safari at the white sandy beaches in Zanzibar, local project visits, cultural tours, cycling day tours or an exclusive safari trip.' 
  )
 