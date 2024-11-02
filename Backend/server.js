const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const connectDB = require('./database/mongo');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use('/api', blogRoutes); 

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error(`Error starting server: ${error.message}`);
        process.exit(1);
    }
};

startServer();
