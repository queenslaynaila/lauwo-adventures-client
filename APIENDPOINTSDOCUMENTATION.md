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

### PUT /adventures/:id
http://localhost:3000/adventures/1
Updates a single adventure.
json body:
{
  "name": "string"
}

### DELETE /adventures/:id
http://localhost:3000/adventures/1
Deletes a single adventure.

