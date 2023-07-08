const Joi = require('joi');
const mongoose = require('mongoose');
// const multer = require('multer');

const fileSchema = new mongoose.Schema({
    originalname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    uniqueName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    filePath: {
        type: String,
        required: true
      },
    mimetype: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    size: {
        type: Number,
        max: 500000,
        required: true,

    }

});

const File = mongoose.model('File', fileSchema);



exports.File = File;
