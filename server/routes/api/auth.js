import express from 'express';

const router = express.Router();

// @route       GET api/auth
// @access      Public
router.get('/', (req, res) => res.send('Auth router'));

export default router;