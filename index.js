const express = require('express');
const app = express();
const personRoutes = require('./routes/person.route')
let port = 8000
const { PORT} = process.env //6000
console.log(PORT)
app.use('/info',personRoutes) //load multiple routes



//spin the server
app.listen(8000, () => {
    console.log('server is running')
})
