const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ message: 'You sent:', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
