const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const authFunction = require("./authFunction");
const { hashPassword, comparePasswords } = require("../middleware/encryption");

const verifyToken = authFunction.verifyToken;
const secretKey = process.env.SECRET_KEY;

exports.addUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await hashPassword(password);
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    const user = await User.findOne({ email: email });

    if (user) {
        res.status(200).send({ message: "Email already exist" });
    } else {
        newUser.save().then(() => {
            res.status(200).send({ message: "User added" });
        });
    }
};

exports.verifyUser = async (req, res) => {
    const token = req.headers.token;

    try {
        verifyToken(token)
            .then(async (decoded) => {
                console.log("here");
                res.status(200).send({
                    message: "Authentication Successfull",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(200).send({ message: "Error Occured", error: err });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    try {
        if (user) {
            const match = await comparePasswords(password, user.password);

            if (match) {
                const token = jwt.sign({ email: user.email }, secretKey, {
                    expiresIn: "1h",
                });
                res.status(200).send({
                    message: "Login Successfull",
                    token: token,
                });
            } else {
                res.status(200).send({ message: "Incorrect password" });
            }
        } else {
            res.status(200).send({ message: "Invalid email" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error });
    }
};


