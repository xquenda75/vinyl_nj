import db from '../infra/db.js';


const sqlGetAlbums = 'SELECT * FROM albums ORDER BY id ASC';
const sqlPostAlbums = 'INSERT INTO albums (title, artist, price) VALUES ($1, $2, $3)';
const sqlGetAlbumsById = 'SELECT * FROM albums WHERE id = $1';
const sqlDeleteAlbums = 'DELETE FROM albums WHERE id = $1';
const sqlPutAlbums = 'UPDATE albums SET title=$1, artist=$2, price=$3 WHERE id=$4';


export class RepoAlbums {
    constructor() {
    }
    async GetAlbums() {
        try {
            const client = db.getClient();
            console.log(client);
            const response = await client.query(sqlGetAlbums);
            
            console.log(response.rows);
            return response.rows;
        } catch (e) {
            throw new Error('Error al obtener los datos');
        }
    }

    async PostAlbums(title, artist, price) {
        try {
            const client = db.getClient();
            console.log(client);
            const response = await client.query(sqlPostAlbums, [title, artist, price]);
            
            return response;
        } catch (e) {
            throw new Error('Error al crear el album');
        }
    }

    async GetAlbumsById(id) {
        try {
            const client = db.getClient();
            console.log(client);
            const response = await client.query(sqlGetAlbumsById, [id]);
            
            return response.rows;
        } catch (e) {
            throw new Error('Error al obtener el album');
        }
    }

    async PutAlbums(title, artist, price,id) {
        try {
            const client = db.getClient();
            console.log(client);
            const response = await client.query(sqlPutAlbums, [title, artist, price, id]);
            
            return response;
        } catch (e) {
            console.log(e);
            throw new Error('Error al actualizar el album');
        }
    }

    async DeleteAlbums(id) {
        try {
            const client = db.getClient();
            console.log(client);
            const response = await client.query(sqlDeleteAlbums, [id]);
            return response;
        } catch (e) {
            throw new Error('Error al eliminar el album');
        }
    }
}