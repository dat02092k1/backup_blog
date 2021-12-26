const newsRouter = require('./news'); 
const censusRouter = require('./census'); 
const siteRouter = require('./site'); 

function route(app) {

    app.use('/news', newsRouter);
    app.use('/census', censusRouter);
    app.use('/', siteRouter); 

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });
               
    // app.get('/search', (req, res) => {
    //     res.render('search');
    //   });
      
    // app.post('/search', (req, res) => {
    //     res.send('');
    //   });
}

module.exports = route;