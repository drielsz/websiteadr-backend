const express = require('express');
const app = express();
const appCustom = require('./config/appCustom');

const port = 3000

appCustom(app, express);

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})
