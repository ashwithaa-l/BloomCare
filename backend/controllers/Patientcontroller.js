const bcrypt = require('bcrypt');
const generateToken = require('../utils/Token');
const { Patient } = require('../Models/PatientSchema');

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const doc = await Patient.findOne({ username });
        if (!doc) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isValid = await bcrypt.compare(password, doc.password);
        if (!isValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = await generateToken(doc.username);
        console.log(token);
        return res.status(200).json({ error: false, message: { token: token } });
    } catch (err) {
        console.error('Login Failed:', err);
        return res.status(401).json({ error: true, message: 'Login Failed' });
    }
};

const signup = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const email = req.body.email;
    try {
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await Patient.findOne({username});
        if (user) {
            return res.status(400).json({ message: "Username or email already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new Patient({
            username,
            password: hashPassword
        });
        await newUser.save();
        const token = await generateToken(newUser.username);
        return res.status(201).json({ error: false, message: { token: token } });
    } catch (err) {
        console.error('User creation failed:', err);
        return res.status(500).json({ message: "User creation failed, please try again later",error:err });
    }
};
const getUser = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(400).json({ error: true, message: 'User not found' });
        }
        return res.status(200).json({ error: false, message: req.user });
    } catch (err) {
        console.error('User not found:', err);
        return res.status(500).json({ error: true, message: 'User not found' });
    }
};

module.exports = {login,signup,getUser};
