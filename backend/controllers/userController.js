const userModel = require('../models/usermodel');
const userservice= require('../services/userservices')
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

const registerUser= async(req,res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    console.log(req.body)
    const {fullname, email,password}= req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userservice({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email, 
        password: hashedPassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({token,user});
}

module.exports = {registerUser};
