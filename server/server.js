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
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const char_coll = db.collection(characters_collection);
    const characters = await char_coll.find({}).toArray();
    res.send(characters);
});

app.get('/api/films', async (req, res) => {
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const film_coll = db.collection(films_collection);
    const films = await film_coll.find({}).toArray();
    res.send(films);
});

app.get('/api/planets', async (req, res) => {
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const planets_coll = db.collection(planets_collection);
    const planets = await planets_coll.find({}).toArray();
    res.send(planets);
});

app.get('/api/characters/:id', async (req, res) => {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const char_coll = db.collection(characters_collection);
    const character = await char_coll.find({"id": Number(id)}).toArray();
    res.send(character);
});

app.get('/api/films/:id', async (req, res) => {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const films_coll = db.collection(films_collection);
    const film = await films_coll.find({"id": Number(id)}).toArray();
    res.send(film);
});

app.get('/api/planets/:id', async (req, res) => {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(swapi_db);
    const planets_coll = db.collection(planets_collection);
    const planet = await planets_coll.find({"id": Number(id)}).toArray();
    res.send(planet);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});