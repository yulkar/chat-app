//set the server
const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; //for Heruko
var app = express();
app.use(express.static(publicPath));
//starts the server
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

// console.log(__dirname + '/../public');
// console.log(publicPath);
