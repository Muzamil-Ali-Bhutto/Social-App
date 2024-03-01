const User = require("../models/user");
const jwt = require("jsonwebtoken");



exports.isAuthenticated = async(req,res,next) =>{
try {

    const {token} = req.cookies;


    if(token){
        return res.status(401).json({
            message:"Please login first"
        });
    }
    const docoder = await jwt.verify(token, process.enc.JWT.SECERT);

    req.user = await User.finalById(decoded._id);

    next();
    
} catch (error) {
    res.status(500).json({
        message: error.message,
    });
};
   
};