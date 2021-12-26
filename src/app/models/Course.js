const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    username: { type: String, maxLength: 600 },
    password: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
  });

 // module.exports = mongoose.model('Course', Course)
 module.exports = mongoose.model("Model", Course, "cadres");