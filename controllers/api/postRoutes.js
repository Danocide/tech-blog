const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({ ...req.body, user_id: req.session.user_id, });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
          res.status(404).json({ message: 'There is no post with this id found.' });
          return;
      }
      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
      const postData = await Post.update(
          {
              ...req.body,
              user_id: req.session.user_id,
          },
          {
              where: {
                  id: req.params.id,
                  user_id: req.session.user_id,
              },
          }
      );

      if (!postData) {
          res.status(404).json({ message: 'There is no post with this id found.' });
          return;
      }

      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});


module.exports = router;