class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async Register(user){
        const {name,email,password} = user;
        const createUser = await this.userModel.create({
            name,
            email,
            password
        })
        const userWithoutPassword = createUser.toObject()
        delete userWithoutPassword.password
        console.log(userWithoutPassword)
        return userWithoutPassword
    }

    async Login(email){
        const user = await this.userModel.findOne({email:email})
        console.log(user)
        return user
    }
}

module.exports = {UserRepository};









// app.post('/login',async(req,res,next) => {
//     try{
//         const {email,password} =  await req.body
//         User_auth.findOne({email:email}).then(user => {
//             if(!user){
//                 return res.status(401).json('User Not Found')
//             }
//            bcrypt.compare(password, user.password).then(valid=>{
//               if(!valid){
//                 return res.status(401).json('Password is incorrect')
//               }
//               const token = jwt.sign({userid:user._id,username:user.username},'secret')
//                res.cookie('jwt',token,{
//                 httpOnly:true,
//                 sameSite: "none",
//                 secure:false

//               })
//               return res.status(200).json({
//                 user,
//                 token
//               })
//            })
//         })
//     }catch{
//         console.log('err')
//     }
// })















