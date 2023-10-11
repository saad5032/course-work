import jwt from "jsonwebtoken"

function  authMiddleware(req,res,next){
    try {
        // client send the request. This req has headers and the inputs like todoname from client
        //Fetching the token from headers the client send in his request

         // token from client is in req headers 
         let token =  req.headers["auth-token"]

         const privateKey = "TheHackingSchool"


         // i am getting the payload back, the data i used in payload when creating token. 
         // now I can access this payload data i.e email and password, 
         let verifiedPayload = jwt.verify(token,privateKey)

         // I am making an extra field payload in req object which will store this verifiedPayload
         req.payload = verifiedPayload

        // Iam sending this req after verifying the token in req and after adding field payload in req 
        // to the server api where the authmiddleware function is used.
        return next()
    } catch (error) {
        res.status(400).json({error:"internal error"})
    }
}

export default authMiddleware