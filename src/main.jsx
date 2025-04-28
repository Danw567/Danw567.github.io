import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

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


createRoot(document.getElementById('root')).render(  
  <StrictMode>
    <App />
  </StrictMode>
)

