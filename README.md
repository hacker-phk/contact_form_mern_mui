

# Contact Management App

This app allows users to add, edit, view, and sort contacts, making it easy to manage and store contact information. The frontend is built with React and the backend is powered by Node.js and Express, with MongoDB used for data storage.

## Features
- **Add a Contact**: Add new contacts to the list with relevant information.
- **Edit a Contact**: Edit the details of an existing contact.
- **View Contacts**: View a list of all your contacts.
- **Sort Contacts**: Sort contacts based on different criteria.

## Technologies Used
### Frontend
- **Vite**: Fast build tool for React apps.
- **React**: JavaScript library for building user interfaces.
- **React DOM**: DOM manipulation for React.
- **MUI (Material-UI)**: React components for building modern, responsive UIs.

### Backend
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **MongoDB**: NoSQL database for storing contact data.

## Setup Instructions

### Frontend
1. Navigate to the frontend directory.
2. Run the following command to install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server with:
    ```bash
    npm run dev
    ```
4. Open your browser and go to `http://localhost:3000` to see the app in action.

### Backend
1. Navigate to the `backend` directory.
2. Run the following command to install dependencies:
    ```bash
    npm install
    ```
3. Start the backend server with:
    ```bash
    npm run start
    ```
4. The backend will run on `http://localhost:5000` by default.

## API Endpoints
- **GET `/contacts`**: Fetch all contacts.
- **POST `/contacts`**: Add a new contact.
- **PUT `/contacts/:id`**: Edit an existing contact.
- **DELETE `/contacts/:id`**: Delete a contact.
- **GET `/contacts/sort`**: Sort contacts based on query parameters.

## Additional Notes
- Make sure MongoDB is running locally or connected to a cloud instance.
- Ensure both frontend and backend are running for the app to work properly.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

