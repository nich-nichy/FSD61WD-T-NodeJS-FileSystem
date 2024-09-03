const express = require("express");
const morgan = require("morgan");
require('dotenv').config();

// Setting up the server
const app = express();
const port = 8080;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => res.send("Backend is working!"));
app.use("/file", require("./routes/file.route"));

// Route Error handling
app.use((req, res, next) => {
    const error = {
        status: 404,
        message: "Check route and method",
    };
    next(error);
});

// Error handling in controller
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log("ERROR", error);
    res.json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

// Listening to the server
app.listen(port, () => console.log(`Port running on: ${port}!`));