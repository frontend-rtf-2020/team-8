import express from 'express';
import crypto from 'crypto';
import { check, validationResult } from 'express-validator';
import User from '../../models/User';
import VerificationToken from '../../models/VerificationToken';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

const router = express.Router();

// @route       POST api/users
// @desc        Register a new user
// @access      Public
router.post('/', [
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

        // Verification token
        const token = new VerificationToken({
            userId: user.id,
            token: crypto.randomBytes(16).toString('hex')
        });

        await token.save((err) => {
            if (err) { return res.status(500).send({ msg: err.message }); }

            // Send the email
            const smtpConfig = {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // use SSL
                auth: {
                    user: config.SENDGRID_USERNAME,
                    pass: config.SENDGRID_PASSWORD
                }
            };
            const transporter = nodemailer.createTransport(smtpConfig);
            var mailOptions = {
                from: 'dreamteammessenger@gmail.com',
                to: user.email,
                subject: 'Account Verification Token',
                text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp://' + req.headers.host + '/api/users/confirmation/' + token.token + '.\n'
            };
            transporter.sendMail(mailOptions, (err) => {
                if (err) {
                    return res.status(500).send({ msg: err.message });
                }
                res.status(200).json({ msg: 'A verification email has been sent to ' + user.email });
            });
        });

        /*const payload = {
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
        );*/

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route       POST api/users/confirmation
// @desc        Verification Token confirmation
// @access      Public
router.post('/confirmation', async (req, res) => {
    // Try to find a token
    const token = await VerificationToken.findOne({ token: req.body.token });

    if (!token) {
        return res
            .status(400)
            .json({ msg: 'We were unable to find a valid token. Your token may have expired.' });
    }

    // If we found a token, find a matching user
    let user = await User.findOne({ _id: token.userId });

    if (!user) {
        return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
    }
    if (user.isVerified) {
        return res.json({ msg: 'This user has already been verified.' });
    }

    // Verify and save the user
    user.isVerified = true;
    await user.save((err) => {
        if (err) {
            return res.status(500).send({ msg: err.message });
        }
        res.status(200).send("The account has been verified. Please log in.");
    });
});

// @route       POST api/users/resend
// @desc        Resend Verification Token confirmation
// @access      Public
router.post('/resend', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
    }
    if (user.isVerified) {
        return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });
    }

    // Verification token
    const token = new VerificationToken({
        userId: user.id,
        token: crypto.randomBytes(16).toString('hex')
    });

    // Save the token
    await token.save(err => {
        if (err) {
            return res.status(500).send({ msg: err.message });
        }

        // Send the email
        const smtpConfig = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: config.SENDGRID_USERNAME,
                pass: config.SENDGRID_PASSWORD
            }
        };
        const transporter = nodemailer.createTransport(smtpConfig);
        var mailOptions = {
            from: 'dreamteammessenger@gmail.com',
            to: user.email,
            subject: 'Account Verification Token',
            text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp://' + req.headers.host + '/api/users/confirmation/' + token.token + ' (IT SHOULD BE POST method)'
        };
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                return res.status(500).send({ msg: err.message });
            }
            res.status(200).json({ msg: 'A verification email has been sent to ' + user.email });
        });
    });
});

export default router;