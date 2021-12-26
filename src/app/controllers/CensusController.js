const Census = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class CensusController {
    show(req, res) {
        res.send('Census'); 
    }
}

module.exports = new CensusController;