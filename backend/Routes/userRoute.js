const express = require('express');
const Router = express.Router();

const {Register,Login,Profile} = require('../Controllers/User')

const {TokenCheck}  = require('../Middlewares/TokenCheck')



Router.post('/register',Register)
Router.post('/login',Login)
Router.get('/profile',TokenCheck,Profile)





module.exports  = Router