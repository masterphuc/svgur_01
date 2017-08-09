const mongoose = require('mongoose');


const SvgUploadSchema = mongoose.schema({
    content:{
        type: String,
        required: true
    }
})

const SvgUpload = module.exports = mongoose.model('SvgUpload', SvgUploadSchema);