import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In your server file (e.g., server.js or app.js)
const express = require('express');
const path = require('path');
const app = express();

// Add this line to serve .jsx files as JavaScript
app.use((req, res, next) => {
  if (req.url.endsWith('.jsx')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  next();
});

// Serve static files (assuming your client-side code is in 'public')
app.use(express.static(path.join(__dirname, 'public')));

// ... rest of your server code ...

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

