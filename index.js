const express = require('express'); // Import Express
const app = express(); // Create an instance of an Express app
const port = 3000; // Define the port

// Define a simple GET API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' }); // Respond with a JSON object
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
