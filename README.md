# WanderLust 🌍✈️

Hey there, fellow traveler! Welcome to **WanderLust**, your ultimate companion for discovering and sharing incredible travel destinations. Imagine a place where you can list your dream vacation spots, read honest reviews from other adventurers, and even upload stunning photos to inspire your next getaway. Built with love using Node.js, Express, MongoDB, and EJS, WanderLust is all about connecting wanderers like you with the world's hidden gems.

Whether you're a seasoned globetrotter or just dreaming of your first trip, WanderLust lets you explore listings, leave reviews, and build a community around travel. We've poured in features like secure user accounts, seamless image uploads, interactive maps, and a fun rating system to make your experience as smooth and exciting as a spontaneous road trip.

## Live Demo 🎥

Want to see WanderLust in action? Check out the live version here: [https://wanderlust-hml2.onrender.com/listings](https://wanderlust-hml2.onrender.com/listings). Explore listings, sign up, and start your adventure!

## What Makes WanderLust Special? 🏖️

We've crafted WanderLust using the tried-and-true MVC (Model-View-Controller) architecture to keep things organized and easy to maintain:
- **Models**: These handle all the data magic, chatting with our MongoDB database via Mongoose to store your listings, reviews, and user info.
- **Views**: Powered by EJS templates, these bring the interface to life with beautiful, responsive designs.
- **Controllers**: The brains behind the operation, managing the logic that ties everything together.

This setup means WanderLust grows with you—scalable, reliable, and ready for more adventures!

## Awesome Features You'll Love 🚀

- **Secure User Authentication**: Sign up, log in, and log out effortlessly with Passport.js. Your account is your passport to creating and managing listings.
- **Listings Management**: Dive into CRUD operations—create, read, update, and delete travel listings. Add descriptions, prices, locations, countries, and now, upload images to showcase your spots!
- **Image Uploads**: Thanks to Cloudinary integration, you can upload and host photos directly on your listings. No more boring text-only posts—let the visuals do the talking!
- **Interactive Maps**: Powered by Mapbox, see exactly where your dream destinations are located. Zoom in, explore, and plan your route like a pro.
- **Reviews & Ratings**: Share your thoughts with detailed reviews and star ratings. Our enhanced rating system makes it easy to see what fellow travelers loved (or didn't).
- **Responsive Design**: Looks great on any device, thanks to EJS templates and Bootstrap. Whether you're on your phone or laptop, WanderLust travels with you.
- **Flash Messages**: Get instant feedback with success and error notifications—because who doesn't love a little encouragement?
- **Smart Sessions**: Secure session management with express-session keeps you logged in safely.
- **Data Validation**: Joi schemas ensure everything you enter is spot-on, preventing any travel mishaps.
- **Error Handling**: Custom error pages and middleware catch issues before they ruin your vibe.
- **Robust Database**: MongoDB with Mongoose handles all your data with ease and efficiency.

## Tech Stack Under the Hood 🛠️

We're all about the right tools for the job:
- **Backend**: Node.js and Express.js for a fast, reliable server.
- **Database**: MongoDB paired with Mongoose for flexible data modeling.
- **Authentication**: Passport.js with local strategy for secure logins.
- **Frontend**: EJS (Embedded JavaScript Templates) and Bootstrap for a sleek, user-friendly interface.
- **Validation**: Joi for keeping data clean and valid.
- **Extras**: connect-flash for messages, express-session for sessions, method-override for smooth updates, ejs-mate for template magic, and more!

## Get Started in Minutes ⏱️

Ready to embark on your WanderLust journey? Here's how to set it up:

1. **Grab the Code**:
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   ```

2. **Install the Essentials**:
   ```bash
   npm install
   ```

3. **Fire Up MongoDB**:
   - Make sure MongoDB is running on your machine.
   - It connects to `mongodb://127.0.0.1:27017/wanderlust` by default.

4. **Seed Some Sample Data** (Optional, but fun!):
   ```bash
   node init/index.js
   ```

5. **Launch WanderLust**:
   ```bash
   npm start
   ```
   Or for dev mode:
   ```bash
   node app.js
   ```

6. **Dive In**:
   Head to `http://localhost:8080` in your browser and start exploring!

## Project Structure at a Glance 📂

Here's the lay of the land:

```
WanderLust/
├── app.js                 # The heart of the app
├── middleware.js          # Keeps authentication in check
├── schema.js              # Validation rules with Joi
├── package.json           # All your dependencies
├── package-lock.json      # Dependency lock for consistency
├── .gitignore             # What we ignore in Git
├── controller/
│   ├── listings.js        # Handles listing logic
│   ├── reviews.js         # Manages reviews
│   └── users.js           # User auth controller
├── init/
│   ├── index.js           # Database setup script
│   └── data.js            # Sample listings data
├── models/
│   ├── listing.js         # Listing data model
│   ├── review.js          # Review model
│   └── user.js            # User model
├── routes/
│   ├── listing.js         # Listing routes
│   ├── review.js          # Review routes
│   └── user.js            # User auth routes
├── utils/
│   ├── ExpressError.js    # Custom error handling
│   └── wrapAsync.js       # Async error wrapper
├── views/
│   ├── error.ejs          # Error page
│   ├── includes/
│   │   ├── flash.ejs      # Flash message snippets
│   │   ├── footer.ejs     # Footer component
│   │   └── navbar.ejs     # Navigation bar
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout
│   ├── listings/
│   │   ├── edit.ejs       # Edit listing page
│   │   ├── index.ejs      # Listings overview
│   │   ├── new.ejs        # Create new listing
│   │   └── show.ejs       # Detailed listing view
│   └── user/
│       ├── login.ejs      # Login form
│       └── signup.ejs     # Signup form
├── public/
│   ├── css/
│   │   ├── rating.css     # Rating styles
│   │   └── style.css      # Custom CSS
│   └── js/
│       ├── compass-regular-full.png # Icon asset
│       ├── map.js         # Map functionality
│       └── script.js      # Client-side scripts
└── README.md              # You're reading it!
```

## API Endpoints Overview 🌐

For the tech-savvy explorers:
- **GET /**: Welcome home
- **GET /listings**: Browse all listings
- **GET /listings/new**: New listing form (login needed)
- **POST /listings**: Create a listing (login needed)
- **GET /listings/:id**: View listing details
- **GET /listings/:id/edit**: Edit form (login needed)
- **PUT /listings/:id**: Update listing (login needed)
- **DELETE /listings/:id**: Delete listing (login needed)
- **POST /listings/:id/reviews**: Add a review
- **DELETE /listings/:id/reviews/:reviewId**: Remove a review
- **GET /signup**: Signup page
- **POST /signup**: Register account
- **GET /login**: Login page
- **POST /login**: Log in
- **GET /logout**: Log out

## Contribute to the Journey 🤝

Love WanderLust and want to make it even better? We'd love your help!

1. Fork the repo.
2. Create a feature branch.
3. Make your changes.
4. Commit and push.
5. Open a pull request—we'll review it ASAP.

## License 📜

This project is under the ISC License. Check `package.json` for the fine print.

## Meet the Creator 👋

Built with passion by **Steven Sawant**. Happy travels!
