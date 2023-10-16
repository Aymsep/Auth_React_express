const CONSTANTS = require('../Config/constants')
const {verify} = require('../Helpers/JWT')
exports.TokenCheck = (req,res,next) =>{
    const authHeader = req.headers.authorization || null;
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.json({
            message:CONSTANTS.ROUTE_NOT_FOUND,
            status:CONSTANTS.SERVER_ERROR_HTTP_CODE
        })
    }
    
    const userData = verify(token)
    req.username = userData.username
    req.userid = userData.userid
    next()

}