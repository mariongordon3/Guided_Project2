import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';
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
const port = process.env.PORT;

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
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

