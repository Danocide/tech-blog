const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, async (req, res) => {
    try {
        res.render('profile', {

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router