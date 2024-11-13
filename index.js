const express = require('express');
const cors = require('cors');



const app = express();
const port = 3000;
const appCustom = require('./config/appCustom');


const corsOptions = {
    origin: ['http://127.0.0.1:5500', 'https://websiteadr-backend-production.up.railway.app', 'https://www.adrielwebdesign.site', 'http://127.0.0.1:5501'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true,  
    optionsSuccessStatus: 204 
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
appCustom(app, express);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});