const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullName : {
        firstName : {
            type : String,
            required : true,
            minLength : [3, 'Atleast 3 characters must be there']
        },
        lastName : {
            type : String,
            minLength : [3, 'Atleast 3 characters must be there']
        }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        minLength : [6, 'Atleast 6 characters must be there']
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    socketId : {
        type : String
    },
    status : {
        type : String,
        enum : [ 'active', 'inactive'],
        default : 'active'
    },
    vehicle : {
        color : {
            type : String,
            required : true,
            minLength : [3, 'Atleast 3 characters must be there']
        },
        plate : {
            type : String,
            required : true,
            minLength : [3, 'Atleast 3 characters must be there']
        },
        capacity : {
            type : Number,
            required : true,
            min : [1, 'Capacity must be atleast 1']
        },
        vehicleType : {
            type : String,
            required : true,
            enum : [ 'car', 'motorcycle', 'auto']
        },
        location : {
            lat : {
                type : Number
            },
            lng : {
                type : Number
            }
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id : this._id }, process.env.JWT_SECRET, { expiresIn : '1d' })
    return token
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
} 

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel