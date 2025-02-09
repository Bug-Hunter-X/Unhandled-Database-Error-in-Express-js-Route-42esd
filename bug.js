const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!user) {
    return res.status(404).send('User not found'); // forgot to handle the error properly
  }
  res.send(user);
});