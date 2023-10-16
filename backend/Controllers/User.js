const {UserService}  = require('../Services/userService')
const {UserRepository}  = require('../Repo/userRepo')
const Userschema = require('../Modals/UserAuth')

const userRepo = new UserRepository(Userschema)

const userServ = new UserService(userRepo)


exports.Register = async (req, res) => {
    const user = await userServ.Register(req)
    console.log(user)
    res.json(user)
}

exports.Login = async (req, res) => {
    const user = await userServ.Login(req)
    console.log('user',user)
    res.json(user)
}

exports.Profile = async (req, res) => {
    const user = await userServ.Profile(req)
    console.log('user',user)
    res.json(user)
}