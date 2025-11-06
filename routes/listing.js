const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
// const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingcontroller = require("../controller/listings.js");

const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })  //This saves the files locally by creating a folder uploads
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


router.route('/')
  //Index Route
  .get(wrapAsync(listingcontroller.index))
  //Create route
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingcontroller.createListing)
  );
  // .post(upload.single('listing[image]'),(req, res) => {
  //   res.send(req.file); 
  // });

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
    upload.single('listing[image]'),
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