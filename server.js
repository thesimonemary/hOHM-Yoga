const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export for Vercel serverless functions
module.exports = app;

// Start the server only if not in Vercel environment
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`\n✨ hOHM Yoga is running!`);
    console.log(`📍 Open your browser and go to: http://localhost:${PORT}\n`);
  });
}
