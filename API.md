## ADVENTURES

These are the adventures that lauwo offers.

### GET /adventures
http://localhost:3000/adventures
Returns a list of all adventures.

### GET /adventures/:id
http://localhost:3000/adventures/1
Returns a single adventure.

### POST /adventures
http://localhost:3000/adventures
Creates a new adventure.
json body:
{
  "name": "string"
}

### PATCH /adventures/:id
http://localhost:3000/adventures/1
Updates a single adventure.
json body:
{
  "name": "string"
}

### DELETE /adventures/:id
http://localhost:3000/adventures/1
Deletes a single adventure.

## CULTURAL TOURS 

These are the cultural tours that lauwo offers.

### GET /cultural_tours
http://localhost:3000/cultural_tours
Returns a list of all cultural tours.

### GET /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Returns a single cultural tour.

### POST /cultural_tours
http://localhost:3000/cultural_tours
Creates a new cultural tour.
json body:
{
  "adventure_id": "integer",
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "location": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}

### PATCH /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Updates a single cultural tour.
json body:
{
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "location": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}

### DELETE /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Deletes a single cultural tour.

## DAY TRIPS

These are the day trips that lauwo offers.

### GET /day_trips
http://localhost:3000/day_trips
Returns a list of all day trips.

### GET /day_trips/:id
http://localhost:3000/day_trips/1
Returns a single day trip.

### POST /day_trips
http://localhost:3000/day_trips
Creates a new day trip.
json body:
{
  "adventure_id": "integer",
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}

### PATCH /day_trips/:id
http://localhost:3000/day_trips/1
Updates a single day trip.
json body:
{
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}

### DELETE /day_trips/:id
http://localhost:3000/day_trips/1
Deletes a single day trip.

## BLOGS

These are the blogs that lauwo writes.

### GET /blogs
http://localhost:3000/blogs
Returns a list of all blogs.

### GET /blogs/:id
http://localhost:3000/blogs/1
Returns a single blog.

### POST /blogs
http://localhost:3000/blogs
Creates a new blog.
json body:
{
  "title": "string",
  "content": "text",
  "image_url": "string"
  "author": "string"
}

### PATCH /blogs/:id
http://localhost:3000/blogs/1
Updates a single blog.
json body:
{
  "title": "string",
  "content": "text",
  "image_url": "string"
  "author": "string"
}

### DELETE /blogs/:id
http://localhost:3000/blogs/1
Deletes a single blog.

## INQUIRIES 

These are the inquiries that lauwo receives.

### GET /inquiries
http://localhost:3000/inquiries
Returns a list of all inquiries.

### GET /inquiries/:id
http://localhost:3000/inquiries/1
Returns a single inquiry.

### POST /inquiries
http://localhost:3000/inquiries
Creates a new inquiry.
json body:
{
  "name": "string",
  "email": "string",
  "message": "text"
}

### DELETE /inquiries/:id
http://localhost:3000/inquiries/1
Deletes a single inquiry.



