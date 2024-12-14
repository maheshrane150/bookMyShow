# Hi, I'm Mahesh Rane! 👋

# Book my show..

This is a demo of real bookmyshow, where the user can book a movie with specified seats at a specified slot and get a confirmation that, wheteher booking was sucessful or not.

The movie booked by the user will be stored in database and is retrived and shown to the user.

## Installation
```
Open this project on your local IDE and in the terminal do this commands one by one

---For Frontend

 ```
cd book-my-show-main
npm install
npm start

 ```

For backend

 ```
first step- cd book-my-show-main, second step- cd .\BookMyShow-Backend 
npm run start
(message show is connect the database mongodb)
 ```
In the backend you should connect with database server. This will start you frontend part on port - http://localhost:3000 and backend part running on port- http://localhost:8081

## API Reference
Base URL
https://bookms.onrender.com

check it this link https://bookms.onrender.com/api/booking

## Booking

--get booking
```http
  GET /api/bookings
  ```
--post booking 
Returns a list of all bookings stored in the database in JSON format.

```http
  POST /api/bookings
  ```
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movie`    | `string` | **Required**. selected movie |
| `timeSlot`    | `string` | **Required**. selected time slot |
| `seats`    | `string` | **Required**. selected seats |
Returns the newly created booking in JSON format

## How to Use
1. click on below link
```https
[bookmyshowApp](https://bookmyshowticket.netlify.app/)
```
2. select the movie you would like to watch.
3. select timeslot .
4. select any seat type and and number of seats would you like to booked.
5. click on ```Book Now```  button. If you want to change any selected field, then do changes before booking it.
 After click on Book Now button you got succesfull booking message and your last booking details display on the screen under last booking details heading.
 
## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key API_KEY

## For Backend
MongoDb live connection string
`MONGODBURI: mongodb+srv://<user_name>:<password>@mongodb_connection_string/database_name `

MongoDb local connection string (if you set application on localhost)
`MONGODBURI = mongodb://localhost:27017/<database_name> `

COLLECTION_NAME = <collection_name>

if application is running on localhost set node_env development or if it is on live set production NODE_ENV =  development (development || production)
APP_PORT = 8081

api routes path
GET_REQUEST = /api/booking POST_REQUEST = /api/booking

### Tech Stack
Client: React js, Bootstrap

Server: Node, Express

database: MongoDB

## Link to website -> [BookMyShow](https://bookmyshowticket.netlify.app/)


#### Overall UI of the app.

![App Screenshot](https://snipboard.io/qjIr2l.jpg)

#### Getting confirmations from server.

![App Screenshot](https://snipboard.io/vPiK5G.jpg)

#### Information about previous booking details.

![App screenshot](https://snipboard.io/NT461E.jpg)


## Technologies that are used.

- #### React  
    This app is fully built on top of react library.
- #### Axios / Fetch
    Used for making api calls.

##
<h4 align="center">Developed by Mahesh Rane</h4>
<h4 align="center">Thank You</h4>

