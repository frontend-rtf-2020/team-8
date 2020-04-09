import express from 'express';
import auth from '../../middleware/auth';
import User from '../../models/User';

const router = express.Router();

// @route       GET api/auth
// @access      Public
router.get('/', auth, async (req, res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        res.status(500).send('Server Error');
    }
});

export default router;