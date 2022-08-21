# Hostel Management Backend

Backend for hostel management app.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/building/add-building | To add a new building |
| PATCH | /api/building/update-building | To update building details |
| POST | /api/rooms/assign-room | To assign room to Student |
| PATCH | /api/rooms/update-room | To room details and allocated student detail |

### Postman Testing Link
You can use following link to test API using postman
https://www.getpostman.com/collections/6f458d1f6e8573c40d45

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`: MongoDB URL Link

`PORT`: Port on which app to be run

