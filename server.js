const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'app.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
