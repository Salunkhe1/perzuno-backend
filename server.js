const express = require('express');
const connectDB = require('./db');

const app = express();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend चालू आहे!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server चालू आहे Port: ${PORT}`));
