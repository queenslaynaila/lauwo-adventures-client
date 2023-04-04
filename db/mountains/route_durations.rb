 # Momela route
momela_route = Route.find_by(route_name: "Momela Route")

momela_4_days = momela_route.route_durations.create(
    title: "4 Day Momela Route", 
    duration_days: 4, 
    standard_price: 500, 
    standard_inclusive: "Transfer from JRO Airport to the hotel,Return Transfer fromaccomodation to the airport, Transfer to the Mt Meru gate,All National Park fees (rescue fees),Accommodation in 3 star hotel (one night before and one night after climbing ,All camping facilities ,Meals (All meals during hiking),Safety equipment (medical kit),professional mountain guides,assistant guide, Porters and cook Salaries ,Emergency oxygen ,warm water for washing each day at the mountain ,clean purified drinking water  ,Tax  ", 
    standard_exclusive: "TIP,porters 10$ a day ,Cook's 15$ a day,Guides 20$,Tanzania visa on arrival (100$ for American citizen and 50 for the others),mountain insurance",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
)
#Create route durations for lemosho route
lemosho_route = Route.find_by(route_name: "Lemosho Route")

RouteDuration.create(
    route_id: lemosho_route.id, 
    title: "6-Day Lemosho Route", 
    duration_days: 6, 
    standard_price: 2000, 
    standard_inclusive: "Transport to/from mountain gate, Park fees, Rescue fees, All meals on the mountain, Tents, Sleeping bags, and Mattresses, Guides and porters, First aid kit, and Oxygen cylinder", 
    standard_exclusive: "Airport transfers, Accommodation before/after the climb, and Tips for guides and porters.",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
)
RouteDuration.create(
    route_id: lemosho_route.id, 
    title: "7-Day Lemosho Route", 
    duration_days: 7,
    standard_price: 2500, 
    standard_inclusive: "Transport to/from mountain gate, Park fees, Rescue fees, All meals on the mountain, Tents, Sleeping bags, and Mattresses, Guides and porters, First aid kit, and Oxygen cylinder", 
    standard_exclusive: "Airport transfers, Accommodation before/after the climb, and Tips for guides and porters.",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
)
RouteDuration.create(
    route_id: lemosho_route.id, 
    title: "8-Day Lemosho Route", 
    duration_days: 8, 
    standard_price: 3000, 
    standard_inclusive: "Transport to/from mountain gate, Park fees, Rescue fees, All meals on the mountain, Tents, Sleeping bags, and Mattresses, Guides and porters, First aid kit, and Oxygen cylinder", 
    standard_exclusive: "Airport transfers, Accommodation before/after the climb, and Tips for guides and porters.",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
)

#Create route durations for machame route
machame_route = Route.find_by(route_name: "Machame Route")
RouteDuration.create([
    { 
      route_id: machame_route.id, 
      title: "6 Days Machame Route", 
      duration_days: 6, 
      standard_price: 1500, 
      standard_inclusive: "Transportation, Accommodation, Meals", 
      standard_exclusive: "Tips, Drinks",
      premium_price:"",
      premium_inclusive:"",
      premium_exclusive:"" 
    },
    { 
      route_id: machame_route.id, 
      title: "7 Days Machame Route", 
      duration_days: 7, 
      standard_price: 1700, 
      standard_inclusive: "Transportation, Accommodation, Meals", 
      standard_exclusive: "Tips, Drinks",
      premium_price:"",
      premium_inclusive:"",
      premium_exclusive:"" 
    }
])

#Create route durations for marangu route
marangu_route = Route.find_by(route_name: "Marangu Route")
RouteDuration.create(
    route_id: marangu_route.id,
    title: "Marangu Route - 6 Days",
    duration_days: 6,
    standard_price: 2000,
    standard_inclusive: "Transport from Moshi to the starting point on the mountain and return to Moshi, park fees, camping/hut fees, rescue fees, meals on the mountain, guide, cook, and porters",
    standard_exclusive: "Flights,accomodation and meals in Moshi, personal climbing gear, and tips for guide, cook, and porters",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
)
# Route Durations for londos Route
londos_route = Route.find_by(route_name: "Londos Route")
RouteDuration.create(
    route_id: londos_route.id, 
    title: "londos Route - 7 Day", 
    duration_days: 7, 
    standard_price: 2500, 
    standard_inclusive: "Transport to/from mountain, park fees, camping fees, rescue fees, food, water, guide, porters, cook", 
    standard_exclusive: "Tips",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
  )
   
  # Route Durations for Rongai Route
  rongai_route = Route.find_by(route_name: "Rongai Route")
  RouteDuration.create(
    route_id: rongai_route.id, title: "Rongai Route - 8 Day", 
    duration_days: 8, 
    standard_price: 3000, 
    standard_inclusive: "Transport to/from mountain, park fees, camping fees, rescue fees, food, water, guide, porters, cook", 
    standard_exclusive: "Tips",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
  )
  RouteDuration.create(
    route_id: rongai_route.id, 
    title: "Rongai Route - 9 Day", 
    duration_days: 9, 
    standard_price: 3500, 
    standard_inclusive: "Transport to/from mountain, park fees, camping fees, rescue fees, food, water, guide, porters, cook", 
    standard_exclusive: "Tips",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
  )
  
  # Route Durations for Umbwe Route
  umbwe_route = Route.find_by(route_name: "Umbwe Route")
  RouteDuration.create(
    route_id: umbwe_route.id, 
    title: "Umbwe Route - 6 Day", 
    duration_days: 6, 
    standard_price: 2000, 
    standard_inclusive: "Transport to/from mountain, park fees, camping fees, rescue fees, food, water, guide, porters, cook", 
    standard_exclusive: "Tips",
    premium_price:"",
    premium_inclusive:"",
    premium_exclusive:""
)