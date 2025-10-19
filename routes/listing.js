const express = require("express");
const router = express.Router();

const { listingSchema } = require("../schema.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const Listing = require("../models/listing.js");

const {isLoggedIn} = require("../middleware.js");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  // console.log(req.body);
  console.log(error);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
  })
);

//New route
router.get("/new", isLoggedIn,(req, res) => {
  // console.log(req.user);
  res.render("listings/new.ejs");
});

//Show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "The Listing you requested for, does not exist.");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//Create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    // if (!req.body.listing) {
    //   throw new ExpressError(400, "Send a valid Listings");
    // }

    //Using Joi package to validate instead of if statements
    // let result = listingSchema.validate(req.body);
    // console.log(req.body);
    // console.log(result);
    // if(result.error){
    //   throw new ExpressError(400, result.error);
    // }

    // let { title, description, image, price, country, location } = req.body;
    // let listing = req.body.listing;                      ====|
    const newListing = new Listing(req.body.listing); //   <====|
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  })
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    // console.log("success");
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "The Listing you requested for, does not exist.");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    // if (!req.body.listings) {
    //   throw new ExpressError(400, "Send a valid Listings");
    // }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  })
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;
