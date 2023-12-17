const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messages'); // Import your routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', messageRoutes); // Mount your message routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
