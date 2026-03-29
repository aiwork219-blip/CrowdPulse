// Vercel Web Analytics initialization
// This file imports and initializes the @vercel/analytics package

import { inject } from 'https://cdn.jsdelivr.net/npm/@vercel/analytics@1/+esm';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detect environment (production/development)
  debug: false  // Set to true for debug logging in development
});
