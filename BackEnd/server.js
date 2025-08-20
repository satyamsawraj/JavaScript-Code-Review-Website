require('dotenv').config();
const app = require('./src/app');
const cors = require('cors'); // Import the cors middleware

// Use the cors middleware to enable CORS for all requests
app.use(cors()); 

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});