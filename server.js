// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require('express');
console.log("Let's find out what express is", express);

// invoke express and store the result in the variable app
var app = express();

console.log("Let's find out what app is", app);

// use app's get method and pass it the base route '/' and a callback
// app.get('/', function(request, response){
//     //just for fun, take a look at the request and response objects
//     console.log("The request object", request);
//     console.log("The response object", response);
//     // use the response object's .send() method to respond with an h1
//     response.send("<h1>Hello Express</h1>");
// });

var path = require('path');


// tell our server to use a static file folder to handle requests for static content:
// ex: requesting for an .html file like "localhost:8000/myhtml.html" (do NOT forget the .html in the url!!)
// ..will go to that 'static' folder and will look for the myhtml.html file to serve.
// app.use(express.static(__dirname + "/static"));

// To make the express.static path accept/look for .html and .htm files in it's root static directory when a
// url with exact name is requested (w/o extention), we can pass it an object as options:
var options = {
    extensions: ['htm', 'html'],
}

// pass the 'options' object above as 2nd argument:
app.use(express.static(__dirname + "/static", options));
// the .html and .htm files need to sit directly in the /static directory, not any of its children directories
// (by default, this works same for image, css and js files...)

console.log("joining: ", __dirname + '/static');
console.log("Btw, dirname in front of our /static path is: ", __dirname);

// app.get('/', ....) route request will by default search for the index.html file within the /static 
// directory to serve it to client.

app.get('/cars', function(request, response){
    response.sendFile('cars.html');
});

app.get('/form', function(request, response){
    response.sendFile("form.html");
});



// // This sets the location where express will look for the ejs views
// app.set('views', __dirname + '/views'); 
// // Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
// app.set('view engine', 'ejs');

// app.get("/users", function(request, response){
//     // hard-coded user data
//     var users_array =[
//         {name: "Michael", email: "michael@codingdojo.com"},
//         {name: "Jady", email: "jay@codingdojo.com"},
//         {name: "Brendan", email: "brendan@codingdojo.com"},
//         {name: "Andre", email: "andrew@codingdojo.com"}
//     ];

//     // WE ARE PASSING A JS Object, 'JSON', to response.render() ...
//     response.render('users', {users: users_array}); 
// })

// tell the express app to listen on port 8000, always put thi at the end of your server.js file
app.listen(8000, function(){
    console.log("listening on port 8000");
});

