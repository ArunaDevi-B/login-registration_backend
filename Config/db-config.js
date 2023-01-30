const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/login-registration-page', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", ()=> console.log('connection error'));
    db.once('open', ()=> console.log('Connect successfully'));
}

module.exports = { connectDB };