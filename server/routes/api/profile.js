import express from 'express';

const router = express.Router();

// @route       GET api/profile
// @access      Public
router.get('/', (req, res) => res.send('Profile router'));

export default router;