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
  "image_url": "string"
  "location": "string"
  "itinerary": "text"
}

### PATCH /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Updates a single cultural tour.
json body:
{
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string"
  "location": "string"
  "itinerary": "text"
}

### DELETE /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Deletes a single cultural tour.


