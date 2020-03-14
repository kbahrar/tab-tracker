const {User} = require('../model');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    const sign = jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
    // console.log(sign)
    return sign;
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        }
        catch (err) {
            // console.log(err)
            res.status(400).send({
                error: 'This email account is already in use.'
            });
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                res.status(403).send({
                    error: 'The login information was incorrect'
                });
                // res.end();
            }
            const isValid = await user.comparePassword(password);
            console.log(isValid);
            if (!isValid) {
                res.status(404).send({
                    error: 'The login information was incorrect'
                });
                // res.end();
            }
            const userJson = user.toJSON();
            const token = jwtSignUser(userJson);
            // console.log('hi')
            // console.log(token);
            res.send({
                user: userJson,
                token: token
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Something went wrong.'
            });
        }
    }
}