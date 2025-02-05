const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test route
app.get('/', (req, res) => {
    res.send("Shopify Seasonal Effects App is Running!");
});

// API to toggle the glowing stars effect
app.post('/apply-effect', (req, res) => {
    const { effectType } = req.body;
    console.log(`Applying effect: ${effectType}`);
    res.json({ message: `Effect ${effectType} applied!` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
