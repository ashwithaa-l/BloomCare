const { Patient } = require('../Models/PatientSchema');
const jwt = require('jsonwebtoken');

const checkUser = async (req, res, next) => {
    try {
        const headers = req.headers.authorization;
        if (!headers) {
            return res.status(401).json({ error: true, message: 'Unauthorized' });
        }
        

        const token = headers.split(" ")[1];
    
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: true, message: err.message });
            }

            const doc = await Patient.findOne({ username: decoded.username });
            if (!doc) {
                return res.status(401).json({ error: true, message: 'Unauthorized' });
            }
            req.user = { username: decoded.username };
            next();
        });
    } catch (err) {
        console.log(err.message);
        return res.status(401).json({ error: true, message: 'Unauthorized' });
    }
};

module.exports = { checkUser };
