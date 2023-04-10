puts 'seeding safaris..'
 three = Safari.create!(name:"3 day safari", duration: "3 days", image_url:"https://images.unsplash.com/photo-1662003905953-f2aa253c48df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")

 SafariItinery.create! ([
    {
       day: 1,
       title:"Arrival and Pick-up",
       description:"Arrival in Tanzania at the Kilimanjaro International Airport, you'll be met by experienced lauwo adventures staff who will transfer you to your hotel in Arusha. You'll spend the night at the beautiful African Tulip Hotel, where you can relax and unwind after your journey.",
       mealplan:"No meals included",
       distance:0,
       image_url: "https://images.unsplash.com/photo-1508353326029-2758a3deef25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
       safari_id:1
    },
   
     {
        day: 2,
        title:" Serengeti Game Drive ",
        description:"After a hearty breakfast at your hotel, you'll begin your safari adventure with a drive to the Ndutu area through the Ngorongoro Conservation Area and Ndutu area. From December to May, the plains of Ndutu are home to an abundance of wildebeest, zebra, and antelope as they calve on the fertile grasslands. You'll witness the impressive great wildebeest migration - a natural phenomenon that attracts a variety of predators. You'll return to your lodge for lunch before heading out for an afternoon game drive in search of more wildlife.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1623952625109-6c47a93f675c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
        safari_id:1
     }, 
     {
        day: 3,
        title:" Serengeti - Ngorongoro Game Drive ",
        description:"Embark on an early morning game drive in the Serengeti National Park. You'll have the opportunity to spot lions, elephants, giraffes, zebras, hippos, flamingos, jackals, rhinos, antelopes, and many other species. You'll then continue your game drive en route to the Ngorongoro Conservation Area. You'll spend the night at the Ngorongoro Crater Lodge.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1602410132231-9e6c692e02db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        safari_id:1
     },
     {
        day: 4,
        title:"Ngorongoro Crater Game Drive ",
        description:"Today, you'll wake up early for a game drive to see nocturnal predators returning from hunting and animals waking up in the early morning light. You'll then continue your game drive in the Ngorongoro Crater, which is home to an incredible variety of wildlife. In the evening, you'll drive back to Arusha for your final night in Tanzania. ",
        mealplan:"Bed and Breakfast",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1537690381844-9da2b0b69640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmdvcm9uZ29ybyUyMGNyYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        safari_id:1
     },
     {
        day: 5,
        title:"Departure",
        description:"After breakfast, you'll be transferred to Arusha Airport or Kilimanjaro International Airport for your departure. Alternatively, you may choose to extend your trip with a visit to Zanzibar or other destinations in Tanzania.",
        mealplan:"Breakfast",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1583150647472-d239652a12f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVwYXJ0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        safari_id:1
     }

  ])



 four = Safari.create!(name:"4 days safari", duration:"4 days", image_url:"https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 ")

 SafariItinery.create! ([
    {
       day: 1,
       title:"Arrival and Pick-up",
       description:"On arrival, you will be picked up at the Kilimanjaro International Airport and transferred to your hotel in Arusha town by our experienced personnel. Here you will meet your guide who will brief you on your upcoming safari. All the basic information about your safari will be given to you by the lauwo Adventure safari guide.",
       mealplan:"No meals included",
       distance:0,
       image_url: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXQlMjBraWxpbWFuamFybyUyMGludGVybmF0aW9uYWwlMjBhaXJwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
       safari_id:2
    },
   
     {
        day: 2,
        title:"Lake Manyara National Park",
        description:"Depart from Moshi to Lake Manyara National Park, where you'll enjoy a diverse range of habitats, including the shores of Lake Manyara where you'll see flamingos. You'll have the chance to spot numerous wildlife species, including elephants, giraffes, hippos, impalas, and the largest concentration of baboons in the world. You'll have a picnic lunch inside the park before heading to Karatu town for the night.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1641133293407-9455bfb409aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMG1hbnlhcmElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        safari_id:2
     }, 
     {
        day: 3,
        title:" Serengeti National Park",
        description:" After breakfast, set off for Serengeti National Park, passing the crater rim along the way. You'll stop for a picnic lunch on a kopje; an island in a sea of grass, before continuing your game drive in the Serengeti. You'll spend the night at Central Serengeti, with the option to select any lodge in Seronera.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1623951581058-58138db08519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        safari_id:2
     },
     {
        day: 4,
        title:"Ngorongoro Conservation Area ",
        description:" Your day begins with a morning game drive in the Serengeti, where you'll witness the food chain in motion and may spot predators like lions and wild dogs. You'll have the chance to see numerous wildlife species, including leopards, hippos, buffalo, elephants, and rhinos. After lunch, you'll depart for Ngorongoro Crater and arrive at your lodge near the rim in the late afternoon. You'll have dinner at the lodge, with the option to select any lodge within Ngorongoro conservation area.",
        mealplan:"Bed and Breakfast",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1542882346-4b19cc95a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        safari_id:2
     },
     {
        day: 5,
        title:"Ngorongoro Crater Game Drive",
        description:" You'll have an early departure from the lodge to spot game in the Ngorongoro Crater, where you may see representatives of the 'big five' (elephant, lion, leopard, buffalo, rhino) as well as zebra, hippo, wildebeest, and hyenas. You'll enjoy a picnic lunch inside the crater and have the chance to see a diverse range of flora and fauna. Your game drive will end in the late afternoon, and you'll proceed to Arusha or Moshi. Transportation to the airport can be arranged.",
        mealplan:"Breakfast",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1615209635653-52e675012cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmdvcm9uZ29ybyUyMGNyYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        safari_id:2
     },
     {
        day: 6,
        title:"Departure",
        description:"Take a break and relax in the hotel before your departure. The check-out time is 11:00 am, but if you have an evening flight and need a late check-out, you can extend your stay till 6:00 PM for an additional fee.",
        mealplan:"Breakfast",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1600184029839-58530ba111e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlcGFydHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        safari_id:2
     }

  ])



 five = Safari.create!(name:"5 days safari", duration:"5 days", image_url:"https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")

 SafariItinery.create! ([
    {
       day: 1,
       title:"Moshi/Arusha Tarangire National Park",
       description:" A short briefing will be held in the morning before setting out to Tarangire National Park which is known for its large elephant population in Northern Tanzania. The park features endless tree savannah, including impressive baobab trees and seasonal marshes. Besides elephants, you're likely to spot giraffes, buffaloes, lions, zebras, gnus, and other types of antelopes and gazelles. Upon arrival, your guide will open the roof of the vehicle for extensive wildlife viewing.
       Have lunch at a picnic spot and continue exploring the park in the afternoon. In the late afternoon, you will arrive at Karatu for your overnight stay.",
       mealplan:"lunch",
       distance:0,
       image_url: "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5nb3Jvbmdvcm8lMjBjcmF0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
       safari_id:3
    },
   
     {
        day: 2,
        title:"Tarangire National Park to Serengeti National Park ",
        description:"Depart for Serengeti through Karatu, passing through the cooler regions of the crater highlands. Soon enter the Ngorongoro Conservation Area and stop for a short look into the crater from a viewing point. You'll continue around the crater, descending the other side and passing Maasai villages on the way to Serengeti National Park.
        At the Naabi Hill entrance gate, you can walk to a viewpoint with spectacular views across the plains of the Serengeti savannah. Continue towards the Seronera Area in the central part of the Serengeti, which offers a multitude of wildlife including the Big Five  lion, elephant, buffalo, rhino, and leopard. Late in the afternoon, you will arrive at the Serengeti Heritage Luxury Tented Camp.",
        mealplan:"Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1602410141957-ee70b4739066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Tmdvcm9uZ29ybyUyMENvbnNlcnZhdGlvbiUyMEFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        safari_id:3
     }, 
     {
        day: 3,
        title:" Serengeti National Park",
        description:" Spend the whole day on a game drive in the Serengeti National Park and have lunch at a picnic spot en-route. Depending on the time of year, you might even have the chance to witness the great migration with hundreds of thousands of wildebeests, zebras, and Thompson gazelles. During the small rainy season in October and November, you will typically see these herds moving from the Kenyan Masai Mara through the Northwest of the Serengeti to the plains in the south. Our guide will try their utmost to find the animals and ensure that you can see them from the best spot in the national park. Naturally, the migration also attracts predators, and with luck, you might see a kill in action. You will spend another night at central Serengeti.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1602410141957-ee70b4739066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        safari_id:3
     },
     {
        day: 4,
        title:"Ngorongoro Conservation Area ",
        description:"At daybreak, start on your outward journey from the Serengeti back to the Ngorongoro Conservation Area, leaving behind the beautiful Seronera Valley. As predators are livelier in the cooler hours of the day, you might even see them in action. Stopover at Olduvai Gorge, where the anthropologists Dr. Lois and Mary Leakey discovered the skulls of '\\Nutcracker Man\\' and '\\Handy Man,\\' both significant links in the chain of human evolution. Late in the afternoon, transfer to Ngorongoro Tortilis for dinner and overnight.",
        mealplan:"Breakfast, lunch and Dinner",
        distance:0,
        image_url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Plaque_marking_the_discovery_of_Australopithecus_in_Tanzania.jpg",
        safari_id:3
     },
     {
        day: 5,
        title:"Ngorongoro Crater Game Drive and Departure",
        description:"Descend over 600 meters into the Ngorongoro Crater to view wildlife after an early morning breakfast. Supported by a year-round water supply and fodder, the Ngorongoro Conservation Area boasts of a vast variety of animals, which include herds of wildebeest, zebra, buffalo, eland, warthog, and hippo.
        Return to Moshi for dinner and overnight after the game drive. Transportation arrangements to the airport for departure the following day are made in advance.",
        mealplan:"Breakfast and Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1646323277558-0c903f62e658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Tmdvcm9uZ29ybyUyMENvbnNlcnZhdGlvbiUyMEFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        safari_id:3
     }


 ])




 six = Safari.create!(name:"6 days safari", duration:"6 days",image_url:"https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" )


 SafariItinery.create! ([
    {
       day: 1,
       title:" ARRIVE IN TANZANIA",
       description:"On arrival, you will be picked up at the Kilimanjaro International Airport and transferred to your hotel in Arusha town by our experienced personnel. Here you will meet your guide who will brief you on your upcoming safari. All the basic information about your safari will be given to you by the lauwo Adventure safari guide.",
       mealplan:"No meals included",
       distance:0,
       image_url: "https://images.unsplash.com/photo-1561101904-da649fcbf03f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
       safari_id:4
    },
   
     {
        day: 2,
        title:"ARUSHA - TARANGIRE NATIONAL PARK ",
        description:" In the morning, you will be picked up from your acommodation to start your safari to the Tarangire National Park. Bush savannah, seasonal swamps, and giant baobab trees make up the landscape of this nature reserve, and the park is probably one of the best places in East Africa to see elephants. Not only are they found in thousands, but also they seem to be more accustomed to the vehicles and for this, you can be closer to these gigantic animals. It is not only the elephants, rather a varied number of animals such as Masai giraffes, various gazelles, antelopes, buffaloes, lions, leopards, baboons, and more than 500 types of birds make this the one-stop solution for both the bird and the animal lovers. After the game drive, you will leave the park in the late afternoon and drive to the campsite for your overnight stay.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:140,
        image_url: "https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        safari_id:4
     }, 
     {
        day: 3,
        title:"MTO WA MBU-SERENGETI NATIONAL PARK",
        description:" After breakfast, we head towards the Serengeti National Park, via the beautiful high lying farmland of Karatu and the Ngorongoro Conservation Area. Leaving the highlands behind, we descend into the heart of wild Africa – the Serengeti National Park  with its endless plains rolling into the distance as far as the eye can see. We head to the central park area, known as the Seronera area, one of the richest wildlife habitats in the park, featuring the Seronera River, which provides a valuable water source to this area and therefore attracts wildlife well representative of most of the Serengeti\\'s species. We arrive in time for lunch and enjoy an afternoon game drive in the Serengeti National Park. After your tour around the park, you will be transferred to your campsite where you will be spending the night.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:205,
        image_url: "https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        safari_id:4
     },
     {
        day: 4,
        title:" SERENGETI NATIONAL PARK ",
        description:"The entire day is dedicated to game viewing in the Serengeti National Park. The areas that you will visit will depend upon where the migrating herds are to be found. Predators usually follow closely behind the trekking animals. During the short rainy season in November and December, the herds move from the hills in the north to the plains in the south. During the longer rainy season from April to June, they return up north. As the migration depends upon the yearly rains, the location of the herds might vary from year to year, but our guide will know where to see them best. You will spend another night at the same lodge.",
        mealplan:"Breakfast,Lunch and Dinner",
        distance:145,
        image_url: "https://images.unsplash.com/photo-1580145575237-75fec2a0320b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        safari_id:4
     },
     {
        day: 5,
        title:"SERENGETI NATIONAL PARK AND NGORONGORO CONSERVATION AREA",
        description:"Begin the day with a hearty breakfast before embarking on another exciting game drive in the Serengeti National Park. With the opportunity to spot different animals from the past two days, you could have a chance to encounter the famous 'Big Five\'- including lion, elephant, buffalo, rhino, and leopard. After a delightful picnic lunch, continue towards the Ngorongoro Crater. As you approach the crater's edge, marvel at the expansive approximately 20 km wide caldera that has been recognized as a UNESCO World Heritage Site.",
        mealplan:"Breakfast, Lunch and Dinner",
        distance:25,
        image_url: "https://images.unsplash.com/photo-1598429335792-9e15e762c762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        safari_id:4
     },
     {
        day: 6,
        title:"EXPLORE THE NGORONGORO CRATER AND MTO WA MBU ",
        description:"Fuel up with a delicious breakfast before descending into the world's largest caldera - the Ngorongoro Crater. Discover the diverse wildlife inhabiting the forests on the slopes, including black rhinos, Grant’s and Thomson\'s gazelles, lions and leopards, elephants, and mountain reedbucks. You may also spot buffaloes, spotted hyenas, and over 500 bird species that reside in the area. Enjoy an extensive game drive and savor a picnic lunch before leaving the crater in the afternoon and heading to Mto wa mbu campsite.",
        mealplan:"Breakfast, Lunch and Dinner",
        distance:145,
        image_url: "https://images.unsplash.com/photo-1633102216183-dd50a5ab399b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        safari_id:4
     },
     {
      day: 7,
      title:" EXPLORE LAKE MANYARA NATIONAL PARK AND RETURN TO ARUSHA/AIRPORT  ",
      description:"After breakfast, visit Lake Manyara National Park, which is famous for over 400 bird species, primate-filled forests, and vast grassy plains. The park features the alkaline Lake Manyara, which hosts colonies of flamingos and other water birds. While exploring the grassy plains, you may spot giraffes, hippos, wildebeests, and impalas, and in the woodlands, you might see elephants feeding on the acacias while lions lounge in the trees. The forest surrounding the lake is filled with noisy troops of blue monkeys, and baboon families are frequently seen around the roads. After the game drive, return to Moshi/Arusha in the late afternoon.",
      mealplan:"Breakfast and Lunch",
      distance:175,
      image_url: "https://images.unsplash.com/photo-1553520077-205eb37650fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsYW1pbmdvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      safari_id:4
   }, {
      day: 8,
      title:"DEPARTURE DAY",
      description:"Take a break and relax in the hotel before your departure. The check-out time is 11:00 am, but if you have an evening flight and need a late check-out, you can extend your stay till 6:00 PM for an additional fee.",
      distance:0,
      image_url: "https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlycGxhbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      safari_id:4
   }


 ])






 seven = Safari.create!(name:"7 days safari", duration:"7 days",image_url:"https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80")
 SafariItinery.create! ([
    {
       day: 1,
       title:" Arusha National Park. ",
       description:"Start early in the morning from Moshi and drive to Arusha National Park. Enjoy a game drive in the park, explore the shores of Lake Momella, and walk through lush forests with an armed ranger to see black and white colobus monkeys. Spend the night at a lodge in Arusha.",
       mealplan:"Breakfast and Lunch",
       distance:0,
       image_url: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
       safari_id:5
    },
   
     {
        day: 2,
        title:"Tarangire National Park",
        description:"Leave early from Arusha and head to Tarangire National Park, known for its unique vegetation and diverse wildlife, including the famous yellow-collared lovebirds. Spot animals such as elephants, lions, impalas, cheetahs, and buffalos. After a fascinating day, drive to Karatu town and relax there for the night.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://i.pinimg.com/564x/d4/17/bf/d417bf9fed5a0f9156320eeabd1e4d94.jpg",
        safari_id:5
     }, 
     {
        day: 3,
        title:" Serengeti Safaris",
        description:"Drive to Serengeti National Park, world-famous for the seasonal migration of wildebeest and home to the largest concentration of wildlife such as lions, gazelles, zebras, elephants, and giraffes. Enjoy a break on a kopje and continue exploring the park. Spend the night at a lodge in central Serengeti.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1635514398607-8ab476aed84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        safari_id:5
     },
     {
        day: 4,
        title:"Serengeti National Park",
        description:"Spend a full day exploring the endless plains of Serengeti National Park and witness the Great Migration of wildebeest if you visit at the right time of the year. Observe other animals up close; spot lions, leopards, cheetahs, water buffalos, hyenas, gazelles, crocodiles, and other animals. ",
        mealplan:"Breakfast, Lunch and Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1628100611772-87b500d254f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        safari_id:5
     },
     {
        day: 5,
        title:"Ngorongoro Crater Game Drive",
        description:"Leave early from Serengeti National Park and drive to Ngorongoro Crater, a UNESCO World Heritage Site and the world's largest inactive and intact volcanic caldera. Enjoy a game drive and spot animals such as black rhinos, leopards, hyenas, elephants, and lions. Spend the night at a lodge in Karatu.",
        mealplan:"Breakfast,Lunch and Dinner",
        distance:0,
        image_url: "https://plus.unsplash.com/premium_photo-1666433611166-949ea5d9c3c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        safari_id:5
     },
     {
        day: 6,
        title:"Lake Manyara National Park",
        description:"Drive to Lake Manyara National Park, famous for its tree-climbing lions, pink flamingos, and diverse birdlife. Enjoy a game drive in a park filled with elegant baobabs and diverse animals such as buffalos, elephants, giraffes, zebras, and baboons. Drive back to Karatu for the night.",
        mealplan:"Breakfast, Lunch and Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1563204996-8965f0a4a860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lyYWZmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        safari_id:5
     },
     {
      day: 7,
      title:"Departure",
      description:"After breakfast, drive back to Arusha marking the end to the safari.",
      mealplan:"Breakfast",
      distance:0,
      image_url: "https://images.unsplash.com/photo-1535284616907-29a0e221d893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      safari_id:5
   }


 ])


 eight = Safari.create!(name:"8 days safari", duration:"8 days",image_url:"https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

 SafariItinery.create! ([
    {
       day: 1,
       title:"Arrival and Pick-up",
       description:"Arrival in Tanzania at the Kilimanjaro International Airport, you'll be met by experienced lauwo adventures staff who will transfer you to your hotel in Arusha. You'll spend the night at the beautiful African Tulip Hotel, where you can relax and unwind after your journey.",
       mealplan:"Bed and Brealfast",
       distance:0,
       image_url: "https://images.unsplash.com/photo-1680323512021-942480c0d52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGFycml2YWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
       safari_id:6
    },
   
     {
        day: 2,
        title:"Moshi/Arusha to Tarangire National Park ",
        description:"Drive to Tarangire National Park with a focus on the elegant imposing baobabs, diversity of wildlife including lions, leopards, cheetahs, and up to six thousand elephants. Stay overnight in Karatu.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1603142060625-13aead80ac31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        safari_id:6
     }, 
     {
        day: 3,
        title:" Tarangire to Central Serengeti National Park ",
        description:"Get set on your safari towards Serengeti National Park, stopping at Olduvai Gorge where significant human life discoveries were made. Proceed with a game drive and stay overnight at Central Serengeti.",
        mealplan:"Breakfast, Lunch & Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1630249930924-d84b5519cc4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1852&q=80",
        safari_id:6
     },
     {
        day: 4,
        title:"The Great Serengeti Migration Game Drive",
        description:" At the Northern regions of Serengeti, follow the great migration of wildebeests and zebras, witness the crossing of River Mara, and explore the northern Serengeti with endless rolling plains and riverine woodlands. The region is home to lions, leopards, cheetahs, elephants, and many other animals. Stay overnight in Kogatende.",
        mealplan:"Breakfast,Lunch and Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1472047773266-19708174ed3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
        safari_id:6
     },
     {
        day: 5,
        title:" Full Day in Serengeti Migration Routine ",
        description:"Set off on an early morning game drive to witness the impressive phenomena of nearly 2 million animals migrating. See the band of lioness gather for hunt on the banks of the Mara River. Enjoy a packed picnic lunch break, and afterwards continue with an afternoon game drive. Stay overnight at Migrations camp.",
        mealplan:"Breakfast,Lunch and Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80",
        safari_id:6
     },
     {
        day: 6,
        title:"Game Drive Routine on Way Back Central Serengeti ",
        description:"Drive back to Central Serengeti, while doing a game drive to see nocturnal predators and animals waking up in the early morning light. Stay overnight in Central Serengeti.",
        mealplan:"Dinner",
        distance:0,
        image_url: "https://images.unsplash.com/photo-1493691052006-9dcaa83ff11f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5vY3R1cm5hbCUyMHByZWRhdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        safari_id:6
     },
     {
      day: 7,
      title:"Central Serengeti to Ngorongoro Conservation Area ",
      description:"Embark on an early morning game drive back to Naabi Hill Gate and proceed to Ngorongoro Conservation Area to stay overnight. ",
      mealplan:"Breakfast, Lunch and Dinner",
      distance:0,
      image_url: "https://images.unsplash.com/photo-1670786445697-e0b6570d2687?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      safari_id:6
      },
      {
         day: 8,
         title:" Ngorongoro Crater",
         description:"Descend into the crater for a wonderful game drive with a picnic lunch, witness a permanent population of more than 30,000 animals, see the 'Big Five\' during the game drive, and stay overnight in Karatu.",
         mealplan:"Beakfast, Lunch and Dinner",
         distance:0,
         image_url: "https://plus.unsplash.com/premium_photo-1673203033697-257c1f533863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNyYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
         safari_id:6
      },
      {
         day: 9,
         title:"Lake Manyara National Park ",
         description:"Drive to Lake Manyara National Park, explore the park known for tree-climbing lions, herds of elephants, and flamingos, and end the safari by driving back to your accommodation in Arusha/Moshi.",
         mealplan:"Beakfast, Lunch and Dinner",
         distance:0,
         image_url: "https://images.unsplash.com/photo-1507088164404-020d1e905959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
         safari_id:6
      },
      {
         day: 10,
         title:"Departure",
         description:"After breakfast, you'll be transferred to Arusha Airport or Kilimanjaro International Airport for your departure. Alternatively, you may choose to extend your trip with a visit to Zanzibar or other destinations in Tanzania.",
         mealplan:"Beakfast",
         distance:0,
         image_url: "https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGFpcnBsYW5lJTIwZGVwYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
         safari_id:6
      }

    ])

 puts 'ending safaris..'

 puts "safari itineries"

 puts "ending"