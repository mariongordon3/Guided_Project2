import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import cors from 'cors';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const swapi_db = process.env.MONGO_DB;
const characters_collection = process.env.MONGO_DB_CHARACTERS_COLLECTION;
const films_collection = process.env.MONGO_DB_FILMS_COLLECTION;
const planets_collection = process.env.MONGO_DB_PLANETS_COLLECTION;
const films_characters_collection = process.env.MONGO_DB_FILMS_CHARACTERS_COLLECTION;
const films_planets_collection = process.env.MONGO_DB_FILMS_PLANETS_COLLECTION;

const app = express(); 
app.use(cors());
const port = process.env.PORT;

app.get('/api/characters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(swapi_db);
        const char_coll = db.collection(characters_collection);
        const characters = await char_coll.find({}).toArray();
        res.status(200).send(characters);
    } catch (err) { 
        console.log('Error: ', err);
        res.status(500).send('Could not fetch characters!');
    }
});

app.get('/api/films', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(swapi_db);
        const film_coll = db.collection(films_collection);
        const films = await film_coll.find({}).toArray();
        res.status(200).send(films);
    } catch (err) { 
        console.log('Error: ' , err);
        res.status(500).send('Could not fetch films!');
    }
});

app.get('/api/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(swapi_db);
        const planets_coll = db.collection(planets_collection);
        const planets = await planets_coll.find({}).toArray();
        res.status(200).send(planets);
    } catch (err) { 
        console.log('Error: ', err);
        res.status(500).send('Could not fetch planets!');
    }
});

app.get('/api/characters/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(swapi_db);
        const char_coll = db.collection(characters_collection);
        const character = await char_coll.find({"id": Number(id)}).toArray();
        res.status(200).send(character);
    } catch (err) { 
        console.log('Error: ', err);
        res.status(500).send('Could not fetch character!')
    }
});

app.get('/api/films/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const films_coll = db.collection(films_collection);
    const film = await films_coll.find({"id": Number(id)}).toArray();
    res.status(200).send(film);
    } catch (err) { 
        console.log('Error: ', err);
        res.status(500).send('Could not fetch film!')
    }
});

app.get('/api/planets/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(swapi_db);
        const planets_coll = db.collection(planets_collection);
        const planet = await planets_coll.find({"id": Number(id)}).toArray();
        res.status(200).send(planet);
    } catch (err) {
        console.log('Error: ', err);
        res.status(500).send('Could not fetch planet!');
    }

});
app.get('/api/films/:id/characters', async (req, res) => {
    try {
                const client = await MongoClient.connect(url);
                const db = client.db(swapi_db);
                const collection = db.collection(films_characters_collection);
                const {id} = req.params
                const filmsCharacters = await collection.find({film_id:Number(id)}).toArray();
            res.json(filmsCharacters);
            } catch (err) {
                console.error("Error:", err);
            }
});

app.get('/api/films/:id/planets', async (req, res) => {
    try {
                const client = await MongoClient.connect(url);
                const db = client.db(swapi_db);
                const collection = db.collection(films_planets_collection);
                const {id} = req.params
                const filmsPlanets = await collection.find({film_id:Number(id)}).toArray();
            res.json(filmsPlanets);
            } catch (err) {
                console.error("Error:", err);
            }
});
app.get('/api/characters/:id/films', async (req, res) => {
    try {
            const client = await MongoClient.connect(url);
            const db = client.db(swapi_db);
            const collection = db.collection(films_characters_collection);
            const {id} = req.params
            const characterFilms = await collection.find({character_id:Number(id)}).toArray();
            res.json(characterFilms);
            } catch (err) {
                console.error("Error:", err);
            }
});
app.get('/api/planets/:id/films', async (req, res) => {
    try {
                const client = await MongoClient.connect(url);
                const db = client.db(swapi_db);
                const collection = db.collection(films_planets_collection);
                const {id} = req.params
                const planetsFilms = await collection.find({planet_id:Number(id)}).toArray();
            res.json(planetsFilms);
            } catch (err) {
                console.error("Error:", err);
            }
});
app.get('/api/planets/:id/characters', async (req, res) => {
    try {
                const client = await MongoClient.connect(url);
                const db = client.db(swapi_db);
                const collection = db.collection(characters_collection);
                const {id} = req.params
                const planetCharacters = await collection.find({homeworld:Number(id)}).toArray();
            res.json(planetCharacters);
            } catch (err) {
                console.error("Error:", err);
            }
        })


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

