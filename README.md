
# Contact Management System

A Contact Management System built with React for the frontend and MongoDB for the backend database. This application allows users to create, view, update, and delete contacts in an organized and efficient manner.

## Features

- **Add Contacts**: Create new contact records with details like name, email, and phone number.
- **View Contacts**: View a list of all contacts with search and filter options.
- **Update Contacts**: Edit contact information.
- **Delete Contacts**: Remove contacts from the list.
- **Responsive Design**: Optimized for desktop and mobile views.

## Built With

- **React** - For creating interactive user interfaces.
- **Node.js** and **Express** - Backend framework to handle APIs.
- **MongoDB** - Database for storing contact information.
- **Mongoose** - ODM for MongoDB and Node.js.
- **Axios** - For handling HTTP requests to the backend.
- **React Router** - For navigation between pages.

## Prerequisites

To run this project locally, make sure you have:

- **Node.js** - [Download Node.js](https://nodejs.org/)
- **MongoDB** - [Download MongoDB](https://www.mongodb.com/try/download/community) or use a cloud instance like MongoDB Atlas.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd contact-management-system
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the backend folder with the following content:

   ```plaintext
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/contactDB
   ```

5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend app:

   ```bash
   cd frontend
   npm start
   ```

7. Open the application in your browser at:

   ```
   http://localhost:3000
   ```

## Folder Structure

```
contact-management-system/
│
├── frontend/                   # React frontend
│   ├── public/                 # Static files
│   ├── src/                    # Source files
│   │   ├── components/         # Reusable components (ContactForm, ContactList, etc.)
│   │   ├── pages/              # Pages (Home, EditContact)
│   │   ├── App.js              # Main app component
│   │   └── index.js            # App entry point
│   └── package.json            # Frontend dependencies
│
├── backend/                    # Express backend
│   ├── config/                 # Database configuration
│   ├── controllers/            # Logic for handling API requests
│   ├── models/                 # Mongoose models for contact
│   ├── routes/                 # Routes for CRUD operations
│   ├── server.js               # Main backend server file
│   └── package.json            # Backend dependencies
│
└── README.md                   # Project documentation
```

## API Endpoints

The backend API supports the following endpoints for managing contacts:

| Method | Endpoint           | Description                   |
|--------|---------------------|-------------------------------|
| GET    | `/api/contacts`     | Retrieve all contacts         |
| POST   | `/api/contacts`     | Create a new contact          |
| GET    | `/api/contacts/:id` | Retrieve a single contact     |
| PUT    | `/api/contacts/:id` | Update a specific contact     |
| DELETE | `/api/contacts/:id` | Delete a specific contact     |

## Usage

### Running the Application

1. **View Contacts**: See a list of all contacts with search and filter options.
2. **Add Contacts**: Use the form to add a new contact.
3. **Edit Contacts**: Update contact information by selecting a contact.
4. **Delete Contacts**: Remove contacts with a single click.

### Key Components

- **ContactForm** - Form component for adding or editing contacts.
- **ContactList** - Displays a list of all contacts.
- **ContactCard** - Shows individual contact information.
- **SearchBar** - Allows users to search for specific contacts.

## State Management

This app uses React’s built-in **useState** and **useEffect** hooks for managing local state and handling component lifecycle events.

## Environment Variables

- **PORT** - The port where the backend server runs (e.g., 5000).
- **MONGODB_URI** - MongoDB connection string.

## Deployment

To deploy the app, follow these steps:

1. **Build the frontend** for production:

   ```bash
   cd frontend
   npm run build
   ```

2. **Serve the frontend** from the backend by copying the `build` folder to the backend or using a cloud deployment platform like **Heroku** or **Vercel**.

## Contributing

Contributions are welcome! Fork the repository, make changes in a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

