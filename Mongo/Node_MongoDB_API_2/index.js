
// Import express
let express = require('express')
// Import routes
let apiRoutes = require("./api-routes")
// Import bodyParser
let bodyParser = require('body-parser')

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});