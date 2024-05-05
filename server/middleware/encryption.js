const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error("Hashing failed");
    }
};

exports.comparePasswords = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw new Error("Comparison failed");
    }
};
