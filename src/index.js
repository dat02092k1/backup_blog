const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000
const db = require('./config/db')


// connect db
db.connect(); 

const route = require('./routes')

//app.use(express.static(path.join(__dirname, '/public/img')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/img')));  

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
     
// HTTP loger
//app.use(morgan('combined'))
// app.engine('hbs', hbs.engine )
// Template engine

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})