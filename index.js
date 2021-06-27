const express = require('express');
let cors = require('cors');
const apis = require('./routes/api/apis');
const connectDB = require('./config/db');
const GOESocket  = require('./config/GoeSocket');

const app = express();

// connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

app.use('/', apis);

const port = process.env.PORT || 8082;

const server = app.listen(port, () => console.log(`Server running on port ${port}`));
GOESocket.initializeSocket(server);