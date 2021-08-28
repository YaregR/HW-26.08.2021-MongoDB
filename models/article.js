const mongoose = require('mongoose');
const path = require('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
    title: {
        type: Schema.Types.String,
        unique: true
    },
    author: String,
    text: String
});

const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, generalSchema);

module.exports = model;