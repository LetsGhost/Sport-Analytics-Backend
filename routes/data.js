// routes/data.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const apiKeyMiddleware = require('../middleware/middleware');

const DATA_PATH = path.join(__dirname, '../data/data.json');

router.use(apiKeyMiddleware);

// GET /data
router.get('/', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read data.' });
    res.json(JSON.parse(data || '{}'));
  });
});

// POST /data
router.post('/', express.json(), (req, res) => {
  fs.writeFile(DATA_PATH, JSON.stringify(req.body, null, 2), (err) => {
    if (err) return res.status(500).json({ error: 'Failed to write data.' });
    res.json({ status: 'Data saved.' });
  });
});

module.exports = router;
