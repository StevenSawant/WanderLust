const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    // console.log(req.user);
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }, //Here nesting population is used populate fields within documents that have already been populated. This is achieved by passing an object to populate() with a nested populate option
        })
        .populate("owner");

    console.log(listing);
    if (!listing) {
        req.flash("error", "The Listing you requested for, does not exist.");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
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
    console.log(req.user);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
    // console.log("success");
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "The Listing you requested for, does not exist.");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    // if (!req.body.listings) {
    //   throw new ExpressError(400, "Send a valid Listings");
    // }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}