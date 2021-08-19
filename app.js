const express = require('express');

const app = express();

// View engine setup
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('name');
}); 

app.listen(4000, () => console.log('Server started...'));