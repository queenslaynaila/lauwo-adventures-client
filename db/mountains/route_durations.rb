 # Momela route
momela_route = Route.find_by(route_name: "Momela Route")

momela_4_days = momela_route.route_durations.create(
    title: "4 Day Momela Route", 
    duration_days: 4, 
    standard_price: 500, 
    standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer fromaccomodation to the airport, Transfer to the Mt Meru gate,All National Park fees (rescue fees),Accommodation in 3 star hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides,assistant guide, Porters and cook Salaries ,Emergency oxygen ,warm water for washing each day at the mountain ,clean purified drinking water ,Tax  ", 
    standard_exclusive: "TIP,porters 10$ a day ,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance",
    premium_price:"500",
    premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car ,Return Transfer from accommodation to the airport with a private car,Transfer to momela gate ,All National Park fees (rescue fees) ,Accommodation in Luxury hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides with WFR certificate ,assistant guide, Porters and cook Salaries ,personal oxygen ,warm water for washing each day at the mountain 
    ,clean purified drinking water ,Waterproof tents, mess tents, crew tents,Government tax ,Private toilet,Comfortable sleeping tents with safari chairs  ,personal porter ,full body hotel before and after climbing 
    ",
    premium_exclusive:"TIP, porters 10$ a day ,Cook's 15$ a day, Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance (this supposed to be cover 6000m),personal gear ,Personal expenses(laundry) 
    ,flight
    "
)
#Create route durations for lemosho route
lemosho_route = Route.find_by(route_name: "Lemosho Route")

