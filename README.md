# MERN Estate Application

This is a MERN (MongoDB, Express, React, Node.js) stack application for managing real estate listings.

## Live Demo

Check out the live demo of MERN Estate Application [here](https://mern-estate-r23v.onrender.com/).

## Features

- User authentication and authorization (including Google Sign-In)
- Advanced search functionality with filters and sorting
- CRUD operations for real estate listings
- Integration with MongoDB for data storage
- Comprehensive state management with Redux Toolkit and persistent state using `redux-persist`
- Firebase integration for additional services
- Responsive UI with Tailwind CSS
- API endpoints for user and listing management
- Environment variable configuration for sensitive data

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool for modern web projects
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESLint**: Linter for identifying and fixing JavaScript code issues
- **Redux Toolkit**: State management library for efficient and scalable state management
- **redux-persist**: Library for persisting Redux state across sessions
- **Firebase**: Platform for building web and mobile applications
- **MongoDB**: NoSQL database for storing application data
- **Express**: Web framework for Node.js to build API endpoints
- **Node.js**: JavaScript runtime for server-side development

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/GideonAmhaG/MERN-estate.git
   cd MERN-estate

2. **Install dependencies:**
   ```sh
   npm install
   cd client
   npm install
   cd ..
   
3. **Set up MongoDB:**
   Set up a MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and obtain your connection string.
   
4. **Set up Firebase:**
   Create a Firebase project and obtain your Firebase configuration.
   
5. **Create .env files:**
   - In the root directory, create a .env file and add the following environment variables:
   ```sh
   JWT_SECRET=your_jwt_secret
   MONGO=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
   ```
   -In the client directory, create a .env file and add the following environment variable:
   ```sh
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

   
