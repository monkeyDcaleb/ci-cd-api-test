const express = require('express');
const app = express();
app.use(express.json());

const items = [];

app.get('/health', (req, res) => {
    const name = req.body?.name || 'unnamed';
    const item = {id: items.length + 1, name };
    items.push(item);
    res.status(201).json(items);
});

app.get('/items', (req, res) => res.json(items));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/items', (req, res) => {
    const name = req.body?.name || 'unnamed';
    const item = { id: items.length + 1, name };

    items.push(item);
    res.status(201).json(item);
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Server listening on ${port}`)); 