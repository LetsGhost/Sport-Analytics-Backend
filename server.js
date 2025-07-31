require('dotenv').config();
const express = require('express');
const app = express();
const dataRoutes = require('./routes/data');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Create DATA_PATH
const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'data.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, '{}', 'utf8');
}

app.use('/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
