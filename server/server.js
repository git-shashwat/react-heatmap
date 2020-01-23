const path = require('path');
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8000;
const publicDirPath = path.join(__dirname, '../public');

const app = express();
app.use(cors());
app.use(express.static(publicDirPath));
app.use(express.json());

const data = require(path.join(publicDirPath, 'database.json'));

app.get('/data', (req, res) => {
    res.json(data);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up and running on port', port);
});