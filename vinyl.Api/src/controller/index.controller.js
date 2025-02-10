import pkg from "pg";
import 'dotenv/config';
import {RepoAlbums} from '../repository/repoAlbums.js';

const { Pool } = pkg;

console.log('Host DB:' +process.env.DB_HOST);   
console.log('User DB:' +process.env.DB_USER);

const pool =new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


const Health=(req, res)=>{
    console.log('Host DB:' +process.env.DB_HOST);
    console.log('User DB:' +process.env.DB_USER);
    console.log('Password DB:' +process.env.DB_PASSWORD);
    return res.json({message: 'Status Ok from NodeJS!'});
 }

const GetAlbums=async (req,res)=>{
    try{
        const repoAlbum = new RepoAlbums();
        const response = await repoAlbum.GetAlbums();
        
        return res.status(200).json(response)
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message:'Error al obtener los datos'})
    }
}

const PostAlbums=async (req,res)=>{

        try{
            const {title,artist,price} = req.body;
            const repoAlbum = new RepoAlbums();
            await repoAlbum.PostAlbums(title,artist,price);

            return res.status(200).json({
                message:'Album creado correctamente',
                body:{
                    album:{title,artist,price}
                }
            });
        }
        catch(e){
            return res.status(500).json({message:'Error al crear el album'})
        }
}

const GetAlbumsById=async(req,res)=>{
    try{
        const {id} = req.params;
        const repoAlbum = new RepoAlbums();
        const response = await repoAlbum.GetAlbumsById(id);
        console.log(response);

        if (response.length === 0) 
            return res.status(404).json({message: 'El album no existe'});

        return res.status(200).json(response);
    }catch(e){
        console.log(e);
        return res.status(500).json({message:'Error al obtener el album'})
    }
}

const PutAlbums=async (req,res)=>{

    try{
        const {id} = req.params;
        const {title,artist,price} = req.body;
        const repoAlbum = new RepoAlbums();

        const respExist = await repoAlbum.GetAlbumsById(id);

        if (respExist.length === 0){
            return res.status(404).json({message:'El album no existe'});
        }

        const response =await repoAlbum.PutAlbums(title,artist,price,id);
        console.log(response);
        res.status(200).json({message:'Album editado correctamente'});
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message:'Error al editar el album'})
    }

}

const DeleteAlbums =async (req,res)=>{

    try{
        const {id} = req.params;
        const repoAlbum = new RepoAlbums();
    
        const respExist = await repoAlbum.GetAlbumsById(id);

        if (respExist.length === 0){
            return res.status(404).json({message:'El album no existe'});
        }

        const response = await repoAlbum.DeleteAlbums(id);

        console.log(response);
        return res.status(200).json({
            message:`Album eliminado correctamente del id ${id}`
        });
    }
    catch(e){
        return res.status(500).json({message:'Error al eliminar el album'})
    }
        
}

export const GetMovies =(req,res)=>{

    const movies = [
        {Title:'Wonka',Year:2021, Actors:["Timothée Chalamet", "Keegan-Michael Key", "Olivia DeJonge"]},
        {Title:'The Matrix',Year:1999, Actors:["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]},
        {Title:'The Matrix Reloaded',Year:2003, Actors:["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]},
        {Title:'The Matrix Revolutions',Year:2003, Actors:["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]},
        {Title:'The Matrix Resurrections',Year:2021, Actors:["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]},
    ]

    return res.json(movies);
}

export {Health,GetAlbums,PostAlbums,GetAlbumsById,PutAlbums,DeleteAlbums}; 