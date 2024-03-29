require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoDBSession = require("connect-mongodb-session");
const passport = require("passport");
const path = require("path");

const authController = require("./controllers/auth");
const meatController = require("./controllers/meats");

const User = require("./models/user");

const app = express();
const PORT = process.env.PORT;
const dbURL = process.env.MONGODB_URL;
const MongoDBStore = mongoDBSession(session);
const sessionStore = new MongoDBStore({
  uri: dbURL,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    rolling: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.resolve(process.cwd() + "/client/build")));
console.log("process.cwd() =" + process.cwd());
console.log("__dirname = " + __dirname);

app.use(authController);
//need to decide on auth control location for routing to Login and Register Pages, as well as connecting to the DB as well, i'll need to collab with you boys for this!
app.use(meatController);

mongoose.connect(dbURL, (err) => {
  console.log("Connected to db");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Connected to butcher server on PORT", PORT);
});
