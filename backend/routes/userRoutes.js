const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const { registerUser } = require('../controllers/userController')

router.post('/register', 
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 char long'),
        body('password').isLength({min:6}).withMessage("Password must be atleast 6 char long")
    ],
    registerUser
)

module.exports= router;