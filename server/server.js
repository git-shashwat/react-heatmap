const path = require('path');
const express = require('express');

const port = process.env.PORT || 8000;
const publicDirPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicDirPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up and running on port', port);
});