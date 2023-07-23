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




## Features
The PaceBook API has the following features:
- Create, read, update, and delete blog posts: Logged-in users can create new blog posts, view existing posts, update their own posts, and delete their posts.
- Comment on blog posts: Users can comment on blog posts created by other users.
- Logged-in users have access to a personalized dashboard where they can view and manage their own blog posts.
- The homepage displays all blog posts with the most recent ones appearing first.

## Technologies Used
- Node.js
- Express.js
- MongoDB 
- Mongoose
