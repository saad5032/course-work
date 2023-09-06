import jwt from "jsonwebtoken"

const privateKey = "TheHackingBootcamp"

function authMiddleWare(req,res,next){
    try{
        //Fetch the token from headers
        const token = req.headers["auth-token"];

        //verify the token
        let payload = jwt.verify(token,privateKey)

        //set the payload in req object
        req.payload = payload
        
        return next()
    }
    catch(err){
        console.log(err);
    }
}

export default authMiddleWare