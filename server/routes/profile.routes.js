import express from 'express';

import authCtrl from '../controllers/auth.controller';
import profileCtrl from '../controllers/profile.controller';


const router = express.Router();

router.route('/profile')
    .get(profileCtrl.getAllProfiles)
    .post(authCtrl.requireSignin, profileCtrl.createOrUpdateProfile)
    .delete(authCtrl.requireSignin, profileCtrl.deleteUser);

router.route('/profile/me')
    .get(authCtrl.requireSignin, profileCtrl.getMyProfile);

router.route('/profile/:user_id')
    .get(profileCtrl.getProfileById);


export default router