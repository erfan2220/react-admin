const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});


app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});