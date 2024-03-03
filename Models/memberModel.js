const {Schema, model} = require('mongoose');

const memberSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Member name is required']
    },
    designation: {
        type: String,
        required: [true, 'Member designation is required']
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    certificate: {
        type: String,
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'CountryList'
    }
}, {timestamps: true, toJSON: {virtuals: true}});

const Member = model('Member', memberSchema);
module.exports = Member;


// {
//     personId: 1,
//     name: "Alexander Hevesi",
//     designation: "President",
//     image: "/images/members/persons/austria/Alexander-Hevesi-de9f4.jpg",
//     email: "",
//     phone: "",
//     certificate: "5th Dan WKF",
//   },