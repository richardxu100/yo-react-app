const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// look up path.resolve()
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('Server has started!');
});
