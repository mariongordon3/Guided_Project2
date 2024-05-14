import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express(); 
const port = process.env.PORT;

app.get('/api/planets', (req, res) => {
    res.send({"test": "ok!"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});