import express from 'express';
import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config/config'

const router = express.Router();

// @route       POST api/users
// @desc        Register a new user
// @access      Public
router.post('/register', [
    check('login', 'Login is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { login, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        
        if (user) {
            res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({
            login,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };
        
        jwt.sign(
            payload, 
            config.jwtSecret, 
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;