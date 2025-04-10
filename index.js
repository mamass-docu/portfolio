// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
