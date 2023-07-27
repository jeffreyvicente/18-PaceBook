# 18-PaceBook API

## Description
The PaceBook API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB as the NoSQL database, and Mongoose. The application is designed to handle large amounts of unstructured data and offers various routes to interact with users, thoughts, reactions, and friends.

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation
To run The PaceBook API, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm.
3. Have MongoDB installed and running on your machine.
4. Set up the MongoDB connection in the application.
5. Run the application using the command npm start.


## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Preview
View Insomnia Demo on [YouTube](https://www.youtube.com/watch?v=j9gPD4A6YJM)

![alt text](/assets/01-GetAllUserAndThoughts.gif)
Querying all Users in the database | Querying all Thoguths in the database

![alt text](/assets/02-GetSingleUserAndThoughts.gif)
Querying a single Users in the database | Querying a single Thoguths in the database

![alt text](/assets/03-UsersCRUD.gif)
Delete, Post and Update for Thoguths and Users in Insomnia

![alt text](/assets/02-GetSingleUserAndThoughts.gif)
Post and Update friends in Insomnia 

## Features
The PaceBook API has the following features:
- Querying all Users and Thoguhts in the database.
- Querying a single Users and Thoughts in the database.
- Allows the user to delete, post and update different thoguhts and users.
- API route to post and update User's friends.

## Technologies Used
- Node.js
- Express.js
- MongoDB 
- Mongoose