RouteDuration.create(
    route_id: lemosho_route.id, 
    title: "6-Day Lemosho Route", 
    duration_days: 6, 
    standard_price: 2000, 
    standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer from accommodation to the airport ,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in 3,hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides,assistant guide, Porters and cook Salaries  ,Emergency oxygen 
    ,warm water for washing each day at the mountain ,clean purified drinking water 
    ,Waterproof tents, mess tents, crew tents, ,Government tax 
    ", 
    standard_exclusive: "TIP,porters 10$ a day ,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others) ,mountain insurance",
    premium_price:2000,
    premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car ,Return Transfer from accommodation to the airport with a private car ,Transfer to the Kilimanjaro gate  ,All National Park fees (rescue fees),Accommodation in Luxury hotel (one night before and one night after climbing ,All camping facilities  ,Meals (All meals during hiking),Safety equipment (medical kit) ,professional mountain guides with WFR certificate ,assistant guide, Porters and cook Salaries ,personal oxygen ,warm water for washing each day at the mountain  ,clean purified drinking water ,Waterproof tents, mess tents, crew tents, ,Government tax ,Private toilet,Comfortable sleeping tents with safari chairs  ,personal porter ,full body hotel before and after climbing 
    ",
    premium_exclusive:"TIP,porters 10$ a day, Cook's 15$ a day, Guides 20$ ,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance (this supposed to be cover 6000m) ,personal gear ,Personal expenses(laundry) ,flight "
)
RouteDuration.create(
    route_id: lemosho_route.id, 
    title: "7-Day Lemosho Route", 
    duration_days: 7,
    standard_price: 2500, 
    standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer from accommodation to the airport ,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in 3,hotel (one night before and one night after climbing  ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides ,assistant guide, Porters and cook Salaries  ,Emergency oxygen ,warm water for washing each day at the mountain ,clean purified drinking water ,Waterproof tents, mess tents, crew tents,Government tax ", 
    standard_exclusive: "TIP, porters 10$ a day , Cook's 15$ a day, Guides 20$,,Tanzania visa on arrival (100$ for American citizen and 50 for the others) ,mountain insurance ",
    premium_price:"2500",
    premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car ,Return Transfer from accommodation to the airport with a private car,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in Luxury hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides with WFR certificate ,assistant guide, Porters and cook Salaries ,personal oxygen ,warm water for washing each day at the mountain,clean purified drinking water ,Waterproof tents, mess tents, crew tents,Government tax ,Private toilet  ,Comfortable sleeping tents with safari chairs ,personal porter ,full body hotel before and after climbing  ",
    premium_exclusive:"TIP,porters 10$ a day , Cook's 15$ a day, Guides 20$ ,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance (this supposed to be cover 6000m),personal gear ,Personal expenses(laundry),flight"
)
RouteDuration.create(
    route_id: lemosho_route.id, 
    title: "8-Day Lemosho Route", 
    duration_days: 8, 
    standard_price: 3000, 
    standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer from accommodation to the airport  ,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in 3,hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides,assistant guide, Porters and cook Salaries ,Emergency oxygen  ,warm water for washing each day at the mountain ,clean purified drinking water ,Waterproof tents, mess tents, crew tents,  ,Government tax  ", 
    standard_exclusive: "TIP, porters 10$ a day , Cook's 15$ a day, Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance  ",
    premium_price:2000,
    premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car ,Return Transfer from accommodation to the airport with a private car,Transfer to the Kilimanjaro gate  ,All National Park fees (rescue fees),Accommodation in Luxury hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides with WFR certificate ,assistant guide, Porters and cook Salaries  ,personal oxygen ,warm water for washing each day at the mountain ,clean purified drinking water  ,Waterproof tents, mess tents, crew tents, ,Government tax  ,Private toilet,Comfortable sleeping tents with safari chairs 
    ,personal porter  ,full body hotel before and after climbing  ",
    premium_exclusive:"TIP,porters 10$ a day,Cook's 15$ a day, Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance (this supposed to be cover 6000m),personal gear ,Personal expenses(laundry) ,flight
    "
)

#Create route durations for machame route
machame_route = Route.find_by(route_name: "Machame Route")
RouteDuration.create([
    { 
      route_id: machame_route.id, 
      title: "6 Days Machame Route", 
      duration_days: 6, 
      standard_price: 1500, 
      standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer from accommodation to the airport ,Transfer to the Kilimanjaro gate  ,All National Park fees (rescue fees),Accommodation in 3STAR hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides,assistant guide, Porters and cook Salaries ,Emergency oxygen ,warm water for washing each day at the mountain ,clean purified drinking water ,Waterproof tents, mess tents and crew tents, Government tax 
      ", 
      standard_exclusive: "TIP,porters 10$ a day,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance  ",
      premium_price:7000,
      premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car ,Return Transfer from accommodation to the airport with a private car ,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in Luxury hotel (one night before and one night after climbing ,All camping facilities  ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides with WFR certificate ,assistant guide, Porters and cook Salaries  ,personal oxygen ,warm water for washing each day at the mountain ,clean purified drinking water,Waterproof tents, mess tents, crew tents, ,Government tax ,Private toilet,Comfortable sleeping tents with safari chairs ,personal porter  ,full body hotel before and after climbing  ",
      premium_exclusive:"TIP,porters 10$ a day ,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others) ,mountain insurance (this supposed to be cover 6000m),personal gear ,Personal expenses(laundry) ,flight " 
    },
    { 
      route_id: machame_route.id, 
      title: "7 Days Machame Route", 
      duration_days: 7, 
      standard_price: 1700, 
      standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer from accommodation to the airport ,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in 3,hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides,assistant guide, Porters and cook Salaries  ,Emergency oxygen ,warm water for washing each day at the mountain  ,clean purified drinking water  ,Waterproof tents, mess tents, crew tents,Government tax", 
      standard_exclusive: "TIP,porters 10$ a day ,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others) ,mountain insurance",
      premium_price:"7000",
      premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car ,Return Transfer from accommodation to the airport with a private car,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in Luxury hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides with WFR certificate ,assistant guide, Porters and cook Salaries ,personal oxygen ,warm water for washing each day at the mountain ,clean purified drinking water ,Waterproof tents, mess tents, crew tents ,Government tax ,Private toilet ,Comfortable sleeping tents with safari chairs  ,personal porter ,full body hotel before and after climbing ",
      premium_exclusive:"TIP,porters 10$ a day , Cook's 15$ a day,
      Guides 20$ ,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance (this supposed to be cover 6000m),personal gear ,Personal expenses(laundry) ,flight " 
    }
])

#Create route durations for marangu route
marangu_route = Route.find_by(route_name: "Marangu Route")
RouteDuration.create(
    route_id: marangu_route.id,
    title: "Marangu Route - 6 Days",
    duration_days: 6,
    standard_price: 2000,
    standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer from accommodation to the airport ,Transfer to the Kilimanjaro gate ,All National Park fees (rescue fees),Accommodation in 3,hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides with WHR certificate,assistant guide, Porters and cook Salaries ,Emergency oxygen ,Warm water for washing each day at the mountain ,Clean purified drinking water ,Shaping after climb ,Government tax ",
    standard_exclusive: "TIP,Porters 10$ a day ,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),Mountain insurance ",
    premium_price:2000,
    premium_inclusive:"Transfer from JRO Airport to the hotel with a comfortable car  ,Return Transfer from accommodation to the airport with a private car,Transfer to the Kilimanjaro National Park gate ,All National Park fees (rescue fees),Accommodation in a Luxury hotel (one night before and one night after climbing),Full board meals one day before and after climbing.  ,All camping facilities ,Meals (All meals during hiking) ,Safety equipment (medical kit),Professional mountain guides with WFR certificate ,Assistant guide, Porters and cook Salaries ,Personal oxygen ,Warm water for washing each day at the mountain ,Clean purified drinking water ,Government tax ,Private toilet,Comfortable sleeping tents with safari chairs ,Personal porter ,Full body massage after climbing. ",
    premium_exclusive:"TIP,Porters 10$ a day ,Cook's 20$ a day, Guides 25$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),Mountain insurance (this supposed to be cover 6000m),Personal gear ,Personal expenses (eg laundry),Flight
    "
)
RouteDuration.create(
  route_id: marangu_route.id,
  title: "Marangu Route - 5 Days",
  duration_days: 5,
  standard_price: 2000,
  standard_inclusive: "Transfer From Jro Airport To The Hotel ,Return Transfer From Accommodation To The Airport ,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In 3,Hotel (One Night Before And One Night After Climbing ,All Camping Facilities  ,Meals (All Meals During Hiking) ,Safety Equipment (Medical Kit),Professional Mountain Guides With Whr Certificate,Assistant Guide, Porters And Cook Salaries ,Emergency Oxygen ,Warm Water For Washing Each Day At The Mountain ,Clean Purified Drinking Water  ,Shaping After Climb ,Government Tax ",
  standard_exclusive: "Tip,Porters 10$ A Day ,Cook's 15$ A Day,Guides 20$,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others),Mountain Insurance ",
  premium_price:2000,
  premium_inclusive:"Transfer From Jro Airport To The Hotel With A Comfortable Car ,Return Transfer From Accommodation To The Airport With A Private Car ,Transfer To The Kilimanjaro National Park Gate ,All National Park Fees (Rescue Fees),Accommodation In A Luxury Hotel (One Night Before And One Night After Climbing) ,Full Board Meals One Day Before And After Climbing. ,All Camping Facilities ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit),Professional Mountain Guides With Wfr Certificate ,Assistant Guide, Porters And Cook Salaries ,Personal Oxygen ,Warm Water For Washing Each Day At The Mountain ,Clean Purified Drinking Water  ,Government Tax ,Private Toilet,Comfortable Sleeping Tents With Safari Chairs ,Personal Porter ,Full Body Massage After Climbing. ",
  premium_exclusive:"Tip,Porters 10$ A Day ,Cook's 20$ A Day, Guides 25$,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others) ,Mountain Insurance (This Supposed To Be Cover 6000m) ,Personal Gear  ,Personal Expenses (Eg Laundry)  ,Flight "
)
# Route Durations for londos Route
londos_route = Route.find_by(route_name: "Londos Route")
RouteDuration.create(
    route_id: londos_route.id, 
    title: "londos Route - 7 Day", 
    duration_days: 7, 
    standard_price: 2500, 
    standard_inclusive: "Transfer From Jro Airport To The Hotel ,Return Transfer From Accommodation To The Airport  ,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In 3 Hotel (One Night Before And One Night After Climbing ,All Camping Facilities ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit),Professional Mountain Guides,Assistant Guide, Porters And Cook Salaries ,Emergency Oxygen ,Warm Water For Washing Each Day At The Mountain ,Clean Purified Drinking Water ,Waterproof Tents, Mess Tents, Crew Tents,Government Tax", 
    standard_exclusive: "Tip,Porters 10$ A Day ,Cook's 15$ A Day ,Guides 20$,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others) ,Mountain Insurance  ",
    premium_price:5000,
    premium_inclusive:"Transfer From Jro Airport To The Hotel With A Comfortable Car 
    ,Return Transfer From Accommodation To The Airport With A Private Car,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In Luxury Hotel (One Night Before And One Night After Climbing ,All Camping Facilities ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit),Professional Mountain Guides With Wfr Certificate ,Assistant Guide, Porters And Cook Salaries ,Personal Oxygen ,Warm Water For Washing Each Day At The Mountain ,Clean Purified Drinking Water ,Waterproof Tents, Mess Tents, Crew Tents,Government Tax ,Private Toilet,Comfortable Sleeping Tents With Safari Chairs ,Personal Porter ,Full Body Hotel Before And After Climbing  ",
    premium_exclusive:"Tip,Porters 10$ A Day  ,Cook's 15$ A Day,Guides 20$ ,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others),Mountain Insurance (This Supposed To Be Cover 6000m) ,Personal Gear ,Personal Expenses(Laundry),Flight "
  )
   
  # Route Durations for Rongai Route
  rongai_route = Route.find_by(route_name: "Rongai Route")
  RouteDuration.create(
    route_id: rongai_route.id, title: "Rongai Route - 8 Day", 
    duration_days: 8, 
    standard_price: 3000, 
    standard_inclusive: "Transfer From Jro Airport To The Hotel
    ,Return Transfer From Accommodation To The Airport 
    ,Transfer To The Kilimanjaro Gate 
    ,All National Park Fees (Rescue Fees)
    ,Accommodation In 3,Hotel (One Night Before And One Night After Climbing 
    ,All Camping Facilities 
    ,Meals (All Meals During Hiking)
    ,Safety Equipment (Medical Kit)
    ,Professional Mountain Guides With Whr Certificate
    ,Assistant Guide, Porters And Cook Salaries 
    ,Emergency Oxygen 
    ,Warm Water For Washing Each Day At The Mountain 
    ,Clean Purified Drinking Water 
    ,Shaping After Climb 
    ,Government Tax 
    ", 
    standard_exclusive: "Tip, Porters 10$ A Day , Cook's 15$ A Day, Guides 20$,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others),Mountain Insurance",
    premium_price:5000,
    premium_inclusive:"Transfer From Jro Airport To The Hotel With A Comfortable Car ,Return Transfer From Accommodation To The Airport With A Private Car,Transfer To The Kilimanjaro National Park Gate ,All National Park Fees (Rescue Fees),Accommodation In A Luxury Hotel (One Night Before And One Night After Climbing),Full Board Meals One Day Before And After Climbing.,All Camping Facilities ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit),Professional Mountain Guides With Wfr Certificate ,Assistant Guide, Porters And Cook Salaries,Personal Oxygen ,Warm Water For Washing Each Day At The Mountain,Clean Purified Drinking Water ,Government Tax ,Private Toilet,Comfortable Sleeping Tents With Safari Chairs ,Personal Porter ,Full Body Massage After Climbing. ",
    premium_exclusive:"Tip ,Porters 10$ A Day ,Cook's 20$ A Day ,Guides 25$
    ,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others),Mountain Insurance (This Supposed To Be Cover 6000m),Personal Gear ,Personal Expenses (Eg Laundry Flight "
  )
  RouteDuration.create(
    route_id: rongai_route.id, 
    title: "Rongai Route - 9 Day", 
    duration_days: 9, 
    standard_price: 3500, 
    standard_inclusive: "Transfer From Jro Airport To The Hotel,Return Transfer From Accommodation To The Airport ,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In 3,Hotel (One Night Before And One Night After Climbing ,All Camping Facilities ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit),Professional Mountain Guides,Assistant Guide, Porters And Cook Salaries ,Emergency Oxygen ,Warm Water For Washing Each Day At The Mountain  ,Clean Purified Drinking Water ,Waterproof Tents, Mess Tents and Crew Tents,Government Tax ", 
    standard_exclusive: "Tip,Porters 10$ A Day ,Cook's 15$ A Day,Guides 20$,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others),Mountain Insurance",
    premium_price:8000,
    premium_inclusive:"Transfer From Jro Airport To The Hotel With A Comfortable Car ,Return Transfer From Accommodation To The Airport With A Private Car,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In Luxury Hotel (One Night Before And One Night After Climbing ,All Camping Facilities  ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit) ,Professional Mountain Guides With Wfr Certificate  ,Assistant Guide, Porters And Cook Salaries  ,Personal Oxygen ,Warm Water For Washing Each Day At The Mountain  ,Clean Purified Drinking Water  ,Waterproof Tents, Mess Tents, Crew Tents ,Government Tax ,Private Toilet,Comfortable Sleeping Tents With Safari Chairs ,Personal Porter ,Full Body Hotel Before And After Climbing ",
    premium_exclusive:"Tip,Porters 10$ A Day ,Cook's 15$ A Day,Guides 20$,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others),Mountain Insurance (This Supposed To Be Cover 6000m),Personal Gear ,Personal Expenses(Laundry) ,Flight"
  )
  
  # Route Durations for Umbwe Route
  umbwe_route = Route.find_by(route_name: "Umbwe Route")
  RouteDuration.create(
    route_id: umbwe_route.id, 
    title: "Umbwe Route - 6 Day", 
    duration_days: 6, 
    standard_price: 2000, 
    standard_inclusive: "Transfer From Jro Airport To The Hotel,Return Transfer From Accommodation To The Airport ,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In 3,Hotel (One Night Before And One Night After Climbing ,All Camping Facilities ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit),Professional Mountain Guides,Assistant Guide, Porters And Cook Salaries ,Emergency Oxygen 
    ,Warm Water For Washing Each Day At The Mountain ,Clean Purified Drinking Water ,Waterproof Tents:Mess Tents and Crew Tents ,Government Tax  ", 
    standard_exclusive: "Tip, Porters 10$ A Day , Cook's 15$ A Day, Guides 20$,Tanzania Visa On Arrival (100$ For American Citizen  ",
    premium_price:10000,
    premium_inclusive:"Transfer From Jro Airport To The Hotel With A Comfortable Car ,Return Transfer From Accommodation To The Airport With A Private Car,Transfer To The Kilimanjaro Gate ,All National Park Fees (Rescue Fees),Accommodation In Luxury Hotel (One Night Before And One Night After Climbing ,All Camping Facilities  ,Meals (All Meals During Hiking),Safety Equipment (Medical Kit) ,Professional Mountain Guides With Wfr Certificate  ,Assistant Guide, Porters And Cook Salaries ,Personal Oxygen ,Warm Water For Washing Each Day At The Mountain ,Clean Purified Drinking Water ,Waterproof Tents, Mess Tents, Crew Tents,Government Tax ,Private Toilet,Comfortable Sleeping Tents With Safari Chairs ,Personal Porter ,Full Body Hotel Before And After Climbing  ",
    premium_exclusive:"Tip,Porters 10$ A Day ,Cook's 15$ A Day,Guides 20$ ,Tanzania Visa On Arrival (100$ For American Citizen And 50 For The Others) ,Mountain Insurance (This Supposed To Be Cover 6000m),Personal Gear ,Personal Expenses(Laundry)  ,Flight "
)