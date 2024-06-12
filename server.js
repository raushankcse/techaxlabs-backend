import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const app = express();


const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



import routes from './Routes/index.js'
app.use(routes);


app.listen(PORT, () => console.log(`listen on ${PORT}`))