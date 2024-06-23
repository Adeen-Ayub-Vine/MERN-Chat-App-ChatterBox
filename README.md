# MERN-Chat-App-ChatterBox
A real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack and Socket.IO for instant messaging and notifications.

## Features
- Real-time messaging with Socket.IO
- User authentication and authorization
- Notification system for new messages
- Responsive design for mobile and desktop
- Persistent chat history using MongoDB
- Private and group chat support

## Information needed
In the .env file, add the following information respective to you
 ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
 ```

## How to Run:

  1. Create a React Project
   ```cmd
   npx create-react-app frontend
   ```
  2. Paste the src files in src folder
  3. Open two terminal in VSCode, one for the server and one for the client.

  - In the `server` terminal:
    ```bash
    npm start
    ```

 - In the `client` terminal:
    ```bash
    cd frontend
    npm start
    ```
  4. **Open your browser:**

    Navigate to `http://localhost:3000` to see the app in action.

## Usage

1. **Register an account** or **log in** with an existing account.
2. **Create a new chat** or **join an existing one**.
3. **Send messages** and see them appear in real-time.
4. **Receive notifications** for new messages.

## Technologies Used

- **MongoDB:** Database for storing user and chat data
- **Express:** Backend framework
- **React:** Frontend library
- **Node.js:** Runtime environment
- **Socket.IO:** Real-time communication
- **JWT:** JSON Web Tokens for authentication

