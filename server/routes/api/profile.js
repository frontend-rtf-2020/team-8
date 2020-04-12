import express from 'express';
import auth from '../../middleware/auth';
import Profile from '../../models/Profile';
import User from '../../models/User';

const router = express.Router();

// @route       GET api/profile/me
// @desc        Get current user's profile
// @access      Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['login']);

        if (!profile) {
            return res.status(400).json({ msg: "There is no profile for this user" });
        }

        res.json(profile);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

// @route       POST api/profile/
// @desc        Create or Update User's profile
// @access      Private
router.post('/', auth, async (req, res) => {
    const {
        firstName,
        secondName,
        city,
        country,
        status,
        vk,
        instagram,
        facebook,
        twitter,
        youtube
    } = req.body;

    // Build Profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (firstName) profileFields.firstName = firstName;
    if (secondName) profileFields.secondName = secondName;
    if (city) profileFields.city = city;
    if (country) profileFields.country = country;
    if (status) profileFields.status = status;

    // Build social object
    profileFields.social = {};
    if (vk) profileFields.social.vk = vk;
    if (vk) profileFields.social.instagram = instagram;
    if (vk) profileFields.social.facebook = facebook;
    if (vk) profileFields.social.twitter = twitter;
    if (vk) profileFields.social.youtube = youtube;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            // Update
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            
            return res.json(profile);
        }

        // Create
        profile = new Profile(profileFields);
        
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       GET api/profile/
// @desc        Get all profiles
// @access      Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['login']);

        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       GET api/profile/user/:user_id
// @desc        Get profile by user ID
// @access      Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id })
            .populate('user', ['login']);
        
        if (!profile) {
            return res.status(400).json({ msg: "Profile not found"});
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: "Profile not found"});
        }
        res.status(500).send('Server Error');
    }
});


// @route       DELETE api/profile/
// @desc        Delete profile and user
// @access      Private
router.delete('/', auth, async (req, res) => {
    try {
        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id }); 
        // Remove user       
        await User.findOneAndRemove({ _id: req.user.id });      

        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;