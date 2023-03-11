# Sneak In

## Overview

This is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express, React.js, and Node.js), designed for sneaker enthusiasts who want to easily browse and purchase the latest kicks. 

[Demo link](https://sneaker-ecommerce-xi.vercel.app/)

## Technologies Used

- Node.js/Express.js - used for creating the backend server API
- MongoDB - used as the database for the server API
- React.js - used for creating the frontend application
- CSS and React-Bootstrap - used for customizing the frontend
- Postman - used for testing the server API
- MongoDB Atlas - used for hosting the database
- Render and Vercel - used for deploying the backend and frontend respectively

## Functionalities

The Sneaker E-commerce application provides the following functionalities:

### User Authentication
- Register a new user account
- Login with an existing user account

### Sneaker Catalog
- View the list of sneakers available in the catalog
- View detailed information about a particular sneaker

### Shopping Cart
- Add items to the shopping cart (non-admin user only) *Feature currently unavailable*
- View the current shopping cart and the total amount

### Admin Features *anthony@mail.com | user123*
- Add new sneakers to the catalog
- Remove existing sneakers from the catalog
- Update the details of existing sneakers in the catalog
- View the total cart price/amount of all non-admin users.

## How to Use

Clone the repository using the link https://github.com/aaroncferrer/sneaker-ecommerce. Then, run the following command in your terminal to install the necessary packages:

### `npm install`

After the packages are installed, you can start the app with the following command:

### `npm start` 

Open your browser and navigate to http://localhost:3000 to use the app.

For running the backend server API, use the following command:

### `npm run dev` or `node index.js`

Make sure to also run `npm install` in the server folder to install the necessary packages.
