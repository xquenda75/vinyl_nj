import {Router} from 'express';
import { DeleteAlbums, GetAlbums, GetAlbumsById, GetMovies, Health, PostAlbums, PutAlbums } from '../controller/index.controller.js';
import { Login } from '../controller/login.controller.js';
import { VerifyToken } from '../auth/auth.js';

const apiRoutes = Router();

apiRoutes.get('/health', Health);
apiRoutes.get('/albums', VerifyToken,GetAlbums);
apiRoutes.post('/albums',VerifyToken,PostAlbums);
apiRoutes.get('/albums/:id',VerifyToken,GetAlbumsById);
apiRoutes.put("/albums/:id",VerifyToken,PutAlbums);
apiRoutes.delete("/albums/:id",VerifyToken,DeleteAlbums);

apiRoutes.get("/movies",GetMovies);
apiRoutes.post('/login',Login);

apiRoutes.use((req,res)=>{
    res.status(404).json({message:'Ruta no encontrada'});
});

export default apiRoutes;
