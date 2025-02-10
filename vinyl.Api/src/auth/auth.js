import "dotenv/config";
import jwt from 'jsonwebtoken';



export const VerifyToken = (req,res,next)=>{
    const header = req.header('Authorization') || '';
    const token = header.split(' ')[1];
    const secretKey=process.env.SECRET_KEY;

    console.log(header);
    console.log(token);   
    if (!token){
        return res.status(401).json({message:'Token requerido'});
    }
    try{
        const payload = jwt.verify(token,secretKey);
        console.log(payload);
        req.UserName = payload.UserName;
        next();
    }
    catch(e){
        return res.status(401).json({message:'Token invalido'});
    }
    
}