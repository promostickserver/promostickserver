import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import { addUser, activateCode } from './controllers/activation.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(express.json()) 

app.use(cors());

app.get('/', (req, res) => {
    res.send('Promo stick server')
})

app.post('/addUser', addUser)
app.post('/activateCode', activateCode)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
})
.catch(error => console.log("ERROR V: " + error.message))

// mongoose.set('useFindAndModify', false) // da ni warningov v consolu