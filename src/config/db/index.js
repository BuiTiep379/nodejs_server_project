const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/emaily-dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully!!!');
    } catch (error) {
        console.log('Connected failure!!!');
    }
};

module.exports = {connect};