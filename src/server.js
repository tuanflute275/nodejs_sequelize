import express from 'express';
import morgan  from 'morgan';
import configViewEngine from './config/configViewEngine';
import connectDB from './config/connectDB'
import innitWebRoute from './routes/web';
import { urlencoded } from 'body-parser';
const app = express()
// connect port
require('dotenv').config()
const port = process.env.PORT || 8080
// body-parse
app.use(urlencoded())
app.use(express.json())
// morgan
app.use(morgan('tiny'))
// view ejs
configViewEngine(app)

// innit web route
innitWebRoute(app)
connectDB()
// 
app.listen(port, ()=>{
    console.log(`web run with link: http://localhost:${port}`);
})