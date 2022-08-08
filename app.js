const express = require('express')
var cors = require('cors');
const connectDB = require('./config/db')
const books = require('./routes/api/books')

const app = express();

// connect to database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world from node!'))

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/books', books);

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))