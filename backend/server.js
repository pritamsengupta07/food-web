const express = require("express");
const authRoutes = require("./router/auth-router"); // Ensure correct path to auth-router.js
const { home, register } = require("./controllers/auth-controller");
const connectdb = require("./utils/db");
const bodyParser = require("body-parser");
const contactRoute = require("./router/contact-router");
const cors = require('cors');

// Initialize Express app
const app = express();

// let tackle cors
const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from your frontend domain
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD", // Allowed methods
  credentials: true, // Allow credentials (cookies, etc.)
  optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Apply CORS middleware
app.use(cors(corsOptions));



connectdb();

// Middleware to parse JSON
app.use(bodyParser.json());
// Define the port
const PORT = process.env.PORT || 3000;

// Define routes
app.use("/api/auth", authRoutes); // Use the defined auth routesjayegate
app.get("/", home);
app.post("/register", register);
app.use("/api/form", contactRoute);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
