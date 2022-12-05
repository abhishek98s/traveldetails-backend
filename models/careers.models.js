const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careersSchema = new Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, requred: true},
    email: {type: String, requred: true},
    position: {type: String, required:true},
    additionalInfo: {type: String},
    cv : {
        cv:{
        data: Object,
        contentType: String
        }
    }
}, {
    timesamps: true,
})

const Careers = mongoose.model('Carrers', careersSchema);

module.exports = Careers;
