import express from 'express';

const router = express.Router();

// @route       GET api/posts
// @access      Public
router.get('/', (req, res) => res.send('Posts router'));

export default router;