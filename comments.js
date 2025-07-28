// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');  
// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Import the comments router
const commentsRouter = require('./commentsRouter');
// Use the comments router for all routes starting with /comments   
app.use('/comments', commentsRouter);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the app for testing purposes
module.exports = app;