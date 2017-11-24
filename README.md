# Fullstack-review

Fetch data from an API, store that data in a database, and display it on your app's index page. Frontend is built with React, and backend is built with express and mongo.

by Peter X. Tan

## High Level Goals

Build an app that takes data from GitHub's API and stores it in your database.

- When a user types in a **–GitHub username–** and submits the form, your app should:
  - Send a post requrest to your express server
  - Your server should GET that user's repos from GitHub's API
  - Your server should then sae the repos to the database
- When a user visits / refreshes your page, your app should:
  - GET the top (how will you determine top?) 25 repos in your express erver's database
  - Take those repos and display them on the page


## System Requirements

- [Node](https://nodejs.org/en/)
- [Mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew)

### Installing System Dependencies

```
$ npm install
```

## Starting App

In separate terminal tabs

```
$ npm run react-dev
$ npm run server-dev
$ npm run db-start
```