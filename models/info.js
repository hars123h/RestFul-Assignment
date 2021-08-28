const express = require("express");
const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    id: {
        type: Number, 
        unique: true
    },
    first_name: {
        type:String,
        required: true,
        trim:true
    },
    last_name: {
        type:String,
        required: true,
        trim:true
    },
    company_name: {
        type:String,
        required: true,
        trim:true
    },
    city: {
        type:String,
        required: true
    },
    state: {
        type:String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    web: {
        type:String,
        required: true,
        trim:true
    },
    age: {
        type:Number,
        required: true
    }
})

const PersonalInfo = new mongoose.model("PersonalInfo", infoSchema)
module.exports = PersonalInfo;