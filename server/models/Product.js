const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");
const Schema =mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: 
    {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    title:
    {
        type: String,
        maxlength:50
    },
    description:
    {
        type: String
    },
    price: 
    {
        type: Number,
        default:0
    },
    image: 
    {
        type:Array,
        default: []
    },
    clothes:
    {
        type: Number,
        default: 1
    },
    sold: 
    {
        type: Number,
        maxlength:100,
        deafult: 0
    },
    views: 
    {
        type: Number,
        default: 0
    },
    
    
},{timestamps:true})





const Product = mongoose.model('Product', productSchema);

module.exports = { Product }