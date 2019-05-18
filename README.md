# Food-find
Find the nearest restaurants to you. Using yelp and google maps api.

## Setup
 - run `git clone https://github.com/leksyib/blurg.git`
 - run `yarn && cd client && yarn` to install all dependencies.
 - make a .env file and set `YELP_API_KEY` to your yelp API key.
 - run `yarn dev` to get the server running locally.
 
## Features
 - User comes to this site and searches for a location (with dropdown or Auto complete) and sees the restaurants nearby that location 
 - User chooses a particular location in the map and the restaurants on the side bar are automatically updated 
 - Clicks on a restaurant's image in the map takes it to the YELP site of that place

## Stack
 - This project was built with React.js using create-react-app.
 - State management: redux

You can view a demo of this app here: https://food-find.herokuapp.com/
