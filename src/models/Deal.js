const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    value:{
        type: Number,
        require: true
    },
    currency:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Deal", dealSchema);