const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/PatientRoutes');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.use('/patient', patientRoutes);

function startServer() {
    const PORT = 7000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

(async () => {
    await connectToDB();
    startServer();
})();
