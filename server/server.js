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

app.get('/api/planets', (req, res) => {
    res.send({"test": "ok!"});
});

	// /api/characters
	// /api/films
	// /api/planets
	// /api/characters/:id
	// /api/films/:id
	// /api/planets/:id


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});