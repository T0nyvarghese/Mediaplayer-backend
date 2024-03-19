//import json-server library
const jsonServer = require('json-server')//variable name can be changed

// create serve using create function
const mediaPlayerServer = jsonServer.create()// server can be created using json library

//create path for database.json file
const router = jsonServer.router('database.json')

//create middleware to convert json into js
const middleware = jsonServer.defaults()//its a function which has the ability to control request.response cycle

//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for the server
const port = 4000 || process.env.PORT //also called environment variables

//run the server


mediaPlayerServer.listen(port,()=>{
    console.log('MediaPlayer sever running successfully');

})