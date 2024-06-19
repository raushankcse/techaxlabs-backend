import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const app = express();


const PORT = process.env.PORT || 3001;


const allowedOrigins = ['https://techaxlabs-frontend.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


import routes from './Routes/index.js'
app.use(routes);


app.listen(PORT, () => console.log(`listen on ${PORT}`))