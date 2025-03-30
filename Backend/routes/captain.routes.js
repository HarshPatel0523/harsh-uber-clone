const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const {authCaptain} = require('../middlewares/auth.middlewares');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('Name must be at least 3 characters long'),      
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isLength({min: 3}).withMessage('Type must be at least 3 characters long'),
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
], 
    captainController.loginCaptain
)

router.get('/profile',authCaptain,captainController.getCaptainProfile)

router.post('/logout',[
    body('token').isLength({min: 1}).withMessage('Token is required'),
],
    captainController.logoutCaptain
)

module.exports = router;