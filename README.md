# WanderLust

WanderLust is a full-stack web application built with Node.js, Express, MongoDB, and EJS, designed for users to explore, list, and review travel destinations. It features user authentication, CRUD operations for listings, and a review system.

## Features

- **User Authentication**: Sign up, login, and logout using Passport.js with local strategy.
- **Listings Management**: Create, read, update, and delete travel listings with images, descriptions, prices, locations, and countries.
- **Reviews**: Add and delete reviews for listings with ratings and comments.
- **Responsive UI**: Built with EJS templates and Bootstrap for a clean, responsive interface.
- **Flash Messages**: Success and error notifications using connect-flash.
- **Session Management**: Secure sessions with express-session.
- **Data Validation**: Server-side validation using Joi schemas.
- **Error Handling**: Custom error pages and middleware for robust error management.
- **Database**: MongoDB with Mongoose for data modeling and operations.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js
- **Frontend**: EJS (Embedded JavaScript Templates), Bootstrap
- **Validation**: Joi
- **Other Libraries**: connect-flash, express-session, method-override, ejs-mate

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Ensure MongoDB is installed and running on your system.
   - The default connection URL is `mongodb://127.0.0.1:27017/wanderlust`.

4. **Initialize the database** (optional, for sample data):
   ```bash
   node init/index.js
   ```

5. **Start the application**:
   ```bash
   npm start
   ```
   Or for development:
   ```bash
   node app.js
   ```

6. **Access the app**:
   Open your browser and go to `http://localhost:8080`.

## Usage

- **Home Page**: View all listings.
- **Sign Up/Login**: Create an account or log in to manage listings.
- **Create Listing**: Add new travel listings (requires login).
- **Edit/Delete Listing**: Modify or remove your listings (requires login).
- **Add Reviews**: Leave reviews on listings.
- **Delete Reviews**: Remove reviews (if authorized).

## Project Structure

```
WanderLust/
├── app.js                 # Main application file
├── middleware.js          # Authentication middleware
├── schema.js              # Joi validation schemas
├── package.json           # Dependencies and scripts
├── package-lock.json      # Lockfile for dependencies
├── .gitignore             # Git ignore rules
├── init/
│   ├── index.js           # Database initialization script
│   └── data.js            # Sample data for listings
├── models/
│   ├── listing.js         # Listing model
│   ├── review.js          # Review model
│   └── user.js            # User model
├── routes/
│   ├── listing.js         # Routes for listings
│   ├── review.js          # Routes for reviews
│   └── user.js            # Routes for user authentication
├── utils/
│   ├── ExpressError.js    # Custom error class
│   └── wrapAsync.js       # Async error wrapper
├── views/
│   ├── error.ejs          # Error page template
│   ├── includes/
│   │   ├── flash.ejs      # Flash message partial
│   │   ├── footer.ejs     # Footer partial
│   │   └── navbar.ejs     # Navigation bar partial
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout template
│   ├── listings/
│   │   ├── edit.ejs       # Edit listing page
│   │   ├── index.ejs      # Listings index page
│   │   ├── new.ejs        # New listing page
│   │   └── show.ejs       # Individual listing page
│   └── user/
│       ├── login.ejs      # Login page
│       └── signup.ejs     # Signup page
├── public/
│   ├── css/
│   │   └── style.css      # Custom styles
│   └── js/
│       └── script.js      # Client-side scripts
└── README.md              # This file
```

## API Endpoints

- **GET /**: Home page
- **GET /listings**: List all listings
- **GET /listings/new**: New listing form (authenticated)
- **POST /listings**: Create new listing (authenticated)
- **GET /listings/:id**: Show listing details
- **GET /listings/:id/edit**: Edit listing form (authenticated)
- **PUT /listings/:id**: Update listing (authenticated)
- **DELETE /listings/:id**: Delete listing (authenticated)
- **POST /listings/:id/reviews**: Add review
- **DELETE /listings/:id/reviews/:reviewId**: Delete review
- **GET /signup**: Signup form
- **POST /signup**: Register user
- **GET /login**: Login form
- **POST /login**: Authenticate user
- **GET /logout**: Logout user

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## License

This project is licensed under the ISC License. See the `package.json` for details.

## Author

Steven Sawant
