const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    console.log(`Server ${process.env.serverNum} received a request`);
    res.send(`Hello from server ${process.env.serverNum}`);
});

app.listen(80, () => {
    console.log(`Server ${process.env.serverNum} is running`);
});
