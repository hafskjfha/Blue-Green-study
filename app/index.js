const express = require('express');
const app = express();

const PORT = 3000;
const VERSION = process.env.APP_VERSION || 'unknown';

app.get('/', (req, res) => {
  res.send(`Hello from ${VERSION} v3`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: VERSION });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, version=${VERSION}`);
});
