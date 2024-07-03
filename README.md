# weather-app-backend
# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT                           | local server port                   | 8000    |
|DB_URI                         | mongodb connection uri              | ""      |

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Clone the repository
```
git clone  https://github.com/anjums1810/weather-app-backend.git
```
- Install dependencies
```
cd weather-app-backend
npm install
```
- create ENV file
```
copy .env.example to .env and fill the required fields 
```
- Seed Dummy Data
```
node seedData
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8000`

- API Document endpoints

  Graphql API Endpoint : http://localhost:8000/api 

- Example Query
  ```
  {
    weather(place: "Sydney") {
      place
      longitude
      latitude
      temperature
      description
      icon
    }
  } 
```
- Example Places : "Sydney","Delhi","Riyadh","New York", "Paris", "Moscow"

  
