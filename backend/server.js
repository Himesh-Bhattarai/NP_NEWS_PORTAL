const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./src/routes/authRoutes");
const connectDB = require("./config/database");

require('dotenv').config();

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true
}));



app.use(cors({
    origin: 'http://localhost:5173', // your frontend origin
    credentials: true
}));


app.use(helmet());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session()); 

app.use("/api/auth", authRoutes); 
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
