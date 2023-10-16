const CONSTANTS = require('../Config/constants')
const {HashPassword,VerifyPassword} = require('../Helpers/Hashing')
const jwt = require('jsonwebtoken')

class UserService{
    constructor(userRepo){
        this.userRepo = userRepo;
    }
    async Register(req){
        const response = {}
        const {name,email,password} = req.body
        if(!name || !email || !password){
            response.message = CONSTANTS.FIELD_EMPTY
            response.status = CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE
            return response;
        }
        const newUser = {
            name,
            email,
            password:await HashPassword(password)
        }

        const user = await this.userRepo.Register(newUser)
        if(!user){
            response.message = CONSTANTS.SERVER_ERROR_MESSAGE
            response.status = CONSTANTS.SERVER_ERROR_HTTP_CODE
            return response;
        }
        response.message  = CONSTANTS.USER_CREATED
        response.status = CONSTANTS.SERVER_CREATED_HTTP_CODE
        response.data = user
        return response
    }

    async Login(req){
        const response = {}
        const {email, password} = req.body
        const user  = await this.userRepo.Login(email)
        if(!user){
            response.message = CONSTANTS.USER_NOT_FOUND
            response.status = CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE
            return response
        }
        const passwordMatch = await VerifyPassword(password,user.password)
        if(!passwordMatch){
            response.message = CONSTANTS.PASSWORD_NOT_FOUND
            response.status = CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE
            return response
        }
        const token = jwt.sign({userid:user._id,username:user.name},'secretkey')
        response.message = CONSTANTS.USER_LOGIN_OK
        response.status = CONSTANTS.SERVER_OK_HTTP_CODE
        response.data = {id:user._id,username:user.name}
        response.token = token
        return response
    }

    async Profile(req){
        const response = {}
        response.status  = CONSTANTS.SERVER_OK_HTTP_CODE
        response.data = {
            username:req.username,
            userid:req.userid
        }
        return response
    }



}

module.exports = {UserService}