import express from 'express';
import { check, validationResult } from 'express-validator'

const router = express.Router();

// @route       POST api/users
// @desc        Register a new user
// @access      Public
router.post('/register', [
    check('login', 'Login is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //See if user exists

    //Encrypt password

    //Return jsonwebtoken

    console.log(req.body);
});

export default router;