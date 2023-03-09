const router = require('express').Router();
const { User, Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const createUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = createUserData.id;
            req.session.username = createUserData.username;
            req.session.logged_in = true;

            res.status(200).json(createUserData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: `Something went wrong please check your email or password and try again. 1` });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: `Something went wrong please check your email or password and try again.` });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.email = userData.email
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;