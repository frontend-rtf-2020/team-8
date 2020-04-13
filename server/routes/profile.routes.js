import express from 'express';

import User from '../models/User';
import Profile from '../models/Profile';

import authCtrl from '../controllers/auth.controller'


const router = express.Router();

export default router