const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/save', (req, res) => {
    const content = req.body.content;
    // Save the content to a file or database (explained below).
    res.send('Content saved successfully.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
