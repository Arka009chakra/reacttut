const express = require("express");
const cors = require("cors");
const app = express();
const m = require("./mongodb");
const m1=require("./mongodb1")
const crypto = require("crypto");
const key = "adnan-tech-programming-computers";
const algo = "aes-256-cbc";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
    try {
        const { email, name, psw } = req.body;

        const result = await m.findOne({ email });
        if (result) {
            return res.status(400).json({ message: 'Email Already Registered!!' });
        }

        const cipher = crypto.createCipher(algo, key);
        const encryptedPsw = cipher.update(psw, "utf-8", "hex") + cipher.final("hex");

        const newUser = await m.create({
            email,
            name,
            password: encryptedPsw,
        });

        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.post('/login', async (req, res) => {
    try {
        const result = await m.findOne({ email: req.body.email });

        if (!result) {
            return res.status(400).json({ message: 'Email Not Registered!!' });
        } else {
            const password = req.body.psw; // Changed from req.body.password to req.body.psw

            var cipher = crypto.createCipher(algo, key);
            var encrypted = cipher.update(password, "utf-8", "hex") + cipher.final("hex");

            if (result.password === encrypted) {
                return res.status(200).json({ message: 'Login successfully!' });
            } else {
                return res.status(400).json({ message: 'Password Incorrect!!' });
            }
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.post("/register1", async (req, res) => {
    try {
        const { email, name, psw } = req.body;

        const result = await m1.findOne({ email });
        if (result) {
            return res.status(400).json({ message: 'Email Already Registered!!' });
        }

        const cipher = crypto.createCipher(algo, key);
        const encryptedPsw = cipher.update(psw, "utf-8", "hex") + cipher.final("hex");

        const newUser = await m1.create({
            email,
            name,
            password: encryptedPsw,
        });

        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(5485);