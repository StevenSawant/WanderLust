const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

// const Listing = require("../models/listing.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingcontroller = require("../controller/listings.js");

router.route('/')
  //Index Route
  .get(wrapAsync(listingcontroller.index))
  //Create route
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingcontroller.createListing)
  );

//New route
router.get("/new", isLoggedIn, listingcontroller.renderNewForm);

router.route("/:id")
  //Show route
  .get(
    wrapAsync(listingcontroller.showListing)
  )
  //Update Route
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingcontroller.updateListing)
  )
  //Delete Route
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingcontroller.destroyListing)
  );

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingcontroller.renderEditForm)
);

module.exports = router;