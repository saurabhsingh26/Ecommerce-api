const Admin = require('../../../models/admin');
const jwt = require('jsonwebtoken');

module.exports.signUp = async function(req,res){
    //
    try{
        const admin = await Admin.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Admin created successfully",
        });

    }catch(error){
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

module.exports.createSession = async function(req,res){
    
    try{
        let admin = await Admin.findOne({email: req.body.email});

        if(!admin || admin.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token please keep it safe',
            data: {
                token: jwt.sign(admin.toJSON(), "api", {expiresIn: '100000000'})
            }
        })

    }catch(err){
        console.log("******",err);
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}