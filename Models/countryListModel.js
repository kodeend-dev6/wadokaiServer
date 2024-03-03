const {Schema, model} = require('mongoose');

const countryListSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Country name is required']
    },
    slug: {
        type: String,
        required: [true, 'Country slug is required']
    },
    flag: {
        type: String,
        required: [true , `Country flag is required`]
    },
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Member'
    },
}, {
},{timestamps: true, toJSON: {virtuals: true}});

const CountryList = model('CountryList', countryListSchema);
module.exports = CountryList;