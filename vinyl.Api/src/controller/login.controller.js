import "dotenv/config";
import jwt from 'jsonwebtoken';



export const Login = (req,res)=>{
    try{
        const {UserName,Password} = req.body;
        const secretKey=process.env.SECRET_KEY;
        
        if (!UserName || !Password)
            return res.status(400).json({message:'Usuario y contraseña requeridos'});

        if (UserName === 'jorge.lopez@dock.tech' && Password === 'pass'){

            const token =jwt.sign({UserName},secretKey,{expiresIn:'1h'});

            return res.status(200).json({
                message:'Login correcto',
                token:token
            });
        }
        else{
            return res.status(401).json({message:'Login incorrecto'});
        }
    }
    catch(e){
        return res.status(500).json({message:'Error al hacer login'});
    }

}

