# Blogging Website - MERN Stack

This project is a blogging website built using the MERN stack (MongoDB, Express, React, Node.js). The website includes two main features: an **Admin page** where users can post blogs by specifying a title, description, and image URL, and a **Home page** where all published blogs are displayed.

---

## Features

1. **Admin Page**:  
   - Allows the admin to post a blog with a title, description, and image URL.
   - Blog data is stored in a MongoDB database.

2. **Home Page**:  
   - Displays all the blogs posted by the admin.
   - Each blog includes the title, description, and image.

---

## Project Structure

The project is organized into two main folders:
- **Backend** - Contains the API built with Node.js, Express, and MongoDB.
- **Frontend** - Built with React to create the user interface for both admin and home pages.

---

## Prerequisites

To run this project locally, you need:
- **Node.js** and **npm** installed
- **MongoDB** (locally or using MongoDB Atlas)

---

## Getting Started

Follow these steps to set up the project:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blogging-website-mern.git
cd blogging-website-mern
```

### 2. Set Up the Backend

Navigate to the `backend` folder, install dependencies, and configure environment variables.

```bash
cd backend
npm install
```

#### Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```plaintext
PORT=5000
MONGO_URI=your_mongo_connection_string
```

- Replace `your_mongo_connection_string` with your MongoDB connection string.

#### Start the Backend Server

```bash
npm start
```

The backend server will run on `http://localhost:5000`.

### 3. Set Up the Frontend

Navigate to the `frontend` folder, install dependencies, and start the frontend development server.

```bash
cd ../frontend
npm install
```

#### Start the Frontend Server

```bash
npm start
```

The frontend server will run on `http://localhost:3000`.

---

## Running the Application

Once both the backend and frontend servers are running:

- Visit **http://localhost:3000** to access the website.
- The **Home page** will display all the blogs.
- Navigate to the **Admin page** to post a new blog (Note: Add authentication as needed).

---

## Additional Scripts

For convenience:

- **Backend**
  - `npm run dev` - Start the server with nodemon for live reloading (development).

- **Frontend**
  - `npm run build` - Build the frontend for production.

---

## Folder Structure

```plaintext
blogging-website-mern/
│
├── backend/
│   ├── config/         # Configuration files, e.g., db connection
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes for blog operations
│   ├── .env            # Environment variables (not committed to Git)
│   └── server.js       # Main server file
│
├── frontend/
│   ├── public/         # Public assets
│   ├── src/
│   │   ├── components/ # React components for admin and home pages
│   │   └── App.js      # Main App component
│   └── .env            # Optional: Environment variables for frontend
│
└── README.md           # Project documentation
```

---

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork and modify the project for your needs.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For significant changes, open an issue first to discuss them.

---

## Acknowledgments

Special thanks to all contributors and maintainers of the technologies used in this project.

---

Enjoy blogging with the MERN stack! 🚀
