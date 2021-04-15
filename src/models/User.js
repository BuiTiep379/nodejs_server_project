const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    googleId : String,
    displayName: String
});

module.exports = mongoose.model('users', userSchema);
