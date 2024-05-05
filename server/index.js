const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const logger = require("./middleware/logger");
const userRoutes = require("./routes/UserRoute");

// Parse JSON bodies
app.use(bodyParser.json());

app.use(cors());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

// Middleware
app.use(logger);

// Routes
app.use(userRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
