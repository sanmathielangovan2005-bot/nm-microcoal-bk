require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const goalRoutes = require("./routes/goalRoutes");

const app = express();

// Middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});