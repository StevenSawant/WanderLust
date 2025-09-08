const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const session = require("express-session");
const flash = require("connect-flash");

// const { listingSchema, reviewSchema } = require("./schema.js");

const Listing = require("./models/listing.js");
// const Review = require("./models/review.js");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js"); 

const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //1 week time for today
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    httpOnly: true,
  }
};



app.get("/", (req, res) => {
  res.send("Welcome to Wanderlust");
});

app.use(session(sessionOptions));  //It is also used for passport package as uses session to track and store user info
app.use(flash());

app.use(passport.initialize());
app.use(passport.session()) //Middleware that will restore login state from a session.

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  // console.log(req.flash("success"));
  // console.log("Flash success:", res.locals.successMsg);
  // console.log("Flash error:", res.locals.errorMsg);
  next();
})

//Listings
app.use("/listings", listings);

//Review
app.use("/listings/:id/reviews", reviews);

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new Villa",
//     description: "By the Beach",
//     image: "",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("Testing successful");
// });

app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});